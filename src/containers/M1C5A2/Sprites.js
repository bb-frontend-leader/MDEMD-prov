import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

import Sprite from './Sprite';

import { data } from './data';

const Sprites = ({ isReady, setIsWin, isWin, gameOver }) => {
	const sprites = JSON.parse(JSON.stringify([...data.sprites]));
	const refSprites = useRef();

	useFrame(() => {
		if (refSprites.current && !refSprites.current.userData.totalFruits) {
			refSprites.current.userData.totalFruits = {
				blueberry: 0,
				peach: 0,
				strawberry: 0,
				apple: 0,
				blackberry: 0,
				orange: 0,
			};

			refSprites.current.userData.totalFruitsBasket = {
				blueberry: 0,
				peach: 0,
				strawberry: 0,
				apple: 0,
				blackberry: 0,
				orange: 0,
			};
		}
	});

	return (
		<group name={'sprites'} ref={refSprites}>
			{sprites.map((sprite, index) => {
				return (
					<Sprite
						{...sprite}
						existId={false}
						key={index}
						setId={(id) => {}}
						isReady={isReady}
						isWin={isWin}
						gameOver={gameOver}
						setIsWin={setIsWin}
					/>
				);
			})}
		</group>
	);
};

export default Sprites;
