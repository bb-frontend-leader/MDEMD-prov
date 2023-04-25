import { useFrame, useThree } from '@react-three/fiber';
import { useGesture } from '@use-gesture/react';
import React, { useState } from 'react';
import { a, useSpring } from '@react-spring/three';
import * as THREE from 'three';

import { useSRGBTexture } from '../../customHooks/Texture';

import PlainAnimator from '../../util/plain-animator';

const SpeechBubblesDragging = ({
	id,
	setId,
	bubble,
	setAnswerState,
	correctCount,
	setCorrectCount,
	completed,
	setCompleted,
}) => {
	const { size, viewport } = useThree();
	const aspect = size.width / viewport.width;
	const [gone] = useState(() => new Set());
	const [spring, setSpring] = useSpring(() => ({
		from: {
			position: [6, 10, 0],
			scale: [7, 5, 0.01],
		},
	}));

	const checkAnswer = (jigsawId) => {
		let copy = [...completed];
		if (id !== null && !copy[jigsawId].complete) {
			if (id === jigsawId) {
				copy[jigsawId].complete = true;
				setCompleted(copy);
				setCorrectCount(correctCount + 1);
			}
		}
	};

	const bind = useGesture(
		{
			onDrag: ({ down, offset: [x, y] }) => {
				const xMov = x / aspect;
				const yMov = -y / aspect;
				const xDir = xMov > -18 && xMov <= -10 ? -1 : 0;
				if (!down && xDir) {
					gone.add(id);
					checkAnswer(id);
					setTimeout(() => {
						setId(null);
						setAnswerState(false);
					}, 1500);
				}
				setSpring.start(() => {
					const isGone = gone.has(id);
					const xPlacement = isGone ? xDir * 15 : down ? xMov : 0;
					const yPlacement = down ? yMov : 0;
					return {
						position: xPlacement
							? [xPlacement, yPlacement, isGone ? -3 : 0]
							: [6, 10, 0],
						scale: isGone ? [0, 0, 0] : [7, 5, 0.01],
					};
				});
			},
		},
		{
			drag: {
				from: () => {
					return [
						spring.position.animation.to[0] * aspect,
						-spring.position.animation.to[1] * aspect,
					];
				},
			},
		},
	);

	const Bubble = () => {
		const textures = useSRGBTexture(
			bubble.map((bubble) => bubble.path),
			true,
			THREE.LinearFilter,
		);

		return (
			<a.mesh {...spring} {...bind()}>
				<boxGeometry />
				<meshBasicMaterial map={textures[id]} transparent />
			</a.mesh>
		);
	};

	return <Bubble />;
};

const Sprites = ({ id, expression }) => {
	const sheet = useSRGBTexture(expression[id].expression.src, true, THREE.LinearFilter);

	const {
		size,
		position,
		rotation,
		tilesHorizontal,
		tilesVertical,
		totalTiles,
		frames,
	} = expression[id].expression;

	const { animator, Size } = {
		animator: new PlainAnimator(
			sheet,
			tilesHorizontal,
			tilesVertical,
			totalTiles,
			frames ?? totalTiles,
		),
		Size: () => {
			const [x, y] = size;
			return [x, y];
		},
	};

	useFrame(() => {
		animator.animate();
	});

	return (
		<mesh position={position} rotation={rotation} castShadow>
			<planeBufferGeometry args={Size()} />
			<meshToonMaterial map={sheet} transparent side={THREE.DoubleSide} />
		</mesh>
	);
};

export { SpeechBubblesDragging, Sprites };
