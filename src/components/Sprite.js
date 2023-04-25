import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useSRGBTexture } from '../customHooks/Texture';
//import { PlainAnimator } from 'three-plain-animator';
import PlainAnimator from '../util/plain-animator';
import { DoubleSide } from 'three';

export default function Sprite({ id, setId, expressions, answerState, isReady }) {
	const [expression, setExpression] = useState(0);

	const sheet = useSRGBTexture(
		expressions.map((element) => element.src),
		true,
		THREE.LinearFilter,
	);

	const {
		size,
		position,
		rotation,
		tilesHorizontal,
		tilesVertical,
		totalTiles,
		frames,
	} = expressions[expression];

	useEffect(() => {
		setExpression(answerState ? 1 : 0);
	}, [answerState]);

	const { animator, Size } = {
		animator: new PlainAnimator(
			sheet[expression],
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

	useFrame(() => animator.animate());

	return (
		<>
			{isReady && (
				<mesh
					position={position}
					rotation={rotation}
					castShadow
					onClick={() => setId(id)}
				>
					<planeBufferGeometry args={Size()} />
					<meshToonMaterial
						map={sheet[expression]}
						transparent
						side={DoubleSide}
					/>
				</mesh>
			)}
		</>
	);
}
