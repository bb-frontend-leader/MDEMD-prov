import React, { useRef } from 'react';

import { useAudio } from '../../customHooks/Audio';

import { ButtonCard } from './styles';

import sfx from '../../sounds/sfx/DM-CGS-20.wav';
import CardImage from '../../sprites/card.webp';

const CardButton = ({ hide, onClick, complete }) => {
	const ref = useRef();
	const { play } = useAudio(sfx);

	const onClickHandler = (e) => {
		play(0.25); // -23LUFS
		if (onClick) {
			onClick(ref, e);
		}
	};

	return (
		<ButtonCard
			ref={ref}
			onClick={(e) => onClickHandler(e)}
			complete={complete ? true : false}
		>
			<img src={CardImage} alt="" />
		</ButtonCard>
	);
};

export default CardButton;
