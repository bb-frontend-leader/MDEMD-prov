import { useContext, useEffect, useRef, useState } from 'react';

import { ProviderContext } from '../../providers';
import BoxDialog from '../../components/ui/BoxDialog';
import GameOver from '../../components/ui/GameOver';
import Scene from '../../components/Scene';
import { OrbitControls } from '@react-three/drei';

import settings from './settings.json';
import { data, wordsCompleted as wordsCompletedInput } from './data';
import { useFrame } from '@react-three/fiber';
import DescriptionText from '../../components/DescriptionText';
import MenuGames from '../../components/MenuGames';
import useAxios from '../../customHooks/useAxios';
import Sprite from '../../components/Sprite';
import { Board, EOPScene, TreeTrunk } from '../../models/EOPStage';
import { Words, Grid } from './Words';

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

	const { instructions, sprites, wordsCheck } = data;
	const [wordComplete, setWordComplete] = useState(
		JSON.parse(JSON.stringify([...wordsCompletedInput])),
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
			{/* {isReady && <DescriptionText resources={deck} id={id} />} */}
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
						<EOPScene position={[10, -15, -10]} />
						<TreeTrunk position={[-25, -7, -10]} scale={[2, 2, 2]} />
						{!gameOver && (
							<>
								<Board
									position={[-2, -3.2, 5]}
									scale={[0.73, 0.63, 0.8]}
								/>
								<Words
									resources={wordsCheck}
									wordsCompleted={wordComplete}
									setWordsCompleted={setWordComplete}
									isWin={isWin}
									setIsWin={setIsWin}
								/>
								<Grid
									wordsCompleted={wordComplete}
									setWordsCompleted={setWordComplete}
									setIsWin={setIsWin}
								/>
								<Sprite
									expressions={sprites.expression}
									isReady={isReady}
								/>
							</>
						)}
					</>
				</>
			</Scene>
		</div>
	);
};

export default Level;
