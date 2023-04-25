import { useEffect, useRef, useState } from 'react';
// import { useGesture } from 'react-use-gesture';
import { useGesture } from '@use-gesture/react';
import { useSprings } from '@react-spring/three';
import { useThree } from '@react-three/fiber';

import { useSRGBTexture } from '../customHooks/Texture';
import { useAudio } from '../customHooks/Audio';

import sfx from '../sounds/sfx/DM-CGS-20.wav';
import SquareCard from '../models/SquareCard';

const DragCards = ({ resources, setIsWin, setGameOver, setId }) => {
	const count = 8;
	const [gone] = useState(() => new Set());
	const [current, setCurrent] = useState(0);
	const [answerCount] = useState(() => new Set());
	const { play } = useAudio(sfx);
	const { size, viewport } = useThree();
	const aspect = size.width / viewport.width;
	const [springs, setSpring] = useSprings(count, (i) => ({
		from: {
			position: [0, 0, i * -0.01],
			rotation: [-Math.PI / 2, 0, 0],
			scale: [200, 200, 200],
		},
	}));

	const textures = useSRGBTexture(resources.map((element) => element.address));

	const answers = resources.map((element) => element.answer);

	useEffect(() => {
		if (current < 8) setId(current);
		setSpring.start((i) => {
			if (current !== i) return;
			return {
				position: [0, -4, 4],
				rotation: [-Math.PI / 3, 0, 0],
				scale: [400, 400, 400],
			};
		});
	}, [current]);

	const checkAnswer = (dir, index, answer) => {
		if ((dir < 0 && answer) || (dir > 0 && answer === false)) {
			answerCount.add(index);
		}
	};

	const bind = useGesture(
		{
			onDrag: ({ args: [index], active, offset: [x, y] }) => {
				const xMov = x / aspect;
				const yMov = -y / aspect;
				const xDir = xMov > -7 && xMov <= -1 ? -1 : xMov >= 1 && xMov < 7 ? 1 : 0;
				const yDir =
					yMov > -12 && yMov <= -1 ? -1 : yMov >= 1 && yMov < 12 ? 1 : 0;
				if (!active && xDir) {
					gone.add(index);
					setCurrent(current + 1);
					checkAnswer(xDir, index, answers[index]);
					play(0.25); // -23LUFS
					setSpring({ rotation: [-Math.PI / 2, 0, 0], scale: [200, 200, 200] });
				}
				document.body.classList.toggle('pointerClawDown', active);

				setSpring.start((i) => {
					if (index !== i) return { scale: [0, 0, 0] };
					const isGone = gone.has(index);
					const xPlacement = isGone ? xDir * 5 : active ? xMov : 0;
					// const yPlacement = isGone ? yDir : down ? yMov : 0;
					if (active && isGone) gone.delete(index);
					return {
						position: [xPlacement, yMov, isGone ? i * 0.01 : 4],
					};
				});

				if (answerCount.size < count && gone.size === count) {
					setTimeout(
						() =>
							answerCount.clear() ||
							gone.clear() ||
							setGameOver(true) ||
							setSpring((i) => ({
								position: [0, 0, i * -0.01],
								delay: i * 100,
							})),
						1000,
					);
					setTimeout(() => {
						setGameOver(false);
						setCurrent(0);
					}, 3000);
				} else if (answerCount.size === count && gone.size === count) {
					setIsWin(true);
				}
			},
			// onHover: ({ args: [index], hovering }) =>
			// 	setSpring.start((i) => {
			// 		if (index !== i) return;
			// 		return {
			// 			rotation: hovering ? [-Math.PI / 2, 0, 0] : [-Math.PI / 6, 0, 0],
			// 			scale: hovering ? [200, 200, 200] : [400, 400, 400],
			// 		};
			// 	}),
		},
		{
			drag: {
				from: (c) => {
					return [
						springs[c.args].position.animation.to[0] * aspect,
						-springs[c.args].position.animation.to[1] * aspect,
					];
				},
			},
		},
	);

	return (
		<>
			{springs.map((spring, index) => {
				return (
					<SquareCard
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

const DragGridCards = ({ resources, setIsWin, setGameOver, setId }) => {
	const count = 12;
	const [gone] = useState(() => new Set());
	const [current, setCurrent] = useState(0);
	const [answerCount] = useState(() => new Set());
	const { size, viewport } = useThree();
	const aspect = size.width / viewport.width;
	const { play } = useAudio(sfx);
	const [springs, setSpring] = useSprings(count, (i) => ({
		from: {
			position:
				i < (count - (count % 5)) / 2
					? [i * 4 - 8, 14, 0]
					: i >= (count - (count % 5)) / 2 && i < count - (count % 5) - 1
					? [(i - count / 2.6) * 4 - 7.5, 10, 0]
					: [(i - count / 1.5) * 4 - 7.5, 6, 0],
			rotation: [-Math.PI / 2, 0, 0],
			scale: [250, 250, 250],
		},
	}));

	const textures = useSRGBTexture(resources.map((element) => element.address));

	const answers = resources.map((element) => element.answer);

	const checkAnswer = (dir, index, answer) => {
		if ((dir > 0 && answer) || (dir < 0 && answer === false)) {
			answerCount.add(index);
		}
	};

	const bind = useGesture(
		{
			onDrag: ({ args: [index], down, offset: [x, y] }) => {
				const xMov = x / aspect;
				const yMov = -y / aspect;
				const xDir =
					xMov > -18 && xMov <= -10 ? -1 : xMov >= 10 && xMov < 18 ? 1 : 0;
				if (!down && xDir) {
					gone.add(index);
					setCurrent(current + 1);
					checkAnswer(xDir, index, answers[index]);
					play(0.25); // -23LUFS
				}
				setSpring.start((i) => {
					const isGone = gone.has(index);
					if (index !== i)
						return { scale: down && !isGone ? [0, 0, 0] : [250, 250, 250] };
					const yDir = isGone ? 15 : yMov;
					const xPlacement = isGone ? xDir * 15 : down ? xMov : 0;
					const yPlacement = isGone ? 0 : yMov;
					// if (active && isGone) gone.delete(index);
					return {
						to: [
							{
								position: xPlacement
									? [xPlacement, yDir, down ? 0 : -5]
									: i < (count - (count % 5)) / 2
									? [i * 4 - 8, 14, 0]
									: i >= (count - (count % 5)) / 2 &&
									  i < count - (count % 5) - 1
									? [(i - count / 2.6) * 4 - 7.5, 10, 0]
									: [(i - count / 1.5) * 4 - 7.5, 6, 0],
							},
							{
								position: xPlacement
									? [xPlacement, yPlacement, down ? 0 : -5]
									: i < (count - (count % 5)) / 2
									? [i * 4 - 8, 14, 0]
									: i >= (count - (count % 5)) / 2 &&
									  i < count - (count % 5) - 1
									? [(i - count / 2.6) * 4 - 7.5, 10, 0]
									: [(i - count / 1.5) * 4 - 7.5, 6, 0],
							},
							// { position: [xPlacement, yPlacement, isGone ? 0 : -5] },
							{
								scale: down
									? [750, 750, 750]
									: isGone
									? [0, 0, 0]
									: [250, 250, 250],
							},
						],
					};
				});

				if (answerCount.size < count && gone.size === count) {
					setTimeout(
						() =>
							answerCount.clear() ||
							gone.clear() ||
							setGameOver(true) ||
							setSpring((i) => ({
								position:
									i < (count - (count % 5)) / 2
										? [i * 4 - 8, 14, 0]
										: i >= (count - (count % 5)) / 2 &&
										  i < count - (count % 5) - 1
										? [(i - count / 2.6) * 4 - 7.5, 10, 0]
										: [(i - count / 1.5) * 4 - 7.5, 6, 0],
								delay: i * 100,
								scale: [250, 250, 250],
							})),
						1000,
					);
					setTimeout(() => {
						setGameOver(false);
						setCurrent(0);
						setId(null);
					}, 3000);
				} else if (answerCount.size === count && gone.size === count) {
					setIsWin(true);
				}
			},
			onHover: ({ args: [index], hovering }) =>
				setSpring.start((i) => {
					if (index !== i) return;
					if (hovering) {
						document.body.classList.add('pointer');
						setId(index);
					} else {
						document.body.classList.remove('pointer');
						setId(null);
					}
					return {
						scale: hovering ? [400, 400, 400] : [250, 250, 250],
					};
				}),
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

	return (
		<>
			{springs.map((spring, index) => {
				return (
					<SquareCard
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

export { DragCards, DragGridCards };
