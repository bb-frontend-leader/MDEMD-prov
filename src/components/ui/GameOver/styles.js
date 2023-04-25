import styled, { keyframes } from 'styled-components';
import cursor from '../../../assets/img/Login/Puntero.webp';

const Image = styled.img`
	width: 80vh;
	z-index: 1000000;
	visibility: ${(props) => (props.hide ? 'visible' : 'hidden')};

	&:hover {
		cursor: url(${cursor}) 15 10, pointer;
	}
`;

const ImageContainer = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	top: 0;
	left: 0;
	background-color: transparent;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

const fadeIn = keyframes`
  from { transform: scale(0.85); } 
`;

const TextContainer = styled.div`
	min-width: 100vw;
	position: fixed;
	top: ${(props) => (props.top ? props.top : 'auto')};
	bottom: ${(props) => (props.bottom ? props.bottom : 'auto')};
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
	margin: 0;
`;

export { Text, TextContainer, Image, ImageContainer };
