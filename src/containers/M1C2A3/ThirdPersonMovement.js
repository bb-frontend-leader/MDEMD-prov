import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { useSRGBTexture } from '../../customHooks/Texture';
import useControls from '../../customHooks/useControls';
import PlainAnimator from '../../util/plain-animator';
import { useBox, usePlane } from '@react-three/cannon';

const ThirdPersonMovement = ({ expression }) => {
	const [index, setIndex] = useState(0);
	const controls = useControls();

	const sheet = useSRGBTexture(
		expression[index].expression.src,
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
	} = expression[index].expression;

	const [ref, api] = useBox(() => ({
		mass: 1,
		position: [0, 0.8, 4],
		rotation: rotation,
		type: 'Kinematic',
	}));

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

	const piaPosition = useRef(null);
	useEffect(() => {
		const unsubscribe = api.position.subscribe(
			(position) => (piaPosition.current = position),
		);
		return unsubscribe;
	}, []);

	useFrame(() => {
		const { up, left, down, right } = controls.current;

		ref.current.userData.position = piaPosition.current;

		if (left) {
			setIndex(2);
			animator.animate();
			if (piaPosition.current[0] < -4) {
				let copyPosition = [...piaPosition.current];
				copyPosition[0] = -4;
				api.position.set(...copyPosition);
			}
		} else if (right) {
			setIndex(3);
			animator.animate();
			if (piaPosition.current[0] > 4) {
				let copyPosition = [...piaPosition.current];
				copyPosition[0] = 4;
				api.position.set(...copyPosition);
			}
		} else if (up) {
			setIndex(1);
			animator.animate();
		} else if (down) {
			setIndex(0);
			animator.animate();
		} else {
			setIndex(0);
			animator.animate();
		}
		api.velocity.set(left || right ? 3 * (!left && right ? 1 : -1) : 0, 0, 0);
	});

	return (
		<mesh ref={ref} rotation={rotation} castShadow name="pia">
			<planeBufferGeometry args={Size()} />
			<meshToonMaterial map={sheet} transparent side={THREE.DoubleSide} />
		</mesh>
	);
};

export default ThirdPersonMovement;
