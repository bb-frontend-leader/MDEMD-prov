import React, { useRef } from 'react';
import { Physics } from '@react-three/cannon';

import Scene from '../../components/Scene';
import { Forest, Fruits } from './Forest';
import ThirdPersonMovement from './ThirdPersonMovement';
import Orbit from '../../components/OrbitControls';

import settings from './settings.json';
import { data } from './data';

const CustomScene = ({ isReady, setIsWin, isWin, setGameOver, gameOver, setScore }) => {
	const { instructions, models, sprites } = data;

	return (
		<Scene
			color={'#ffd1dd'}
			ignoreAmbientColor
			camera={settings.scene['camera']}
			intensity={settings.scene['light-intensity']}
		>
			<group position={[0, -1.25, -5]}>
				{/*<Orbit />*/}
				<Physics gravity={[0, -0.05, 0]}>
					<Forest
						isReady={isReady}
						setIsWin={setIsWin}
						isWin={isWin}
						setGameOver={setGameOver}
						gameOver={gameOver}
						setScore={setScore}
					/>
				</Physics>
			</group>
		</Scene>
	);
};

export default CustomScene;
