import { useContext, useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

import { ProviderContext } from '../../providers';
import BoxDialog from '../../components/ui/BoxDialog';
import GameOver from '../../components/ui/GameOver';
import Scene from '../../components/Scene';
import { Background, Basket } from '../../models/PODScene';
import { OrbitControls } from '@react-three/drei';

import settings from './settings.json';
import { data, jigsawComplete as jigsawCompleted } from './data';
import DescriptionText from '../../components/DescriptionText';
import MenuGames from '../../components/MenuGames';
import useAxios from '../../customHooks/useAxios';
import { Trees } from '../../models/BackgroundTrees';
import Sprite from '../../components/Sprite2';
import Jigsaw from './Jigsaw';
import { SpeechBubblesDragging, Sprites } from './SpeechBubblesDragging';
import { Text, TextContainer } from '../M1C2A2/styles';

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

	const {
		instructions,
		descriptionText,
		deck,
		jigsaws,
		speechBubbles,
		positions,
		pieceModels,
	} = data;
	const [sprites, setSprites] = useState([...data.sprites]);
	const [correctCount, setCorrectCount] = useState(0);
	const [completed, setCompleted] = useState(
		JSON.parse(JSON.stringify([...jigsawCompleted])),
	);

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
			{answerState && (
				<TextContainer vertical={'5vh'} show={true}>
					<Text>{descriptionText.text}</Text>
				</TextContainer>
			)}
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
					<Trees position={[0, 0, -10]} rotation={[0, -Math.PI / 2, 0]} />
					<Background
						reciveShadow
						scale={[0.2, 0.2, 0.2]}
						position={[0, -0.5, 5]}
						rotation={[0, Math.PI / 2, 0]}
					/>
					<Basket
						castShadow
						scale={[0.12, 0.12, 0.12]}
						position={[-15, 2.5, -3]}
					/>
					<Basket
						castShadow
						scale={[0.05, 0.05, 0.05]}
						position={[-11.2, 1.5, -3]}
						rotation={[0, 0, Math.PI]}
					/>
					{!gameOver && (
						<>
							<Jigsaw
								id={id}
								setId={setId}
								answerState={answerState}
								setAnswerState={setAnswerState}
								correctCount={correctCount}
								setIsWin={setIsWin}
								models={pieceModels}
								deck={deck}
								jigsaws={jigsaws}
								positions={positions}
								completed={completed}
							/>
							<Sprite
								indexExpression={0}
								expressions={sprites[6].expression}
								isReady={isReady}
							/>
							{answerState && (
								<>
									<Sprites id={id} expression={sprites} />
									<SpeechBubblesDragging
										id={id}
										setId={setId}
										bubble={speechBubbles}
										setAnswerState={setAnswerState}
										correctCount={correctCount}
										setCorrectCount={setCorrectCount}
										completed={completed}
										setCompleted={setCompleted}
									/>
								</>
							)}
						</>
					)}
				</>
			</Scene>
		</div>
	);
};

export default Level;
