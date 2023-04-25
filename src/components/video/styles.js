import styled from 'styled-components';
import botoncerrarvideo from '../../assets/img/icons/BotonCerrarVideo.png';
import botonvideo from '../../assets/img/icons/BotonVideo.webp';

import cursor from '../../assets/img/Login/Puntero.webp';

const ContainerPage = styled.div`
	min-width: 100vw;
	max-width: 100vw;
	min-height: 100vh;
	max-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const ContentPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	max-height: 100%;
	position: absolute;
`;
const ButtonCloseVideo = styled.button`
	width: 50px;
	height: 50px;
	background: none;
	border: none;
	background-size: cover;
	position: absolute;
	background-image: url(${botoncerrarvideo});
	&:hover {
		cursor: pointer;
		cursor: url(${cursor}), auto;
	}
	@media only screen and (max-height: 589px) {
		top: 6%;
		left: 90%;
		width: 35px;
		height: 35px;
	}
	top: 3%;
	left: 93%;
`;

const ContentButtonVideo = styled.button`
	border: none;
	background: none;
	width: 80px;
	height: 80px;
	margin-bottom: 30px;
	@media screen and (max-height: 700px) {
		width: 50px;
		height: 50px;
		margin-bottom: 15px;
	}

	background-image: url(${botonvideo});
	background-size: cover;
	&:hover {
		cursor: pointer;
		cursor: url(${cursor}), auto;
		filter: brightness(120%);
	}
`;

const ContentButtonVideos = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 25%;
	left: 0;
	z-index: 1;
`;

const Letrero = styled.img`
	position: absolute;
	width: 20vw;
	height: 42vh;
	top: ${({ top = 0 }) => top}%;
	left: ${({ left = 0 }) => left}%;
	transform: rotate(${({ rotate = 0 }) => rotate}deg) scale(${({ scale = 1 }) => scale});
`;

const ImageCompetence = styled.img`
	width: 100vw;
	height: 100vh;
`;

const ImageSign = styled.img`
	position: absolute;
	z-index: 1;
	width: ${({ width = 4 }) => width}vw;
	padding-top: 0;
	top: ${({ top = 0 }) => top}%;
	left: ${({ left = 0 }) => left}%;
	transform: rotate(${({ rotate = 0 }) => rotate}deg)
		scale(${({ scale = 1 }) => scale + 0.25});

	@media screen and (min-width: 992px) {
		transform: rotate(${({ rotate = 0 }) => rotate}deg)
			scale(${({ scale = 1 }) => scale + 0.5});
	}

	@media screen and (min-width: 1500px) {
		transform: rotate(${({ rotate = 0 }) => rotate}deg)
			scale(${({ scale = 1 }) => scale});
	}

	&:hover {
		cursor: pointer;
		cursor: url(${cursor}), auto;
		filter: brightness(130%);
	}
`;

const ContentVideoCompetence = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
	background-color: hsla(0, 0%, 0%, 0.8);
	justify-content: center;
	align-items: center;
	z-index: 3;
	display: ${(props) => (props.open ? 'flex' : 'none')};
`;

const ContentEncapVideo = styled.div`
	position: absolute;
	width: 600px;
	height: 340px;
	@media only screen and (max-height: 589px) {
		width: 400px;
	  height: 220px;
	}
`;

export {
	ContainerPage,
	ContentPage,
	ImageCompetence,
	ImageSign,
	Letrero,
	ContentVideoCompetence,
	ButtonCloseVideo,
	ContentButtonVideo,
	ContentButtonVideos,
	ContentEncapVideo
};
