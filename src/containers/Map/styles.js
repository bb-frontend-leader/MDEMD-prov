import styled from 'styled-components';

import cursor from '../../assets/img/Login/Puntero.webp';
import logout from '../../assets/img/Mapa/Logout.png';
import fondo from '../../assets/img/SeleccionAvatar/fondo.webp';

const ContainerPage = styled.div`
	min-width: 100vw;
	max-width: 100vw;
	min-height: 100vh;
	max-height: 100vh;
	background-image: url(${fondo});
	background-size: 100% 120%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const ContentHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	position: absolute;
	top: 0;
	width: 100%;
	padding: 10px 0;
	@media screen and (max-height: 450px) {
		background-color: none;
	}
`;

const ImageHeader = styled.img`
	width: 12rem;
	margin-left: 5%;
	@media screen and (max-height: 450px) {
		display: none;
	}
`;

const ButtonLogout = styled.button`	
	background: none;
	background-image: url(${logout});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	border: none;
	margin-right: 5%;
	width: 50px;
	height: 53px;
	&:hover {
		cursor: pointer;
		cursor: url(${cursor}), auto;
		filter: brightness(120%);
	}
	@media screen and (max-height: 450px) {
		margin-left: 90%;
		width: 30px;
		height: 33px;
	}
`;

const ContentPage = styled.div`
	min-height: 60vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
`;

const ImageMark = styled.img`
	position: absolute;
	max-width: 5rem;
	top: ${({ top = 0 }) => top - 15}%;
	left: ${({ left = 0 }) => left - 1}%;

	&:hover {
		cursor: pointer;
		cursor: url(${cursor}), auto;
		filter: brightness(130%);
	}
	@media screen and (max-height: 450px) {
		margin-top: 3%;
		max-width: 4rem;
	}

	@media (min-width: 1200px) {
		top: ${({ top = 0 }) => top - 8}%;
	}

	@media (min-width: 1500px) {
		top: ${({ top = 0 }) => top}%;
		left: ${({ left = 0 }) => left}%;
	}
`;

const ImageMap = styled.img`
	max-width: 90vw;
`;

const ContainerImageMap = styled.div`
	position: relative;
`;

const ContainerAvatar = styled.div`
	position: relative;
	position: absolute;
	bottom: 5vh;
	left: 5vw;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 0;
	@media screen and (max-height: 450px) {
		bottom: 2vh;
		left: 2vw;
	}
`;

const ContentImageAvatar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 7rem;
	max-height: 7rem;
	min-width: 7rem;
	background-color: hsl(45, 85%, 56%);
	border-radius: 50%;
	padding: 1rem;
	border: 5px solid white;
	max-width: 6rem;
	overflow: hidden;

	img {
		margin-top: 2rem;
		max-width: 4rem;
		top: 10rem;
	}
`;

const Fullname = styled.div`
	font-family: sans-serif;
	font-size: 1.5rem;
	font-weight: bold;
	color: white;
	min-width: 7rem;
	padding: 0.3rem 1rem;
	background-color: hsl(174, 62%, 40%);
	border-radius: 0 1rem 1rem 0;
	z-index: -1;
	margin-left: -0.5rem;
`;

export {
	ContainerPage,
	ContentHeader,
	ImageHeader,
	ButtonLogout,
	ContainerAvatar,
	Fullname,
	ContainerImageMap,
	ImageMap,
	ImageMark,
	ContentPage,
	ContentImageAvatar,
};
