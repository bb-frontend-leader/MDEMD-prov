import { useContext, useEffect, useRef, useState } from 'react';

import { ProviderContext } from '../../providers';
import BoxDialog from '../../components/ui/BoxDialog';
import DragCards, { DragGridCards } from '../../components/DragCards';
import GameOver from '../../components/ui/GameOver';
import Scene from '../../components/Scene';
import { OrbitControls } from '@react-three/drei';

import settings from './settings.json';
import { data } from './data';
import { useFrame } from '@react-three/fiber';
import DescriptionText from '../../components/DescriptionText';
import MenuGames from '../../components/MenuGames';
import useAxios from '../../customHooks/useAxios';
import { Trees } from '../../models/BackgroundTrees';
import { BadProposal, GoodProposal, WoodBox } from '../../models/WoodBox';
import Sprite from '../../components/Sprite2';
import DragBubble from './DragBubble';
import Life from '../../components/Life';

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

	const { instructions, speechImages } = data;
	const [sprites, setSprites] = useState([...data.sprites]);
	const [correctCount, setCorrectCount] = useState(0);
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
			setSprites([...copySprites]);
		}, 4000);
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
				<Life wrongCount={wrongCount} />
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
						<Trees position={[0, 0, -10]} rotation={[0, -Math.PI / 2, 0]} />
						<WoodBox
							position={[-18, 0, 6]}
							rotation={[0, (11 * 12) / Math.PI, 0]}
						/>
						<WoodBox
							position={[18, 0, 6]}
							rotation={[0, -(11 * 12) / Math.PI, 0]}
						/>
						<GoodProposal
							position={[-18, 0, 6]}
							rotation={[0, -Math.PI / 2, 0]}
						/>
						<BadProposal
							position={[18, 0, 6]}
							rotation={[0, -Math.PI / 2, 0]}
						/>
						<DragBubble
							resources={speechImages}
							answerState={answerState}
							setAnswerState={setAnswerState}
							correctCount={correctCount}
							setCorrectCount={setCorrectCount}
							wrongCount={wrongCount}
							setWrongCount={setWrongCount}
							setIsWin={setIsWin}
							setGameOver={setGameOver}
						/>
						{sprites.map((sprite, index) => {
							return (
								<Sprite
									key={index}
									expressions={sprite.expression}
									isReady={isReady}
									indexExpression={sprite.indexExpression}
								/>
							);
						})}
					</>
				</>
			</Scene>
		</div>
	);
};

export default Level;
