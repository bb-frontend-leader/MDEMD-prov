import { useState, useRef, useEffect, useContext, memo, Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import { ProviderContext } from '../../providers';
import { SquareCardButtons } from '../../components/CardButtons';
import BoxDialog from '../../components/ui/BoxDialog';
import GameOver from '../../components/ui/GameOver';
import Scene from '../../components/Scene';
import City from '../../models/CaringAnimalsCity';
import Sprite from '../../components/Sprite2';
import Life from '../../components/Life';
import CustomReactPlayer from '../../components/CustomReactPlayer';
import MenuGames from '../../components/MenuGames';
import useAxios from '../../customHooks/useAxios';

import { CardsContainer } from './styles';

import background from '../../sounds/levels/CGM-Level-1-FULL-Loop.mp3';
import settings from './settings.json';
import { data, cardComplete as CarCompleteInput } from './data';
import DescriptionText from '../../components/DescriptionText';
import {
	CameraMovement,
	CutScene,
	SetSceneCamera,
	Sprites,
} from '../../components/CutScene';

let finishSpriteAnimation;

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

	const { instructions, deck, cutscene } = data;
	const [frame, setFrame] = useState(0);
	const [isLastFrame, setLastFrame] = useState(false);
	const [sprites, setSprites] = useState(JSON.parse(JSON.stringify([...data.sprites])));
	const [correctCount, setCorrectCount] = useState(0);
	const [wrongCount, setWrongCount] = useState(0);
	const [cardComplete, setCardComplete] = useState(
		JSON.parse(JSON.stringify([...CarCompleteInput])),
	);
	const [audio] = useState(settings['background-theme-volume']);

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

	useEffect(() => {
		if (answerState) {
			let copySprites = [...sprites];

			copySprites.map((sprite, index) => {
				if (sprite.id == id) {
					copySprites[index]['indexExpression'] = 1;
				}

				if (sprite.id == null) {
					copySprites[index]['indexExpression'] = 1;
				}
			});

			setSprites([...copySprites]);
			setId(null);
			setAnswerState(false);

			clearTimeout(finishSpriteAnimation);

			finishSpriteAnimation = setTimeout(() => {
				let copySprites = [...sprites];
				copySprites.map((sprite, index) => {
					if (sprite.id == null) {
						copySprites[index]['indexExpression'] = 0;
					}
				});
				setSprites([...copySprites]);
			}, 4000);
		}
	}, [answerState]);

	return (
		<>
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
					<Life wrongCount={wrongCount} />

					<BoxDialog
						hasButton
						hide={isReady}
						title={instructions.title}
						message={instructions.message}
						buttonText={instructions.buttonText}
						setIsReady={setIsReady}
					/>

					{id !== null && (
						<DescriptionText resources={sprites} id={id} vertical={'15vh'} />
					)}
					{!gameOver && (
						<CardsContainer visible={id}>
							<SquareCardButtons
								id={id}
								deck={deck}
								setAnswerState={setAnswerState}
								setIsWin={setIsWin}
								setGameOver={setGameOver}
								correctCount={correctCount}
								setCorrectCount={setCorrectCount}
								wrongCount={wrongCount}
								setWrongCount={setWrongCount}
								cardComplete={cardComplete}
								setCardComplete={setCardComplete}
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
				</>
			)}
			{!isLastFrame && (
				<CutScene
					resources={cutscene}
					frame={frame}
					setFrame={setFrame}
					setLastFrame={setLastFrame}
				/>
			)}
			<Scene
				color={'#ffd1dd'}
				ignoreAmbientColor
				// position={[0, -1.25, -5]}
				camera={settings.scene['camera']}
				intensity={settings.scene['light-intensity']}
			>
				<group position={[0, -1.25, -5]}>
					{threeJsDebug === '1' && (
						<OrbitControls ref={orbitCam}>
							<Debug></Debug>
						</OrbitControls>
					)}

					<City cutscene={cutscene} frame={frame} />
					{!gameOver && (
						<>
							<SetSceneCamera
								sceneCamera={settings.scene['camera']}
								isLastFrame={isLastFrame}
							/>
							{sprites.map((sprite, index) => {
								return (
									<Sprite
										existId={typeof id == 'number' ? true : false}
										key={index}
										id={sprite.id}
										setId={(id) => setId(id)}
										currentId={id}
										expressions={sprite.expressions}
										isReady={isReady}
										hover={sprite.hover}
										indexExpression={sprite.indexExpression}
									/>
								);
							})}
						</>
					)}
					{!isLastFrame && (
						<>
							<CameraMovement cameraProperties={cutscene} frame={frame} />
							<Sprites resources={cutscene} frame={frame} />
							{/* <Suspense fallback={null}>
							</Suspense>{' '} */}
						</>
					)}
				</group>
			</Scene>
		</>
	);
};

export default Level;
