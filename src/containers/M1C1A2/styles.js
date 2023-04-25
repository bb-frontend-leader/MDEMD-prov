import styled, { keyframes } from 'styled-components';

import cursor from '../../assets/img/Login/Puntero.webp';

import continueButton from '../../sprites/positiveEmotions/continue.webp';
import finishButton from '../../sprites/positiveEmotions/finish.webp';
import cameraIcon from '../../sprites/cameraIcon.png';
import cameraArrows from '../../sprites/cameraArrows.png';

const ImageContainer = styled.div`
	${
		'' /* display: flex;
	justify-content: center;
	align-items: center; */
	}
	z-index: 1;
	width: 50vw;
	height: 50vh;
	gap: 0.5rem;
	position: absolute;
	inset: 25vh 30vw;
	background-image: url(${(props) => props.src});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: calc(50% - 3vw) 50%;
	visibility: ${(props) => (props.visible !== null ? 'visible' : 'hidden')};
`;

const Button = styled.button`
	position: absolute;
	inset: 40.5vh 18vw;
	width: 8vw;
	height: 4vw;
	border: none;
	padding: none;
	background-color: transparent;
	background-image: url(${(props) => (props.answer ? finishButton : continueButton)});
	background-repeat: no-repeat;
	background-size: contain;
	${'' /* background-position: 50% 50%; */}
	&:hover {
		cursor: url(${cursor}) 15 10, auto;
	}
`;

const CameraIcons = styled.div`
	position: absolute;
	width: 15vw;
	height: 15vh;
	inset: 70vh 40vw;
	border: none;
	padding: none;
	background-image: url(${cameraIcon}), url(${cameraArrows});
	background-repeat: no-repeat, no-repeat;
	background-size: 70% 70%, 100%;
	background-position: 50% 90%, 50% -10%;
	pointer-events: none;
	z-index: 100;
`;

const fadeIn = keyframes`
  from { transform: scale(0.85); } 
`;

const TextContainer = styled.div`
	min-width: 100vw;
	position: fixed;
	top: ${(props) => (props.vertical ? props.vertical : '1rem')};
	z-index: 1000;
	justify-content: center;
	display: ${(props) => (props.show ? 'flex' : 'none')};
`;

const Text = styled.h1`
	font-size: 6vh;
	font-family: Dimbo;
	text-align: center;
	text-transform: uppercase;
	animation: ${fadeIn} 1s infinite alternate;
	padding: 0.5rem 1rem;
	background-color: hsl(37, 93%, 58%);
	border-radius: 10px;
	border: 0.5rem solid white;
	margin: ${(props) => (typeof props.margin == 'string' ? props.margin : '3rem')};
`;

export { ImageContainer, Button, CameraIcons, TextContainer, Text };
