import { useContext, useEffect, useRef, useState } from 'react';

import { ProviderContext } from '../../providers';
import BoxDialog from '../../components/ui/BoxDialog';
import GameOver from '../../components/ui/GameOver';
import Scene from '../../components/Scene';
import { OrbitControls } from '@react-three/drei';

import settings from './settings.json';
import { data } from './data';
import { useFrame } from '@react-three/fiber';
import DescriptionText from '../../components/DescriptionText';
import MenuGames from '../../components/MenuGames';
import useAxios from '../../customHooks/useAxios';
import ClassRoom from '../../models/SDCStage';
import Sprite from './Sprite';
import PickSpeech from './PickSpeech';
import Interrupt from './Interrupt';
import Life from '../../components/Life';
import ProgressBar from './ProgressBar';

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

	const { instructions, speech } = data;
	const [sprites, setSprites] = useState(JSON.parse(JSON.stringify([...data.sprites])));
	const [correctCount, setCorrectCount] = useState(0);
	const [wrongCount, setWrongCount] = useState(0);
	const [speechStart, setSpeechStart] = useState(false);
	const [speechFinished, setSpeechFinished] = useState(false);

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
				if (sprite.id === id) {
					copySprites[index]['indexExpression'] = 1;
				}

				if (id === 8 && sprite.id == null) {
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
					if (sprite.id === id) {
						copySprites[index]['indexExpression'] = 0;
					}
				});
				setSprites([...copySprites]);
			}, 1000);
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
				<Life wrongCount={wrongCount} />
			</>
			{/* {isReady && <DescriptionText resources={deck} id={id} />} */}
			{(isWin || gameOver) && <GameOver isWin={isWin} />}

			{!isWin && !gameOver && (
				<ProgressBar
					speechStart={speechStart}
					correctCount={correctCount}
					id={id}
				/>
			)}

			{(!gameOver || id !== null) && (
				<PickSpeech
					id={id}
					resources={speech}
					start={speechStart}
					speechFinished={speechFinished}
					setSpeechFinished={setSpeechFinished}
					correctCount={correctCount}
				/>
			)}

			<Scene position={[2.5, 12, 8]} camera={settings.scene['camera']}>
				<>
					{threeJsDebug === '1' && (
						<OrbitControls ref={orbitCam}>
							<Debug></Debug>
						</OrbitControls>
					)}
					<>
						<ClassRoom
							reciveShadow
							scale={[0.1, 0.1, 0.1]}
							position={[0, 0, 0]}
							rotation={[0, -Math.PI, 0]}
						/>
						{!gameOver && (
							<>
								<Interrupt
									id={id}
									setId={setId}
									sprites={sprites}
									setSprites={setSprites}
									speechStart={speechStart}
									setSpeechStart={setSpeechStart}
									correctCount={correctCount}
									setCorrectCount={setCorrectCount}
									wrongCount={wrongCount}
									setWrongCount={setWrongCount}
									setIsWin={setIsWin}
									setGameOver={setGameOver}
									speechFinished={speechFinished}
									setSpeechFinished={setSpeechFinished}
									resources={speech}
								/>
								{sprites.map((sprite, index) => {
									return (
										<Sprite
											existId={typeof id == 'number' ? true : false}
											key={index}
											id={sprite.id}
											setId={() => {}}
											currentId={id}
											hover={sprite.hover}
											expressions={sprite.expressions}
											isReady={isReady}
											indexExpression={sprite.indexExpression}
											noise={sprite.noise}
										/>
									);
								})}
							</>
						)}
					</>
				</>
			</Scene>
		</div>
	);
};

export default Level;
