import { useContext, useEffect, useRef, useState } from 'react';

import { ProviderContext } from '../../providers';
import BoxDialog from '../../components/ui/BoxDialog';
import GameOver from '../../components/ui/GameOver';
import Scene from '../../components/Scene';
import { OrbitControls } from '@react-three/drei';

import settings from './settings.json';
import { data } from './data';
import DescriptionText from '../../components/DescriptionText';
import MenuGames from '../../components/MenuGames';
import useAxios from '../../customHooks/useAxios';
import { SideScrollMovement } from '../../components/ThirdPersonMovement';
import { Physics, Debug } from '@react-three/cannon';
import EscapeScene from '../../models/EDPScene';
import { CardsContainer } from '../M1C5A3/styles';
import { SquareCardButtons } from '../../components/CardButtons';
import Life from '../../components/Life';
import Sprite from '../../components/Sprite2';
import CustomScene from './CustomScene';
import { shuffle } from '../../herlpers';
import Situation from './Situation';

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

	const { instructions, sprites, points } = data;

	const [correctCount, setCorrectCount] = useState(0);
	const [wrongCount, setWrongCount] = useState(0);
	const [obsSprites, setSprites] = useState(
		JSON.parse(JSON.stringify([...data.obsSprites])),
	);

	const [start, setStart] = useState(false);

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

	useEffect(() => {
		if (answerState) {
			let copySprites = [...obsSprites];

			copySprites.map((sprite, index) => {
				if (sprite.id === id) {
					copySprites[index]['indexExpression'] = 1;
				}
			});

			setSprites([...copySprites]);
		}
	}, [answerState]);

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
				{/** 
				<MenuGames
					setShowInstruccions={() => {
						setIsReady(null);
					}}
					setMute={() => {
						updateGameMute(!mute);
					}}
				/>
        */}
				<BoxDialog
					hasButton
					hide={isReady}
					title={instructions.title}
					message={instructions.message}
					buttonText={instructions.buttonText}
					setIsReady={setIsReady}
				/>
			</>

			{(isWin || gameOver) && <GameOver isWin={isWin} />}

			{/*<Situation />*/}

			<CustomScene
				isReady={isReady}
				setIsWin={setIsWin}
				isWin={isWin}
				setGameOver={setGameOver}
				gameOver={gameOver}
				setScore={(name) => {}}
				id={id}
				setId={setId}
				answerState={answerState}
				setAnswerState={setAnswerState}
				start={start}
				setStart={setStart}
			/>
		</div>
	);
};

export default Level;
