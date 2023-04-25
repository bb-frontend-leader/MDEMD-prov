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

import PlainAnimator from '../util/plain-animator';

import { useSRGBTexture } from '../customHooks/Texture';
import useControls from '../customHooks/useControls';
import { clamp } from 'three/src/math/MathUtils';
import { count } from 'rxjs';

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

const SideScrollMovement = ({
	id,
	setId,
	answerState,
	setAnswerState,
	expression,
	points,
}) => {
	const [index, setIndex] = useState(0);
	const { camera } = useThree();
	const [step, setStep] = useState(0);

	const spriteRef = useRef();

	const steps = [
		{
			toX: -3,
			toY: 10.5,
			duration: 3000,
		},
		{
			toX: 5,
			toY: 10.5,
			duration: 3000,
		},
		{
			toX: 13.5,
			toY: 10.5,
			duration: 3000,
		},
		{
			toX: 20,
			toY: 11,
			duration: 3000,
		},
		{
			toX: 23,
			toY: 11.5,
			duration: 3000,
		},
		{
			toX: 27,
			toY: 11.6,
			duration: 3000,
		},
		{
			toX: 31.8,
			toY: 11.5,
			duration: 3000,
		},
		{
			toX: 44,
			toY: 17.2,
			duration: 4000,
		},
		{
			toX: 53,
			toY: 17.25,
			duration: 3000,
		},
		{
			toX: 56,
			toY: 16.3,
			duration: 3000,
		},
		{
			toX: 64,
			toY: 13.8,
			duration: 3000,
		},
		{
			toX: 75.5,
			toY: 11,
			duration: 3000,
		},
		{
			toX: 78.5,
			toY: 10.8,
			duration: 2000,
		},
		{
			toX: 81.8,
			toY: 10.8,
			duration: 3000,
		},
	];

	const { toX, toY, duration } = steps[step];

	const springApi = useSpringRef();
	const { x, y, cameraX, ...rest } = useSpring({
		ref: springApi,
		config: { ...config.stiff, duration },
		to: { x: toX, y: toY },
	});

	useChain([springApi], [0, 1]);

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

		if (spriteRef.current && camera.position.x != spriteRef.current.position.x) {
			camera.position.set(
				spriteRef.current.position.x + 1,
				camera.position.y,
				camera.position.z,
			);
			camera.updateMatrixWorld();
		}
	});

	return (
		<a.mesh
			ref={spriteRef}
			castShadow
			position-x={x}
			position-y={y}
			position-z={8.5}
			onClick={() => {
				setStep(step + 1);
			}}
		>
			<planeBufferGeometry args={Size()} />
			<meshToonMaterial map={sheet} transparent side={THREE.DoubleSide} />
		</a.mesh>
	);
};

export { ThirdPersonMovement, SideScrollMovement };
