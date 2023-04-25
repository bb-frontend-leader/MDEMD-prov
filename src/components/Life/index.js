import React from 'react';
import PropTypes from 'prop-types';

import { LifeContiainer, Heart } from './styles';

const Life = ({ wrongCount, lifes = 3 }) => {
	return (
		<LifeContiainer>
			{[0, 1, 2].map((element, index) => {
				return <Heart key={index} background={index + 1 <= lifes - wrongCount} />;
			})}
		</LifeContiainer>
	);
};

Life.propTypes = {
	wrongCount: PropTypes.number.isRequired,
	lifes: PropTypes.number,
};

export default Life;
