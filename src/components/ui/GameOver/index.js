import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAudio } from '../../../customHooks/Audio';
import win from '../../../sprites/gameOver/bien.webp';
import lose from '../../../sprites/gameOver/mal.webp';
import winSfx from '../../../sounds/sfx/DM-CGS-18.wav';
import loseSfx from '../../../sounds/sfx/Oops_error.mp3';
import { Image, Text, TextContainer, ImageContainer } from './styles';
import DescriptionText from '../../DescriptionText';

const GameOver = ({ isWin }) => {
	const [hide, setHide] = useState(true);

	const { play: playWin } = useAudio(winSfx);
	const { play: playLose } = useAudio(loseSfx);

	const navigate = useNavigate();

	useEffect(() => {
		if (isWin) {
			playWin(0.6);
		} else {
			playLose(0.4);
		}
	}, [isWin]);

	return (
		<>
			<ImageContainer>
				<Image
					src={isWin ? win : lose}
					hide={hide}
					alt=""
					onClick={() => {
						navigate(-1);
					}}
				/>
			</ImageContainer>
			<TextContainer show={true} bottom={'1rem'}>
				<Text>Haz click sobre la imagen para continuar</Text>
			</TextContainer>
		</>
	);
};

export default GameOver;
