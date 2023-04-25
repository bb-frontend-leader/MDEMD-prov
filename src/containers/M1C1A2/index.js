import { useState, useRef, useEffect, useContext, memo } from 'react';
import { OrbitControls, PresentationControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import { ProviderContext } from '../../providers';
import BoxDialog from '../../components/ui/BoxDialog';
import GameOver from '../../components/ui/GameOver';
import Scene from '../../components/Scene';
import Forest from '../../models/PositiveEmotions';
import Sprite from '../../components/Sprite2';
import CustomReactPlayer from '../../components/CustomReactPlayer';
import MenuGames from '../../components/MenuGames';
import useAxios from '../../customHooks/useAxios';

import background from '../../sounds/levels/CGM-Level-1-FULL-Loop.mp3';
import settings from './settings.json';
import { data } from './data';
import { Button, CameraIcons, ImageContainer, Text, TextContainer } from './styles';
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

	const { instructions, images, descriptionText } = data;
	const [sprites, setSprites] = useState([...data.sprites]);
	const [wrongCount, setWrongCount] = useState(0);

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

		setSprites([...copySprites]);

		clearTimeout(finishSpriteAnimation);

		finishSpriteAnimation = setTimeout(() => {
			let copySprites = [...sprites];
			copySprites.map((sprite, index) => {
				if (sprite.id !== null) {
					copySprites[index]['indexExpression'] = 0;
				}
			});
			// setId(null);
			// setAnswerState(false);
			setSprites([...copySprites]);
		}, 4000);
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
			<BoxDialog
				hasButton
				hide={isReady}
				title={instructions.title}
				message={instructions.message}
				buttonText={instructions.buttonText}
				setIsReady={setIsReady}
			/>
			{!isWin && isReady && (
				<>
					<TextContainer vertical={'80vh'} show={true}>
						<Text>{descriptionText.text}</Text>
					</TextContainer>
					<ImageContainer
						src={id !== null ? images[id].src : null}
						visible={id}
					>
						<Button
							answer={answerState}
							onClick={() => (answerState ? setIsWin(true) : setId(null))}
						/>
					</ImageContainer>
				</>
			)}
			<CameraIcons />
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
				// position={[2.5, 12, 8]}
				camera={settings.scene['camera']}
				intensity={settings.scene['light-intensity']}
			>
				<group position={[0, -1.25, -5]}>
					{threeJsDebug === '1' && (
						<OrbitControls ref={orbitCam}>
							<Debug></Debug>
						</OrbitControls>
					)}
					<PresentationControls global cursor={false} polar={[0, -Math.PI / 2]}>
						<Forest
							setId={setId}
							setIsWin={setIsWin}
							setGameOver={setGameOver}
							setAnswerState={setAnswerState}
							wrongCount={wrongCount}
							setWrongCount={setWrongCount}
						/>
						{!gameOver && (
							<>
								{sprites.map((sprite, index) => {
									return (
										<Sprite
											existId={typeof id == 'number' ? true : false}
											key={index}
											id={sprite.id}
											expressions={sprite.expressions}
											isReady={isReady}
											indexExpression={sprite.indexExpression}
										/>
									);
								})}
							</>
						)}
					</PresentationControls>
				</group>
			</Scene>
		</>
	);
};

export default memo(Level);
