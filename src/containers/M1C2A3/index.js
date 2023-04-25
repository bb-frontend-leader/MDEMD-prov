import { useEffect, useContext, useState } from 'react';

import { ProviderContext } from '../../providers';
import BoxDialog from '../../components/ui/BoxDialog';
import GameOver from '../../components/ui/GameOver';
import CustomReactPlayer from '../../components/CustomReactPlayer';
import MenuGames from '../../components/MenuGames';
import useAxios from '../../customHooks/useAxios';
import CustomScene from './CustomScene';
import FruitsBoard from '../../components/Fruits';

import background from '../../sounds/levels/CGM-Level-1-FULL-Loop.mp3';
import settings from './settings.json';
import { data } from './data';
import Buttons from './Buttons';

import Apple from '../../sprites/fruitsIcons/Apple.webp';
import Blackerry from '../../sprites/fruitsIcons/Blackerry.webp';
import Blueberry from '../../sprites/fruitsIcons/Blueberry.webp';
import Orange from '../../sprites/fruitsIcons/Orange.webp';
import Peach from '../../sprites/fruitsIcons/Peach.webp';
import Strawberry from '../../sprites/fruitsIcons/Strawberry.webp';

let mobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			mobile.Android() ||
			mobile.BlackBerry() ||
			mobile.iOS() ||
			mobile.Opera() ||
			mobile.Windows()
		);
	},
};

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

	const [dataFruits, setDataFruits] = useState([
		{
			fruit: 'blueberry',
			color: 'blue',
			total: 0,
			asset: Blueberry,
		},
		{
			fruit: 'peach',
			color: 'yellow',
			total: 0,
			asset: Peach,
		},
		{
			fruit: 'strawberry',
			color: 'pink',
			total: 0,
			asset: Strawberry,
		},
		{
			fruit: 'apple',
			color: 'red',
			total: 0,
			asset: Apple,
		},
		{
			fruit: 'blackberry',
			color: 'purple',
			total: 0,
			asset: Blackerry,
		},
		{
			fruit: 'orange',
			color: 'orange',
			total: 0,
			asset: Orange,
		},
	]);

	const setScore = (name) => {
		let copyDataFruits = [...dataFruits];
		copyDataFruits.map((element, index) => {
			if (name == element.fruit) {
				copyDataFruits[index].total += 1;
			}
		});

		setDataFruits([...copyDataFruits]);
	};

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
			<FruitsBoard data={dataFruits} />

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
			<CustomScene
				isReady={isReady}
				setIsWin={setIsWin}
				isWin={isWin}
				setGameOver={setGameOver}
				gameOver={gameOver}
				setScore={(name) => {
					setScore(name);
				}}
			/>
			{mobile.any() && isReady && <Buttons></Buttons>}
		</>
	);
};

export default Level;
