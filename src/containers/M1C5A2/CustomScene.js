import React from 'react';

import Scene from '../../components/Scene';
import { Forest } from './Forest';
import Sprites from './Sprites';

import { Fruits, FruitsInBasket } from './Fruits';
import { FruitsBasket } from './FruitsBasket';

import settings from './settings.json';
import { data } from './data';

const CustomScene = ({ isReady, setIsWin, isWin, setGameOver, gameOver, setScore }) => {
	const { models, modelsFruitsBasket } = data;

	return (
		<Scene
			color={'#ffd1dd'}
			ignoreAmbientColor
			camera={settings.scene['camera']}
			intensity={settings.scene['light-intensity']}
		>
			<group position={[0, -1.25, -5]}>
				<Forest
					isReady={isReady}
					setIsWin={setIsWin}
					isWin={isWin}
					setGameOver={setGameOver}
					gameOver={gameOver}
					setScore={setScore}
				/>
				<Sprites
					isReady={isReady}
					isWin={isWin}
					gameOver={gameOver}
					setIsWin={setIsWin}
				/>
				{isReady && (
					<group>
						{models.map((fruit, index) => {
							return (
								<Fruits
									fruit={fruit}
									key={index}
									index={index}
									name={fruit.name}
									setScore={setScore}
									positions={fruit.positions}
								/>
							);
						})}
					</group>
				)}
				{isReady && (
					<group>
						{models.map((fruit, index) => {
							return (
								<FruitsInBasket
									fruit={fruit}
									key={index}
									index={index}
									name={fruit.name}
									setScore={setScore}
									positions={fruit.positionsBasket}
									scale={fruit.scaleBasket}
								/>
							);
						})}
					</group>
				)}
			</group>
		</Scene>
	);
};

export default CustomScene;
