import styled, { keyframes } from 'styled-components';

import backpack from '../../sprites/backpack.webp';

const fadeIn = keyframes`
  from { transform: scale(1.2); } 
`;

const FruitsBoardContainer = styled.div`
	position: absolute;
	display: flex;
	gap: 1.5rem;
	top: 1rem;
	right: 2rem;
	color: black;
	font-weight: bold;
	font-family: Dimbo;
	font-size: 1.5rem;
	z-index: 9999999999;
	background-color: hsl(45, 85%, 56%);
	border-radius: 10px;
	padding: 5px;
	border: 5px solid white;

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.2rem;
	}
	& img {
		max-width: 3rem;
		animation: ${fadeIn} 1s infinite alternate;
	}
`;

const Circle = styled.div`
	height: 1.5rem;
	width: 1.5rem;
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : 'white'};
	border-radius: 50%;
`;

export { FruitsBoardContainer, Circle };
