import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

import Scene from '../../components/Scene';
import Orbit from '../../components/OrbitControls';
import SideScrollMovement from './SideScrollMovement';
import EscapeScene from './EDPScene';
import Board from './Board';

import Sprite from '../../components/Sprites/Sprite3';

import settings from './settings.json';
import { data } from './data';

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

	const { instructions, deck, sprites, points } = data;

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

				<Board start={start} setStart={setStart} id={id} setIsWin={setIsWin} />
				<EscapeScene
					id={id}
					answerState={answerState}
					position={[-5, 8, 10]}
					scale={[0.2, 0.2, 0.2]}
					showObject={showObject}
				/>
			</group>
		</Scene>
	);
};

export default CustomScene;
