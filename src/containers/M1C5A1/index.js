import { useContext, useEffect, useRef, useState } from 'react';

import { ProviderContext } from '../../providers';
import BoxDialog from '../../components/ui/BoxDialog';
import DragCards, { DragGridCards } from '../../components/DragCards';
import GameOver from '../../components/ui/GameOver';
import Scene from '../../components/Scene';
import { Background, Basket, Images } from '../../models/PODScene';
import { OrbitControls } from '@react-three/drei';

import settings from './settings.json';
import { data } from './data';
import { useFrame } from '@react-three/fiber';
import DescriptionText from '../../components/DescriptionText';
import MenuGames from '../../components/MenuGames';
import useAxios from '../../customHooks/useAxios';
import { Trees } from '../../models/BackgroundTrees';

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

	const { instructions, deck, images } = data;

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
				/>
			</>
			{isReady && <DescriptionText resources={deck} id={id} margin={'0'} />}
			{(isWin || gameOver) && <GameOver isWin={isWin} />}

			<Scene
				position={[2.5, 12, 8]}
				camera={settings.scene['camera']}
				background={settings.scene['background-image']}
			>
				<>
					{threeJsDebug === '1' && (
						<OrbitControls ref={orbitCam}>
							<Debug></Debug>
						</OrbitControls>
					)}
					<>
						<Trees position={[0, 0, -10]} rotation={[0, -Math.PI / 2, 0]} />
						<Background
							reciveShadow
							scale={[0.2, 0.2, 0.2]}
							position={[0, -0.5, 5]}
							rotation={[0, Math.PI / 2, 0]}
						/>
						<Basket
							castShadow
							scale={[0.2, 0.2, 0.2]}
							position={[15, 3.5, -5]}
						/>
						<Basket
							castShadow
							scale={[0.2, 0.2, 0.2]}
							position={[-15, 3.5, -5]}
						/>
						<Images resources={images} />
						{isReady && (
							<DragGridCards
								resources={deck}
								setIsWin={setIsWin}
								setGameOver={setGameOver}
								setId={setId}
							/>
						)}
					</>
				</>
			</Scene>
		</div>
	);
};

export default Level;
