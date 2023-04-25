import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { useBox, usePlane } from '@react-three/cannon';
import { useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { element } from 'prop-types';
import Situation from './Situation';
import * as THREE from 'three';
import {
	a,
	useTransition,
	useSpring,
	useChain,
	config,
	animated,
	useSpringRef,
} from '@react-spring/three';

let timeOut = null;

export default function Board({ start, setStart, id, setIsWin }) {
	const gltf = useLoader(GLTFLoader, 'models/board/evaluationBoard.glb');

	const boardRef = useRef();

	const steps = [
		{
			toScale: 0,
			stop: true,
		},
		{
			toScale: 0.11,
		},
		{
			toScale: 0.11,
			duration: 3000,
			stop: true,
		},
		{
			toScale: 0,
		},
	];
	const [step, setStep] = useState(0);

	useEffect(() => {
		if (steps.length - 1 > step) {
			clearTimeout(timeOut);
			timeOut = setTimeout(
				() => {
					if (typeof steps[step].questionId == 'number' && !start) {
						//setId(steps[step].questionId);
					} else if (typeof id == 'number') {
						//setId(null);
					}

					if (start && id == null && step != 0) {
						setStep(step + 1);
					}

					if (start) {
						setStart(false);
					}
				},
				start ? 50 : steps[step].duration,
			);
		}
	}, [step, start]);

	useEffect(() => {
		if (boardRef.current) {
			if (typeof id == 'number') {
				setStep(1);
			}

			if (typeof id == 'object') {
				setStep(0);
			}
		}
	}, [id]);

	const { toScale, duration } = steps[step];

	const springApi = useSpringRef();
	const { scale, ...rest } = useSpring({
		ref: springApi,
		config: { ...config.stiff, tension: 180, friction: 8 },
		to: { scale: toScale },
	});

	useChain([springApi], [0, 1]);

	useFrame(({ camera }) => {
		if (boardRef.current && typeof id == 'number') {
			boardRef.current.position.x = camera.position.x;
			boardRef.current.position.y = camera.position.y - 2.6;
			boardRef.current.position.z = camera.position.z - 4;
		}
	});

	return (
		<a.primitive
			ref={boardRef}
			object={gltf.scene}
			//scale={0.12}
			scale={scale}
			rotation-x={-0.2}
		>
			<Html
				className="content"
				position={[0, 14.2, 0.6]}
				scale={1.1}
				transform
				//occlude
			>
				<Situation
					start={start}
					setStart={setStart}
					id={id}
					setIsWin={setIsWin}
				/>
			</Html>
		</a.primitive>
	);
}

useGLTF.preload('models/enviroment/EDPScene.glb');
