import React, { useEffect, useRef, useState } from 'react';
import { useBox, useCompoundBody, useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
	a,
	useTransition,
	useSpring,
	useChain,
	config,
	animated,
	useSpringRef,
} from '@react-spring/three';
import * as THREE from 'three';

import PlainAnimator from '../../util/plain-animator';

import { useSRGBTexture } from '../../customHooks/Texture';
import useControls from '../../customHooks/useControls';
import { clamp } from 'three/src/math/MathUtils';
import { count } from 'rxjs';

import Orbit from '../../components/OrbitControls';

import { data } from './data';

function CameraRotation({ pivot }) {
	const orbitCam = useRef();
	// const { camera } = useThree();

	return <OrbitControls target={pivot} ref={orbitCam}></OrbitControls>;
}

const ThirdPersonMovement = ({ expression }) => {
	const [index, setIndex] = useState(0);
	const controls = useControls();
	const { camera } = useThree();
	let offset = new THREE.Vector3();
	let camRotation = new THREE.Vector3();
	const pivot = new THREE.Object3D();

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
		position: [0, 1, 5],
		rotation: rotation,
		type: 'Kinematic',
		onCollide: (object) => (object.body.visible = false),
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

	useEffect(() => {
		pivot.position.set(0, 0, 0.9);
		pivot.attach(camera);
		camera.position.set(0, 5, 2);
		camera.rotation.set(-0.785398, 0, 0);
		offset.copy(camera.position);
		offset.sub(pivot.position);
		camRotation.copy(camera.rotation);
	}, []);

	const follow = () => {
		camera.position.set(
			pivot.position.x + offset.x,
			pivot.position.y + offset.y,
			pivot.position.z + offset.z,
		);
		camera.lookAt(pivot.position);
	};

	useFrame(() => {
		const { up, left, down, right } = controls.current;
		camera.rotation.set(camRotation.x, camRotation.y, camRotation.z);
		camera.position.set(
			camera.rotation.y,
			camera.rotation.x * offset.y,
			camera.rotation.z * offset.z,
		);

		if (up) {
			setIndex(1);
			animator.animate();
		}
		if (down) {
			setIndex(0);
			animator.animate();
		}
		if (left) {
			setIndex(2);
			animator.animate();
		}
		if (right) {
			setIndex(3);
			animator.animate();
		}
		api.velocity.set(
			left || right ? 3 * (!left && right ? 1 : -1) : 0,
			0,
			up || down ? 3 * (!up && down ? 1 : -1) : 0,
		);
		camera.updateProjectionMatrix();
	});

	return (
		<mesh ref={ref} rotation={rotation} castShadow>
			<planeBufferGeometry args={Size()} />
			<meshToonMaterial map={sheet} transparent side={THREE.DoubleSide} />
		</mesh>
	);
};

export { ThirdPersonMovement };
