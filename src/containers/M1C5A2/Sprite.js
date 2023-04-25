import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Fruit } from './Fruits';

import {
	a,
	useTransition,
	useSpring,
	useChain,
	config,
	animated,
	useSpringRef,
} from '@react-spring/three';

import { useSRGBTexture } from '../../customHooks/Texture';
import PlainAnimator from '../../util/plain-animator';
import FruitsBoardGlobing from '../../components/Fruits2';

//import { useStore } from '../../customHooks/Threejs';

import {
	hoverMeshes,
	hiddeSpriteInNotTransition,
	getTransition,
	showSpriteInFinishTransition,
} from './helpers';

let timeOut = null;

export default function Sprite({
	expressions,
	isReady,
	indexExpression: indexExpressionInitial,
	fruitPosition,
	name,
	isWin,
	gameOver,
	setIsWin,
	leftCustomExpressionStep,
	rightCustomExpressionStep,
}) {
	const [indexExpression, setIndexExpresion] = useState(indexExpressionInitial);
	//const setTarget = useStore((state) => state.setTarget);

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
		positionCarryingFruit,
	} = expressions[indexExpression];

	const spriteRef = React.useRef();
	const fruitHtmlRef = React.useRef();

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

	const transition = {
		left: [3.5, 1.2, 4],
		right: [-4, 1.2, 4],
		center: [0, 1.2, 1],
		initial: [...position],
	};

	const [start, setStart] = useState(false);

	const defaultStep = [
		{
			toX: position[0],
			toZ: position[2],
			duration: 50,
			stop: true,
		},
	];

	const [steps, setSteps] = useState([...defaultStep]);

	const getCustomExpressionStep = (type, index, defaultExpresion) => {
		if (type == 'left') {
			return leftCustomExpressionStep &&
				typeof leftCustomExpressionStep[index] == 'number'
				? leftCustomExpressionStep[index]
				: defaultExpresion;
		} else {
			return rightCustomExpressionStep &&
				typeof rightCustomExpressionStep[index] == 'number'
				? rightCustomExpressionStep[index]
				: defaultExpresion;
		}
	};

	const leftSteps = [
		{
			toX: position[0],
			toZ: position[2],
			duration: 50,
			stop: true,
			indexExpresion: getCustomExpressionStep('left', 0, 3),
		},
		{
			toX: 3.5,
			toZ: 4,
			duration: 2000,
			indexExpresion: getCustomExpressionStep('left', 1, 1),
		},
		{
			toX: 3.5,
			toZ: 4,
			duration: 2000,
			addFruit: true,
			indexExpresion: getCustomExpressionStep('left', 2, 4),
		},
		{
			toX: 0,
			toZ: 1,
			duration: 2000,
			addPoint: true,
			showFruit: true,
			indexExpresion: getCustomExpressionStep('left', 3, 2),
		},
		{
			toX: 0,
			toZ: 1,
			duration: 2000,
			indexExpresion: getCustomExpressionStep('left', 4, 3),
			addFruitBasket: true,
			showFruit: true,
		},
		{
			toX: position[0],
			toZ: position[2],
			duration: 2000,
			reset: true,
			transition: '',
			indexExpresion: getCustomExpressionStep('left', 5, 0),
		},
		{
			toX: position[0],
			toZ: position[2],
			duration: 50,
		},
	];

	const rightSteps = [
		{
			toX: position[0],
			toZ: position[2],
			duration: 2000,
			stop: true,
			indexExpresion: getCustomExpressionStep('right', 0, 4),
		},
		{
			toX: -4,
			toZ: 4,
			duration: 2000,
			indexExpresion: getCustomExpressionStep('right', 1, 2),
		},
		{
			toX: -4,
			toZ: 4,
			duration: 2000,
			addFruit: true,
			indexExpresion: getCustomExpressionStep('right', 2, 3),
		},
		{
			toX: 0,
			toZ: 1,
			duration: 2000,
			addPoint: true,
			showFruit: true,
			indexExpresion: getCustomExpressionStep('right', 3, 1),
		},
		{
			toX: 0,
			toZ: 1,
			duration: 2000,
			indexExpresion: getCustomExpressionStep('right', 4, 4),
			addFruitBasket: true,
			showFruit: true,
		},
		{
			toX: position[0],
			toZ: position[2],
			duration: 2000,
			reset: true,
			transition: '',
			indexExpresion: getCustomExpressionStep('right', 5, 0),
		},
		{
			toX: position[0],
			toZ: position[2],
			duration: 50,
		},
	];

	const [step, setStep] = useState(0);

	useEffect(() => {
		if (steps.length - 1 > step) {
			clearTimeout(timeOut);
			timeOut = setTimeout(
				() => {
					if (typeof steps[step].indexExpresion == 'number') {
						setIndexExpresion(steps[step].indexExpresion);
					}

					if (!steps[step].stop || start) {
						setStep(step + 1);
					}

					if (start) {
						setStart(false);
					}

					if (steps[step].reset) {
						setSteps([...defaultStep]);
						setStep(0);
					}

					if (steps[step].transition == '') {
						spriteRef.current.userData.transition = '';
					}

					if (steps[step].addFruit) {
						let fruit = spriteRef.current.userData.clickFruit;
						spriteRef.current.parent.userData.totalFruits[fruit] += 1;
					}
					if (steps[step].addFruitBasket) {
						let fruit = spriteRef.current.userData.clickFruit;
						spriteRef.current.parent.userData.totalFruitsBasket[fruit] += 1;
						spriteRef.current.userData.clickFruit = '';
					}
					if (steps[step].addPoint) {
						spriteRef.current.parent.userData.points += 1;
					}
				},
				start ? 50 : steps[step].duration,
			);
		}
	}, [step, start]);

	const { toX, toZ, duration } = steps[step];

	const springApi = useSpringRef();
	const { x, z, ...rest } = useSpring({
		ref: springApi,
		config: { ...config.stiff, duration },
		to: { x: toX, z: toZ },
	});

	useChain([springApi], [0, 1]);

	useEffect(() => {
		if (spriteRef.current) {
			spriteRef.current.userData.hovered = true;
			spriteRef.current.userData.hover = false;
		}
	});

	useFrame(({ scene }) => {
		animator.animate();

		if (
			spriteRef.current &&
			typeof spriteRef.current.parent.userData.points != 'number'
		) {
			spriteRef.current.parent.userData.points = 0;
		}
		if (
			spriteRef.current &&
			spriteRef.current.parent.userData.points >= 36 &&
			!isWin &&
			!gameOver
		) {
			setIsWin(true);
		}

		showSpriteInFinishTransition(spriteRef);
		hiddeSpriteInNotTransition(spriteRef, fruitHtmlRef);

		/*

		getTransition(spriteRef, transition, indexExpression, setIndexExpresion);
    */
	});

	return (
		<>
			{isReady && (
				<a.mesh
					position={position}
					position-x={x}
					position-y={position[1]}
					position-z={z}
					rotation={rotation}
					castShadow
					ref={spriteRef}
					name={name}
					onPointerEnter={(e) => {
						e.stopPropagation();
						if (
							spriteRef.current.visible &&
							spriteRef.current.userData.hovered &&
							!spriteRef.current.userData.hover &&
							(spriteRef.current.userData.transition == '' ||
								!spriteRef.current.userData.transition)
						) {
							spriteRef.current.userData.hover = true;
							hoverMeshes(true);
							fruitHtmlRef.current.style.opacity = '1';
						}
					}}
					onPointerLeave={(e) => {
						e.stopPropagation();
						if (
							spriteRef.current.userData.hovered &&
							spriteRef.current.userData.hover
						) {
							spriteRef.current.userData.hover = false;
							hoverMeshes(false);
						}
					}}
					onClick={(e) => {
						e.stopPropagation();
						//setTarget(e.object);
					}}
				>
					<planeBufferGeometry args={Size()} />
					<meshToonMaterial
						map={sheet[indexExpression]}
						transparent
						side={THREE.DoubleSide}
					/>
					<group
						position={fruitPosition}
						onPointerLeave={(e) => {
							e.stopPropagation();
						}}
					>
						<Html>
							<div
								ref={fruitHtmlRef}
								style={{ transition: 'all 0.5s', opacity: 0 }}
								onMouseLeave={() => {
									fruitHtmlRef.current.style.opacity = '0';
								}}
								onMouseEnter={() => {
									if (spriteRef.current.userData.transition == '') {
										fruitHtmlRef.current.style.opacity = '1';
									}
								}}
								onClick={(e) => {
									if (step == 0 && spriteRef.current.visible) {
										spriteRef.current.userData.clickFruit =
											e.target.classList[1];

										if (
											[...e.target.classList].filter(
												(element) => element == 'fruit',
											).length > 0 &&
											[...e.target.classList].filter(
												(element) => element == 'disabled',
											).length == 0
										) {
											const left = [
												'blueberry',
												'blackberry',
												'peach',
											];

											if (left.includes(e.target.classList[1])) {
												setSteps([...leftSteps]);
												setStart(true);
											} else {
												setSteps([...rightSteps]);
												setStart(true);
											}

											fruitHtmlRef.current.style.opacity = '0';

											spriteRef.current.parent.userData.sprite =
												name;

											spriteRef.current.userData.transition =
												'pending';
										}
									}
								}}
							>
								<FruitsBoardGlobing spriteRef={spriteRef} />
							</div>
						</Html>

						{steps[step].showFruit && (
							<Fruit
								position={positionCarryingFruit}
								typeFruit={spriteRef.current.userData.clickFruit}
							/>
						)}
					</group>
				</a.mesh>
			)}
		</>
	);
}
