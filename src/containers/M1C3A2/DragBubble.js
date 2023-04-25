import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { useGesture } from '@use-gesture/react';
import { a, useSprings } from '@react-spring/three';
import * as THREE from 'three';

import { useAudio } from '../../customHooks/Audio';
import { useSRGBTexture } from '../../customHooks/Texture';
import { RandomRange } from '../../util/Mathf';

let indexValue = 0;
const DragBubble = ({
	resources,
	answerState,
	setAnswerState,
	correctCount,
	setCorrectCount,
	wrongCount,
	setWrongCount,
	setIsWin,
	setGameOver,
}) => {
	const count = 10;
	const [gone] = useState(() => new Set());
	const [randomPos] = useState(() => new Set());
	const { size, viewport } = useThree();
	const aspect = size.width / viewport.width;

	const positions = [
		[-17, 12, 3], //teacG
		[-1, 11, 3], //TecB
		[4, 9, 3], //rabG
		[-5, 11, 3], //rabB
		[8, 12.5, 3], //momG
		[-7, 13, 3], //monB
		[11, 11, 3], //monG
		[2, 11, 3], //monB
		[5, 11, 3], //eagG
		[4, 11, 3], //eagB
	];

	const setValue = () => {
		while (randomPos.size < count) {
			randomPos.add(RandomRange(count, 0));
		}
		return randomPos;
	};

	const randomValue = Array.from(setValue());

	const [springs, setSpring] = useSprings(count, (i) => ({
		from: {
			position: positions[i],
		},
		scale: randomValue[indexValue] === i ? [20, 10, 0.01] : [0, 0, 0],
	}));

	const textures = useSRGBTexture(
		resources.map((element) => element.src),
		true,
		THREE.LinearFilter,
	);

	const answers = resources.map((element) => element.answer);

	const checkAnswer = (dir, answer) => {
		if ((dir < 0 && answer) || (dir > 0 && answer === false)) {
			gone.add(randomValue[indexValue]);
			setAnswerState(true);
			setCorrectCount(correctCount + 1);
		} else {
			setWrongCount(wrongCount + 1);
		}
	};

	const randomBubble = () => {
		let clearTime;
		clearTimeout(clearTime);
		clearTime = setTimeout(() => {
			if (indexValue < randomPos.size) indexValue++;
		}, 1000);
	};

	useEffect(() => {
		gone.clear();
		if (randomPos.size > 0) indexValue = 0;
	}, []);

	useEffect(() => {
		setSpring.start((i) => {
			if (randomValue[indexValue] !== i) return { scale: [0, 0, 0] };
			return {
				scale: [20, 10, 0.01],
			};
		});
	}, [indexValue]);

	useEffect(() => {
		if (answerState) {
			randomBubble();
			setAnswerState(false);
		}
		if (wrongCount === 3) {
			setGameOver(true);
		} else if (correctCount === count) {
			setIsWin(true);
		}
	}, [answerState, wrongCount, correctCount]);

	const bind = useGesture(
		{
			onDrag: ({ args: [index], down, active, offset: [x, y] }) => {
				const xMov = x / aspect;
				const yMov = -y / aspect;
				const xDir =
					xMov > -28 && xMov <= -17 ? -1 : xMov >= 17 && xMov < 28 ? 1 : 0;
				if (!down && xDir) {
					checkAnswer(xDir, answers[randomValue[indexValue]]);
				}
				setSpring.start((i) => {
					if (index !== i) return;
					const isGone = gone.has(index);
					const yDir = isGone ? 15 : yMov;
					const xPlacement = isGone ? xDir * 18 : down ? xMov : 0;
					const yPlacement = down ? yMov : 0;
					return {
						to: [
							{
								position: xPlacement
									? [xPlacement, yDir, isGone ? 6 : 1]
									: positions[index],
							},
							{
								position: xPlacement
									? [xPlacement, yPlacement, isGone ? 6 : 1]
									: positions[index],
								scale: isGone ? [0, 0, 0] : [20, 10, 0.01],
							},
						],
					};
				});
			},
			onHover: ({ args: [index], hovering }) => {
				if (hovering) {
					document.body.classList.add('pointer');
				} else {
					document.body.classList.remove('pointer');
				}
				// setSpring.start((i) => {
				// 	if (randomValue[indexValue] !== i) return { scale: [0, 0, 0] };

				// 	const isGone = gone.has(randomValue[indexValue]);

				// 	return {
				// 		scale:
				// 			hovering && !isGone
				// 				? [30, 20, 0.01]
				// 				: isGone && hovering
				// 				? [0, 0, 0]
				// 				: [20, 10, 0.01],
				// 	};
				// });
			},
		},
		{
			drag: {
				from: (c) => {
					return [
						springs[c.args].position.animation.from[0] * aspect,
						-springs[c.args].position.animation.from[1] * aspect,
					];
				},
			},
		},
	);

	const Bubble = (props) => {
		return (
			<a.mesh {...props.spring} {...props.bind}>
				<boxGeometry />
				<meshToonMaterial map={props.texture} transparent />
			</a.mesh>
		);
	};

	return (
		<>
			{springs.map((spring, index) => {
				return (
					<Bubble
						key={index}
						spring={spring}
						bind={{ ...bind(index) }}
						texture={textures[index]}
					/>
				);
			})}
		</>
	);
};

export default DragBubble;
