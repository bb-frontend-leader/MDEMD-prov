import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Apple from '../../sprites/fruitsIcons/Apple.webp';
import Blackerry from '../../sprites/fruitsIcons/Blackerry.webp';
import Blueberry from '../../sprites/fruitsIcons/Blueberry.webp';
import Orange from '../../sprites/fruitsIcons/Orange.webp';
import Peach from '../../sprites/fruitsIcons/Peach.webp';
import Strawberry from '../../sprites/fruitsIcons/Strawberry.webp';

import { FruitsBoardContainer, ContainerImage } from './styles';

const FruitsBoardGlobing = ({ spriteRef }) => {
	const [data, setData] = useState([
		{
			fruit: 'blueberry',
			object: 'BlueberryVines',
			color: 'blue',
			asset: Blueberry,
			disabled: false,
		},
		{
			fruit: 'peach',
			object: 'peach',
			color: 'yellow',
			asset: Peach,
			disabled: false,
		},
		{
			fruit: 'strawberry',
			object: 'strawberry',
			color: 'pink',
			asset: Strawberry,
			disabled: false,
		},
		{
			fruit: 'apple',
			object: 'apple',
			color: 'red',
			asset: Apple,
			disabled: false,
		},
		{
			fruit: 'blackberry',
			object: 'blackberry',
			color: 'purple',
			asset: Blackerry,
			disabled: false,
		},
		{
			fruit: 'orange',
			object: 'orange',
			color: 'orange',
			asset: Orange,
			disabled: false,
		},
	]);

	return (
		<FruitsBoardContainer>
			<div
				style={{
					backgroundColor: 'hsla(0, 0%, 100%, 1)',
					position: 'absolute',
					bottom: '-1rem',
					left: '45%',
					minWidth: '1rem',
					minHeight: '2rem',
					borderRadius: '50%',
					zIndex: '-100',
					transform: 'rotate(30deg)',
				}}
			></div>
			{data.map((element, index) => {
				return (
					<ContainerImage key={index} disabled={element.disabled}>
						<img
							src={element.asset}
							alt=""
							className={`fruit ${element.fruit} ${
								element.disabled ? 'disabled' : ''
							}`}
							onClick={() => {
								if (
									(spriteRef.current.userData.transition == '' ||
										!spriteRef.current.userData.transition) &&
									spriteRef.current.visible
								) {
									let copyData = [...data];
									copyData[index].disabled = true;
									setData(copyData);
								}
							}}
						/>
					</ContainerImage>
				);
			})}
		</FruitsBoardContainer>
	);
};

export default FruitsBoardGlobing;
