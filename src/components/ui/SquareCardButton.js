import React, { useRef } from 'react';

import { useAudio } from '../../customHooks/Audio';

import { SquareButtonCard } from './styles';

import sfx from '../../sounds/sfx/DM-CGS-20.wav';

const SquareCardButton = ({ img, onClick, complete }) => {
	const ref = useRef();
	const { play } = useAudio(sfx);

	const onClickHandler = (e) => {
		play(0.25); // -23LUFS
		if (onClick) {
			onClick(ref, e);
		}
	};

	return (
		<SquareButtonCard
			ref={ref}
			className={'squareCard'}
			onClick={(e) => onClickHandler(e)}
			filter={complete ? '1' : '0'}
		>
			<img src={img} alt="" />
		</SquareButtonCard>
	);
};

export default SquareCardButton;
