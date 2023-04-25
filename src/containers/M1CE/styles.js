import styled, { keyframes } from 'styled-components';

import backpack from '../../sprites/piasEscape/table.webp';
import cursor from '../../assets/img/Login/Puntero.webp';

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

const SituationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: stretch;
	z-index: 99999;
	min-width: 1500px;
	max-width: 1500px;
	min-height: 1050px;
	max-height: 1050px;
	background-color: hsl(30, 61%, 80%);
	padding: 2rem;
	border-radius: 1rem;
	color: transparent;

	& > div {
		gap: 7vw;
		padding: 3rem;
		display: flex;
		justify-content: center;
		align-items: stretch;
		flex: 1;
		border: 2px solid hsl(16, 36%, 59%);
		border-style: dashed;
		border-radius: 20px;

		& > div {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			flex: 1;
			gap: 2rem;

			& > div {
				border-radius: 10px;
				border: 3px solid hsl(28, 63%, 69%);
				background-color: hsl(30, 61%, 80%);
				-webkit-box-shadow: 0px 0px 0px 3px white;
				-moz-box-shadow: 0px 0px 0px 3px white;
				box-shadow: 0px 0px 0px 3px white;
				display: flex;
				justify-content: center;
				align-items: center;
				transition: all 0.3s;

				&:hover {
					transition: all 0.3s;
					scale: 1.1;
				}

				& > img {
					max-width: 100%;
				}
			}
		}

		& > div:nth-child(1) {
			& > div {
				&:hover {
					scale: 1;
				}
			}
		}
	}
`;

export { CardsContainer, ButtoNext, SituationContainer };
