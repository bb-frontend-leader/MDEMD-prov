import { useState, useRef, useEffect, useContext, memo } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import { ProviderContext } from '../../providers';
import { CardButtons } from '../../components/CardButtons';
import BoxDialog from '../../components/ui/BoxDialog';
import GameOver from '../../components/ui/GameOver';
import Scene from '../../components/Scene';
import Deck from '../../components/Deck';
import City from '../../models/City';
import Sprite from '../../components/Sprite';
import Life from '../../components/Life';
import CustomReactPlayer from '../../components/CustomReactPlayer';
import MenuGames from '../../components/MenuGames';
import useAxios from '../../customHooks/useAxios';
import DescriptionText from '../../components/DescriptionText';

import { CardsContainer } from './styles';

import background from '../../sounds/levels/CGM-Level-1-FULL-Loop.mp3';
import settings from './settings.json';
import { data, cardComplete as CarCompleteInput } from './data';

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

	const { sprites, instructions, decks } = data;
	const [correctCount, setCorrectCount] = useState(0);
	const [wrongCount, setWrongCount] = useState(0);
	const [cardComplete, setCardComplete] = useState(
		JSON.parse(JSON.stringify([...CarCompleteInput])),
	);

	const orbitCam = useRef();
	let Debug = null;

	useAxios({
		method: method,
		params: [...params],
		isWin: isWin,
	});

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

	useEffect(() => {
		return () => {
			updateGameReset();
		};
	}, []);

	useEffect(() => {
		if (answerState) setTimeout(() => setAnswerState(false), 4000);
	}, [answerState]);

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

			<Life wrongCount={wrongCount} />
			<BoxDialog
				hasButton
				hide={isReady}
				title={instructions.title}
				message={instructions.message}
				buttonText={instructions.buttonText}
				setIsReady={setIsReady}
			/>
			<DescriptionText resources={cardComplete} id={id} margin={'0'} />
			{!gameOver && (
				<CardsContainer>
					<CardButtons
						isReady={isReady}
						setAddress={setAddress}
						setId={setId}
						cardComplete={cardComplete}
					/>
				</CardsContainer>
			)}
			{(isWin || gameOver) && <GameOver isWin={isWin} />}

			{isReady && !mute && (
				<CustomReactPlayer
					url={background}
					volume={settings['background-theme-volume']}
				/>
			)}

			<Scene
				color={'#ffd1dd'}
				ignoreAmbientColor
				position={[2.5, 12, 8]}
				camera={settings.scene['camera']}
				intensity={settings.scene['light-intensity']}
			>
				<group position={[0, -1.25, -5]}>
					{threeJsDebug === '1' && (
						<OrbitControls ref={orbitCam}>
							<Debug></Debug>
						</OrbitControls>
					)}

					<City
						id={id}
						position={[-7, -1, 15]}
						rotation={[0, -0.1, 0]}
						setIsWin={setIsWin}
						setGameOver={setGameOver}
						setAnswerState={setAnswerState}
						correctCount={correctCount}
						setCorrectCount={setCorrectCount}
						wrongCount={wrongCount}
						setWrongCount={setWrongCount}
						cardComplete={cardComplete}
						setCardComplete={setCardComplete}
					/>
					{!gameOver && (
						<>
							<Deck id={id} resources={decks} />
							{sprites.map((sprite, index) => {
								return (
									<Sprite
										key={index}
										expressions={sprite.expressions}
										isReady={isReady}
										answerState={answerState}
									/>
								);
							})}
						</>
					)}
				</group>
			</Scene>
		</>
	);
};

export default memo(Level);
