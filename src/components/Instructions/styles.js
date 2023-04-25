import styled from 'styled-components';

import cursor from '../../assets/img/Login/Puntero.webp';
import imageInstructions from '../../assets/img/Modulo1/CuadroDialogo.png';
import botoncerrarvideo from '../../assets/img/icons/BotonCerrarVideo.png';

const Help = styled.button`
	position: absolute;
	z-index: 1;
	top: 9%;
	left: 10%;
	border: none;
	background: none;
	padding: 0;
	margin: 0;
	@media screen and (max-width: 1200px) {
		left: 12%;
	}
	img {
		width: 80px;
		@media screen and (max-height: 700px) {
			width: 50px;
		}
		&:hover {
			cursor: pointer;
			cursor: url(${cursor}), auto;
			filter: brightness(120%);
		}
	}
`;

const ButtonCloseInstructions = styled.button`
	background: none;
	border: none;
	background-image: url(${botoncerrarvideo});
	background-size: contain;
	background-repeat: no-repeat;
	position: absolute;
	top: -5%;
	left: 92%;
	width: 2.5vw;
	height: 5.1vh;

	&:hover {
		cursor: pointer;
		cursor: url(${cursor}), auto;
		filter: brightness(130%);
	}
`;

const ContentInstructions = styled.div`
	width: 28vw;
	height: 30vh;
	position: absolute;
	z-index: 1;
	top: 25%;
	left: 8%;
	background: none;
	background-image: url(${imageInstructions});
	background-repeat: no-repeat;
	background-size: 100%;
	display: ${(props) => (props.isOpen ? 'flex' : 'none')};
	font-family: 'Dimbo';
	color: #bd443f;
	margin-left: 25px;
	font-size: 1rem;
	text-align: center;
	padding: 10px;
	p {
		margin-top: 5%;
	}
	@media screen and (max-height: 300px) {
		top: 15%;
		margin-left: 45px;
		width: 28vw;
		height: 35vh;
	}
	@media screen and (min-width: 700px) {
		margin-left: 18px;
		width: 28vw;
		height: 30vh;
		margin-left: 20px;
		p {
			margin-top: 6%;
			font-size: 1.1rem;
		}
	}
	@media screen and (min-width: 900px) {
		margin-left: 25px;
		p {
			margin-top: 5%;
			font-size: 1.4rem;
		}
	}
	@media screen and (min-width: 1200px) {
		p {
			margin-top: 3%;
			font-size: 1.7rem;
			padding: 3%;
		}
	}
	@media screen and (min-width: 1400px) {
		width: 24vw;
		height: 30vh;
		p {
			margin-top: 0;
			font-size: 2rem;
		}
	}
	@media screen and (min-width: 1600px) {
		p {
			margin-top: 8%;
		}
	}
`;

export { ButtonCloseInstructions, ContentInstructions, Help };
