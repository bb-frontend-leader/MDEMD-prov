import { useState, useRef, useEffect, useContext, memo, Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import { ProviderContext } from '../../providers';
import BoxDialog from '../../components/ui/BoxDialog';
import GameOver from '../../components/ui/GameOver';
import Scene from '../../components/Scene';
import {
	DesiresPost,
	FeelingsPost,
	PostsBehavoiur,
	Trees,
} from '../../models/BackgroundTrees';
import Sprite from '../../components/Sprite2';
import CustomReactPlayer from '../../components/CustomReactPlayer';
import MenuGames from '../../components/MenuGames';
import useAxios from '../../customHooks/useAxios';

import background from '../../sounds/levels/CGM-Level-1-FULL-Loop.mp3';
import settings from './settings.json';
import { data } from './data';
import DescriptionText from '../../components/DescriptionText';

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

	const { instructions } = data;
	const [sprites, setSprites] = useState([...data.sprites]);
	const [correctCount, setCorrectCount] = useState(0);
	const [wrongCount, setWrongCount] = useState(0);
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
		let copySprites = [...sprites];
		copySprites.map((sprite) => {
			sprite['indexExpression'] = 0;
		});
		setSprites([...copySprites]);
	}, []);

	useEffect(() => {
		if (answerState) {
			let copySprites = [...sprites];

			copySprites.map((sprite, index) => {
				if (sprite.id === id) {
					copySprites[index]['indexExpression'] = 1;
				}
			});

			setSprites([...copySprites]);
			setId(null);
			setAnswerState(false);

			// clearTimeout(finishSpriteAnimation);

			// finishSpriteAnimation = setTimeout(() => {
			// 	let copySprites = [...sprites];
			// 	copySprites.map((sprite, index) => {
			// 		if (sprite.id) {
			// 			copySprites[index]['indexExpression'] = 0;
			// 		}
			// 	});
			// 	setSprites([...copySprites]);
			// }, 4000);
		}
	}, [answerState]);

	return (
		<>
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
				<DescriptionText resources={sprites} id={id} margin={'0'} />
				{(isWin || gameOver) && <GameOver isWin={isWin} />}
				{isReady && !mute && (
					<CustomReactPlayer
						url={background}
						volume={settings['background-theme-volume']}
					/>
				)}
			</>

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

					<Trees />
					<PostsBehavoiur
						id={id}
						setId={setId}
						setAnswerState={setAnswerState}
						correctCount={correctCount}
						setCorrectCount={setCorrectCount}
						setIsWin={setIsWin}
					/>
					{!gameOver && (
						<>
							{sprites.map((sprite, index) => {
								return (
									<Sprite
										existId={typeof id == 'number' ? true : false}
										key={index}
										setId={(id) => setId(id)}
										id={sprite.id}
										currentId={id}
										hover={sprite.hover}
										expressions={sprite.expressions}
										isReady={isReady}
										indexExpression={sprite.indexExpression}
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

export default Level;
