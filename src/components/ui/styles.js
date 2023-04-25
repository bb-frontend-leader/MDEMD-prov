import styled from 'styled-components';

import cursor from '../../assets/img/Login/Puntero.webp';

import continueButton from '../../assets/img/icons/BotonContinuar.webp';
import startButton from '../../assets/img/icons/BotonComenzar.webp';
import skipButton from '../../assets/img/icons/BotonAdelantar.webp';

const ButtonStart = styled.button`
	position: fixed;
	inset: 66vh 45vw;
	height: 10vh;
	width: 10vw;
	background: #4bc4d9;
	box-shadow: inset 0 -5px 0px #7d5f70, inset 0 -10px 0 #2f92b3;
	padding: 0;
	border: 0;
	border-radius: 20px;
	font-size: 4vh;
	font-family: Dimbo;
	color: white;

	&:hover {
		cursor: pointer;
		cursor: url(${cursor}), auto;
		background: #222;
		box-shadow: inset 0 -5px 0px #555, inset 0 -10px 0 #000;
	}
`;

const ButtonCard = styled.div`
	border: 0;
	background: transparent;
	filter: ${(props) =>
		props.complete
			? 'sepia(100%) brightness(57%) hue-rotate(78deg) saturate(206%) contrast(119%)'
			: 'grayscale(0)'};
	padding: 0.2rem;
	border-radius: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.3s;

	&:hover {
		background: hsl(45, 85%, 60%);
		transition: all 0.3s;
	}

	img {
		min-width: 6rem;
		max-width: 6rem;
		z-index: 9999999999;

		&:hover {
			cursor: pointer;
			cursor: url(${cursor}) 15 10, auto;
		}
	}
`;

const SquareButtonCard = styled.div`
	border: 0;
	background: transparent;
	filter: grayscale(${(props) => props.filter});
	padding: 0.2rem;
	border-radius: 0.5rem;
	transition: all 0.3s;

	&:hover {
		background: hsl(45, 85%, 60%);
		transition: all 0.3s;
	}

	img {
		max-width: 6vw;
		max-height: 12vh;
		z-index: 9999999999;

		&:hover {
			cursor: pointer;
			cursor: url(${cursor}) 15 10, auto;
		}
	}
`;

const ContinueButton = styled.button`
	position: absolute;
	${
		'' /* bottom: -2.5rem;
	right: ${(props) => (props.isLastFrame ? '50%' : '0rem')}; */
	}
	inset: ${(props) => (props.isLastFrame ? '85vh 50vw' : '92vh 72vw')};
	height: 8vh;
	width: 10vw;
	z-index: 20;
	border: 0;
	padding: 0;
	background: no-repeat center/contain
		url(${(props) => (props.isLastFrame ? startButton : continueButton)});

	&:hover {
		cursor: pointer;
		cursor: url(${cursor}) 15 10, auto;
	}
`;

const SkipButton = styled.button`
	position: fixed;
	inset: 85vh 90vw;
	height: 6vh;
	width: 6vw;
	border: 0;
	padding: 0;
	background: no-repeat center/contain url(${skipButton});
	z-index: 1;

	&:hover {
		cursor: pointer;
		cursor: url(${cursor}) 15 10, auto;
	}
`;

const SpeechBubble = styled.div`
	position: absolute;
	inset: 75vh 20vw;
	height: 20vh;
	width: 60vw;
	background: ${(props) => (props.show ? '#fff1eb' : 'tranparent')};
	border-radius: 20px;
	box-shadow: ${(props) => (props.show ? 'inset 0px 0px 1px 7px #f18f60' : 'none')};
	z-index: 10;
	display: flex;
	visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
	align-items: center;
	border: ${(props) => (props.show ? 'auto' : 'none')};

	img {
		position: fixed;
		inset: 76vh 21vw;
		width: 18vh;
	}

	p {
		font-size: 2rem;
		font-family: Dimbo;
		color: #bd443f;
		text-align: justify;
		margin: 2vh 2vh 2vh 20vh;

		@media screen and (min-width: 1500px) {
			font-size: 2.7rem;
		}
	}
`;

export {
	ButtonStart,
	ButtonCard,
	SquareButtonCard,
	ContinueButton,
	SkipButton,
	SpeechBubble,
};
