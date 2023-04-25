import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useSRGBTexture } from '../../customHooks/Texture';
//import { PlainAnimator } from 'three-plain-animator';
import PlainAnimator from '../../util/plain-animator';
import noise from '../../sprites/inTheClassroom/Ruido.png';

const spriteNoise = {
	id: null,
	name: 'ruido',
	indexExpression: 0,
	expressions: [
		{
			src: noise,
			size: [2, 2],
			position: [12, 5, 0],
			rotation: [0, 0, 0],
			tilesHorizontal: 4,
			tilesVertical: 4,
			totalTiles: 16,
		},
	],
};

export default function Sprite({
	id,
	setId,
	expressions,
	isReady,
	hover,
	indexExpression,
	existId,
	currentId,
	setSpeechStart = () => {},
	speechStart,
	noise,
}) {
	const [expression, setExpression] = useState(0);

	const sheet = useSRGBTexture(
		expressions.map((element) => element.src),
		true,
		THREE.LinearFilter,
	);

	const sheetNoise = useSRGBTexture(
		spriteNoise.expressions.map((element) => element.src),
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
	} = expressions[indexExpression];

	const [hovered, setHovered] = useState(false);
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		if (hovered) document.body.classList.add('pointer');
		else document.body.classList.remove('pointer');
	}, [hovered]);

	const myMesh = React.useRef();
	let factorScale = 1;

	const { animator, Size } = {
		animator: new PlainAnimator(
			sheet[indexExpression],
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

	const { animatorNoise, SizeNoise } = {
		animatorNoise: new PlainAnimator(
			sheetNoise[0],
			spriteNoise.expressions[0]['tilesHorizontal'],
			spriteNoise.expressions[0]['tilesVertical'],
			spriteNoise.expressions[0]['totalTiles'],
			spriteNoise.expressions[0]['totalTiles'],
		),
		SizeNoise: () => {
			const [x, y] = spriteNoise.expressions[0]['size'];
			return [x, y];
		},
	};

	useFrame(() => {
		animator.animate();
		animatorNoise.animate();
	});

	return (
		<>
			{isReady && (
				<group>
					<mesh
						ref={myMesh}
						position={position}
						rotation={rotation}
						castShadow
						onClick={(e) => {
							e.stopPropagation();
							if (!existId && indexExpression <= 0) {
								setId(id);
								setClicked(true);
								setSpeechStart(true);
							}
							if (currentId !== id && indexExpression === 1)
								setSpeechStart(!speechStart);
						}}
						onPointerOver={(e) => {
							e.stopPropagation();
							if (hover && indexExpression === 0) setHovered(true);
						}}
						onPointerOut={(e) => {
							e.stopPropagation();
							if (hover && indexExpression === 0) setHovered(false);
						}}
					>
						<planeBufferGeometry args={Size()} />
						<meshToonMaterial
							map={sheet[indexExpression]}
							transparent
							side={THREE.DoubleSide}
						/>

						{noise && (
							<mesh position={[-1.2, 1.5, 1]} castShadow>
								<planeBufferGeometry args={SizeNoise()} />
								<meshToonMaterial
									map={sheetNoise[0]}
									transparent
									side={THREE.DoubleSide}
								/>
							</mesh>
						)}
					</mesh>
				</group>
			)}
		</>
	);
}
