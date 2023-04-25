import React, { useEffect, useRef, useState } from 'react';
import { useBox, useCompoundBody, useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
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

import Sprite from './Sprite';

import { useSRGBTexture } from '../../customHooks/Texture';
import useControls from '../../customHooks/useControls';
import { clamp } from 'three/src/math/MathUtils';
import { count } from 'rxjs';

import Orbit from '../../components/OrbitControls';

import { data } from './data';

import { ButtoNext } from './styles';
import { element } from 'prop-types';

function CameraRotation({ pivot }) {
	const orbitCam = useRef();
	// const { camera } = useThree();

	return <OrbitControls target={pivot} ref={orbitCam}></OrbitControls>;
}

let timeOut = null;

const SideScrollMovement = ({
	id,
	setId,
	answerState,
	setAnswerState,
	expression,
	points,
	start,
	setStart,
	showObject,
	setShowObject,
}) => {
	const steps = JSON.parse(JSON.stringify(data.steps));
	const [obsSprites, setObsSprites] = useState(
		JSON.parse(JSON.stringify(data.obsSprites)),
	);

	const [index, setIndex] = useState(0);
	const { camera } = useThree();
	const [step, setStep] = useState(0);

	useEffect(() => {
		if (steps.length - 1 > step) {
			clearTimeout(timeOut);
			timeOut = setTimeout(
				() => {
					if (typeof steps[step].questionId == 'number' && !start) {
						setId(steps[step].questionId);
					} else if (typeof id == 'number') {
						let copyObsSprites = JSON.parse(JSON.stringify([...obsSprites]));
						copyObsSprites[id].indexExpression = 1;
						setObsSprites([...copyObsSprites]);
						setId(null);
					}

					if (!steps[step].stop || start) {
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

	const spriteRef = useRef();

	const { toX, toY, duration } = steps[step];

	const springApi = useSpringRef();
	const { x, y, cameraX, ...rest } = useSpring({
		ref: springApi,
		config: { ...config.stiff, duration },
		to: { x: toX, y: toY },
	});

	useChain([springApi], [0, 1]);
	const sheet = useSRGBTexture(
		expression.map((element) => element.expression.src),
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
			sheet[index],
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
		<>
			<a.mesh
				ref={spriteRef}
				castShadow
				position-x={x}
				position-y={y}
				position-z={8.5}
			>
				<planeBufferGeometry args={Size()} />
				<meshToonMaterial
					map={sheet[index]}
					transparent
					side={THREE.DoubleSide}
				/>
				{step == 0 && (
					<group position={[-1.6, 3, 0]}>
						<Html>
							<ButtoNext
								onClick={() => {
									setStart(true);
								}}
							>
								CAMINAR
							</ButtoNext>
						</Html>
					</group>
				)}
			</a.mesh>
			{obsSprites.map((sprite, index) => {
				return (
					<Sprite
						key={index}
						expressions={sprite.expressions}
						indexExpression={sprite.indexExpression}
						frames={sprite.frames}
						showObject={showObject}
						name={sprite.name}
					/>
				);
			})}
		</>
	);
};

const areEqual = (prevProps, nextProps) => {
	if (
		prevProps.start == nextProps.start &&
		prevProps.showObject == nextProps.showObject
	) {
		return true; // donot re-render
	}
	return false; // will re-render
};

export default React.memo(SideScrollMovement, areEqual);
