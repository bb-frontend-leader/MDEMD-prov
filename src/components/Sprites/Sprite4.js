import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useSRGBTexture } from '../../customHooks/Texture';
//import { PlainAnimator } from 'three-plain-animator';
import PlainAnimator from '../../util/plain-animator';

export default function Sprite({
	id,
	setId,
	expressions,
	hover,
	indexExpression: initialIndexExpression,
	existId,
	currentId,
	showObject,
	name,
}) {
	const [indexExpression, setIndexExpression] = useState(initialIndexExpression);
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
	} = expressions[indexExpression];

	const [hovered, setHovered] = useState(false);
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		if (hovered) document.body.classList.add('pointer');
		else document.body.classList.remove('pointer');
	}, [hovered]);

	useEffect(() => {
		if (showObject == name && showObject) {
			setIndexExpression(1);
		} else {
			setIndexExpression(0);
		}
	}, [showObject]);

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

	useFrame(() => {
		animator.animate();

		if (
			(hover && hovered && indexExpression === 0) ||
			(clicked && indexExpression === 0 && currentId == id)
		) {
			if (myMesh.current.scale.x >= 1.1) {
				factorScale = -1;
			}
			if (myMesh.current.scale.x <= 0.95) {
				factorScale = 1;
			}

			myMesh.current.scale.x = myMesh.current.scale.x + 0.01 * factorScale;
			myMesh.current.scale.y = myMesh.current.scale.y + 0.01 * factorScale;
			myMesh.current.scale.z = myMesh.current.scale.z + 0.01 * factorScale;
		}
	});

	return (
		<>
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
					}
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
			</mesh>
		</>
	);
}
