import { useEffect, useContext, useState } from 'react';

import { ProviderContext } from '../../providers';
import BoxDialog from '../../components/ui/BoxDialog';
import GameOver from '../../components/ui/GameOver';
import CustomReactPlayer from '../../components/CustomReactPlayer';
import MenuGames from '../../components/MenuGames';
import useAxios from '../../customHooks/useAxios';
import CustomScene from './CustomScene';
import FruitsBoard from '../../components/Fruits';
import Clock from './Clock';

import background from '../../sounds/levels/CGM-Level-1-FULL-Loop.mp3';
import settings from './settings.json';
import { data } from './data';

const Level = () => {
	const {
		game: {
			gameOver,
			isReady,
			isWin,
			mute,
			sendProgress: { method, params },
		},
		updateGameIsReady: setIsReady,
		updateGameIsWin: setIsWin,
		updateGameOver: setGameOver,
		updateGameMute,
		updateGameReset,
	} = useContext(ProviderContext);

	const { instructions } = data;

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
			{(isWin || gameOver) && <GameOver isWin={isWin} />}
			{isReady && !mute && (
				<CustomReactPlayer
					url={background}
					volume={settings['background-theme-volume']}
				/>
			)}

			{isReady && (
				<Clock setGameOver={setGameOver} gameOver={gameOver} isWin={isWin} />
			)}

			<CustomScene
				isReady={isReady}
				setIsWin={setIsWin}
				isWin={isWin}
				setGameOver={setGameOver}
				gameOver={gameOver}
				setScore={(name) => {}}
			/>
		</>
	);
};

export default Level;
