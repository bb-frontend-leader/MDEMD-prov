import styled, { keyframes } from 'styled-components';

import backpack from '../../sprites/piasEscape/table.webp';

const CardsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	width: 60vw;
	height: 23vh;
	gap: 0.5rem;
	position: absolute;
	inset: 0vh 20vw;
	background-image: url(${backpack});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: 50%;
	visibility: ${(props) => (props.visible !== null ? 'visible' : 'hidden')};
`;

const fadeIn = keyframes`
  from { transform: scale(0.85); } 
`;

const ButtoNext = styled.button`
	min-height: 5rem;
	padding: 1rem;
	background-color: hsl(37, 93%, 58%);
	transition: all 0.5;
	font-family: 'Dimbo';
	border-radius: 10px;
	font-size: 5rem;
	border: 0.5rem solid white;
	animation: ${fadeIn} 1s infinite alternate;

	&:hover {
		background-color: #000;
		border: 0.5rem solid black;
		color: white;
	}

	cursor: pointer;
`;

export { CardsContainer, ButtoNext };
