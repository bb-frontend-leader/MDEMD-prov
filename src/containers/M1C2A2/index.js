import { useContext, useEffect, useRef, useState } from 'react';

import { ProviderContext } from '../../providers';
import BoxDialog from '../../components/ui/BoxDialog';
import { DragCards } from '../../components/DragCards';
import GameOver from '../../components/ui/GameOver';
import Scene from '../../components/Scene';
import { Table, Images } from '../../models/Table';
import { OrbitControls } from '@react-three/drei';

import settings from './settings.json';
import { data } from './data';
import { useFrame } from '@react-three/fiber';
import DescriptionText from '../../components/DescriptionText';
import MenuGames from '../../components/MenuGames';
import useAxios from '../../customHooks/useAxios';
import Cave from '../../models/Cave';
import {
	CutScene,
	CameraMovement,
	Sprites,
	SetSceneCamera,
} from '../../components/CutScene';
import Sprite from '../../components/Sprite';

const Level = () => {
	const {
		threeJsDebug,
		game: {
			id,
			answerState,
			address,
			gameOver,
			isReady,
			isWin,
			mute,
			sendProgress: { method, params },
		},
		updateGameId: setId,
		updateGameAddress: setAddress,
		updateGameOver: setGameOver,
		updateGameAnswer: setAnswerState,
		updateGameIsReady: setIsReady,
		updateGameIsWin: setIsWin,
		updateGameMute,
		updateGameReset,
	} = useContext(ProviderContext);

	if (isReady) document.body.classList.add('pointerClawUp');

	const { instructions, deck, table, cutscene } = data;

	const [frame, setFrame] = useState(0);
	const [isLastFrame, setLastFrame] = useState(false);

	const orbitCam = useRef();
	let Debug = null;

	if (threeJsDebug === '1') {
		Debug = () => {
			useFrame(() => {
				if (orbitCam) {
					//console.log(orbitCam.current.object);
				}
			});

			return null;
		};
	}

	useAxios({
		method: method,
		params: [...params],
		isWin: isWin,
	});

	useEffect(() => {
		return () => {
			updateGameReset();
			document.body.classList.remove('pointerClawUp');
			document.body.classList.remove('pointerClawDown');
		};
	}, []);

	return (
		<div
			style={{
				height: '100vh',
				position: 'relative',
				overflow: 'hidden',
				MozUserSelect: 'none',
				WebkitUserSelect: 'none',
				msUserSelect: 'none',
			}}
		>
			{isLastFrame && (
				<>
					<MenuGames
						setShowInstruccions={() => {
							setIsReady(null);
						}}
						setMute={() => {
							updateGameMute(!mute);
						}}
					/>
					<BoxDialog
						hasButton
						hide={isReady}
						title={instructions.title}
						message={instructions.message}
						buttonText={instructions.buttonText}
						setIsReady={setIsReady}
						image={'papaOso'}
					/>
				</>
			)}
			{isReady && <DescriptionText resources={deck} id={id} />}
			{(isWin || gameOver) && <GameOver isWin={isWin} />}

			{!isLastFrame && (
				<CutScene
					resources={cutscene}
					frame={frame}
					setFrame={setFrame}
					setLastFrame={setLastFrame}
				/>
			)}
			<Scene
				position={[2.5, 12, 8]}
				// camera={settings.scene['camera']}
				background={settings.scene['background-image']}
			>
				<>
					{!isLastFrame && (
						<>
							<CameraMovement cameraProperties={cutscene} frame={frame} />
							<Sprites resources={cutscene} frame={frame} />
							<Cave />
						</>
					)}
					{threeJsDebug === '1' && (
						<OrbitControls ref={orbitCam}>
							<Debug></Debug>
						</OrbitControls>
					)}
					{isLastFrame && (
						<>
							<SetSceneCamera
								sceneCamera={settings.scene['camera']}
								isLastFrame={isLastFrame}
							/>
							{isReady && (
								<DragCards
									resources={deck}
									setIsWin={setIsWin}
									setGameOver={setGameOver}
									setId={setId}
								/>
							)}
							<Table
								position={[0, 0, -2]}
								scale={[0.02, 0.02, 0.02]}
								rotation={[Math.PI / 2, Math.PI / 2, 0]}
							/>
							<Images resources={table} />
						</>
					)}
				</>
			</Scene>
		</div>
	);
};

export default Level;
