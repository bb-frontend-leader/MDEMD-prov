import { element } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { hoverMeshes } from '../../components/Sprites/helpers';

import { useSRGBTexture } from '../../customHooks/Texture';

import { RandomRange } from '../../util/Mathf';

let stopTimeout;
let startTimeout;
let indexValue = -1;
const Interrupt = ({
	id,
	setId,
	sprites,
	setSprites,
	speechStart,
	setSpeechStart,
	correctCount,
	setCorrectCount,
	wrongCount,
	setWrongCount,
	setIsWin,
	setGameOver,
	speechFinished,
	setSpeechFinished,
	resources,
}) => {
	const count = 8;
	const [randomNum] = useState(() => new Set());

	const setValue = () => {
		while (randomNum.size < count) {
			randomNum.add(RandomRange(count, 0));
		}
		return randomNum;
	};

	const [localWrongCount, setLocalWrongCount] = useState(0);
	const [localAttempt, setLocalAttempt] = useState(0);

	const setStart = () => {
		startTimeout = setTimeout(() => {
			if (localAttempt == 3) {
			} else {
				setSpeechStart(false);
			}
		}, 1500);
	};

	const setStop = () => {
		stopTimeout = setTimeout(() => {
			setLocalWrongCount(localWrongCount + 1);
			setLocalAttempt(localAttempt + 1);
			setWrongCount(wrongCount + 1);
			setSpeechStart(true);
		}, 5000);
	};

	useEffect(() => {
		if (id !== null) {
			if (speechStart) setStart();
			else setStop();
		}
	}, [id, speechStart]);

	useEffect(() => {
		if (localAttempt == 3) {
			setTimeout(() => {
				setId(null);
				setLocalAttempt(0);
				setLocalWrongCount(0);
				setSpeechStart(false);
				setCorrectCount(correctCount + 1);

				let copySprites = JSON.parse(JSON.stringify([...sprites]));

				copySprites.map((element, index) => {
					if (element.id == id) {
						copySprites[index].complete = true;
					}
					copySprites[index].noise = false;
				});

				setSprites([...copySprites]);
			}, 2000);
		}
	}, [localAttempt]);

	const setInterrupt = (_id) => {
		if (id === null && !sprites.find((element) => element.id == _id).complete) {
			setId(_id);
			setSpeechStart(true);
		} else if (
			typeof id == 'number' &&
			sprites.find((element) => element.id == _id).noise
		) {
			clearTimeout(stopTimeout);
			setLocalWrongCount(localWrongCount + 1);
			setLocalAttempt(localAttempt + 1);
			setSpeechStart(true);
		}
	};

	const onClickHandler = (object) => {
		setInterrupt(object.index);
	};

	useEffect(() => {
		if (!speechStart && id !== null) {
			let copySprites = JSON.parse(JSON.stringify([...sprites]));

			let randomNum = null;

			while (randomNum == null) {
				const initialRandomNum = Math.floor(
					Math.random() * (copySprites.length - 4 - 0 + 1) + 0,
				);

				if (initialRandomNum != id) {
					randomNum = initialRandomNum;
				}
			}

			copySprites[randomNum].indexExpression = 1;
			copySprites[randomNum].noise = true;

			setSprites([...copySprites]);
		} else if (speechStart && id !== null) {
			let copySprites = JSON.parse(JSON.stringify([...sprites]));

			copySprites.map((element, index) => {
				if (copySprites[index].id != id) {
					copySprites[index].indexExpression = 0;
					copySprites[index].noise = false;
				}
			});
			setSprites([...copySprites]);
		}
	}, [speechStart]);

	useEffect(() => {
		if (wrongCount === 3) {
			setGameOver(true);
		}
		if (correctCount === count) {
			setIsWin(true);
		}
	}, [correctCount, wrongCount]);

	const textures = useSRGBTexture(
		resources.map((element) => element.img),
		true,
		THREE.LinearFilter,
	);

	const Plane = ({ index, position, texture, complete }) => {
		const meshRef = useRef(null);

		useFrame(() => {
			if (meshRef.current && complete) {
				meshRef.current.material.emissive.g = 0.3;
			}
		});

		return (
			<mesh
				ref={meshRef}
				index={index}
				position={position}
				onClick={(e) => {
					onClickHandler(e.eventObject);
				}}
				onPointerEnter={(e) => {
					e.stopPropagation();
					if (meshRef.current.visible && !meshRef.current.userData.hover) {
						meshRef.current.userData.hover = true;
						hoverMeshes(true);
					}
				}}
				onPointerLeave={(e) => {
					e.stopPropagation();
					if (meshRef.current.userData.hover) {
						meshRef.current.userData.hover = false;
						hoverMeshes(false);
					}
				}}
			>
				<planeGeometry args={[1, 1]} />
				<meshToonMaterial map={texture} transparent />
			</mesh>
		);
	};

	return (
		<>
			{resources.map((img, index) => {
				return (
					<Plane
						key={index}
						index={index}
						texture={textures[index]}
						position={img.position}
						complete={sprites[index].complete}
					/>
				);
			})}
		</>
	);
};

export default Interrupt;
