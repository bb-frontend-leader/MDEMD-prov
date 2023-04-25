import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

import Scene from '../../components/Scene';
import Orbit from '../../components/OrbitControls';
import SideScrollMovement from './SideScrollMovement';
import EscapeScene from '../../models/EDPScene';

import Sprite from '../../components/Sprites/Sprite3';

import settings from './settings.json';
import { data } from './data';
import { SpeechBubble } from './Speech';

const CustomScene = ({
	isReady,
	setIsWin,
	isWin,
	setGameOver,
	gameOver,
	setScore,
	id,
	setId,
	answerState,
	setAnswerState,
	start,
	setStart,
}) => {
	const refFruits = useRef();

	const { instructions, deck, speech, sprites, points } = data;

	const [obsSprites, setSprites] = useState(
		JSON.parse(JSON.stringify([...data.obsSprites])),
	);

	const [showObject, setShowObject] = useState();

	return (
		<Scene
			position={[2.5, 12, 8]}
			camera={settings.scene['camera']}
			background={settings.scene['background-image']}
		>
			<group>
				{/*<Orbit />*/}
				{isReady && (
					<SideScrollMovement
						id={id}
						setId={setId}
						answerState={answerState}
						setAnswerState={setAnswerState}
						expression={sprites}
						points={points}
						start={start}
						setStart={setStart}
						showObject={showObject}
						setShowObject={setShowObject}
					/>
				)}
				<EscapeScene
					id={id}
					answerState={answerState}
					position={[-5, 8, 10]}
					scale={[0.2, 0.2, 0.2]}
					showObject={showObject}
				/>
				{speech.map((bubble, index) => {
					return (
						id === index && (
							<SpeechBubble
								key={index}
								image={bubble.text}
								position={bubble.position}
							/>
						)
					);
				})}
			</group>
		</Scene>
	);
};

export default CustomScene;
