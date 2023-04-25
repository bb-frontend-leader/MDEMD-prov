import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FruitsBoardContainer, Circle } from './styles';

const FruitsBoard = ({ data }) => {
	return (
		<FruitsBoardContainer>
			{data.map((element, index) => {
				return (
					<div key={index}>
						<img src={element.asset} alt="" />
						<div>
							{element.total} de
							<span style={{ color: 'hsl(144, 45%, 29%)' }}> 3</span>{' '}
						</div>
					</div>
				);
			})}
		</FruitsBoardContainer>
	);
};

export default FruitsBoard;
