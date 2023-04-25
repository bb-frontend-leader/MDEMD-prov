import React from 'react';
import { LifeContiainer, Heart } from './styles';

const Life = ({ wrongCount }) => {
	const lifes = 3;

	return (
		<LifeContiainer>
			{[0, 1, 2].map((element, index) => {
				return <Heart key={index} background={index + 1 <= lifes - wrongCount} />;
			})}
		</LifeContiainer>
	);
};

export default Life;
