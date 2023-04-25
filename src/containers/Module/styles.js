import styled from 'styled-components';

import cursor from '../../assets/img/Login/Puntero.webp';
import botonvideo from '../../assets/img/icons/BotonVideo.webp';
import botoncerrarvideo from '../../assets/img/icons/BotonCerrarVideo.png';
import '../../components/ui/boxDialog.css';

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
	position: relative;
`;

const ContentVideo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 500px;
	height: 250px;
	@media screen and (min-width: 700px) {
		width: 600px;
		height: 300px;
	}
	@media screen and (min-width: 1000px) {
		width: 800px;
		height: 400px;
	}
	@media screen and (min-width: 1200px) {
		width: 1000px;
		height: 500px;
	}
	position: relative;
`;

const ButtonCloseVideo = styled.button`
	background: none;
	border: none;
	background-image: url(${botoncerrarvideo});
	background-size: cover;
	position: absolute;
	top: -2%;
	left: 83%;
	width: 50px;
	height: 50px;
	display: ${(props) => (props.isOpen ? 'flex' : 'none')};

	&:hover {
		cursor: pointer;
		cursor: url(${cursor}), auto;
		filter: brightness(130%);
	}
`;

const SectionContainer = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
`;

const ImageModule = styled.img`
	width: 100vw;
	height: 100vh;
`;

const ContentButtonVideos = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 25%;
	left: 0;
	z-index: 1;
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

const ReproducirVideo = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	background: hsla(0, 0%, 0%, 0.8);
	display: ${(props) => (props.isOpen ? 'flex' : 'none')};
`;

export {
	ContainerPage,
	ContentPage,
	ContentButtonVideos,
	ContentButtonVideo,
	ContentVideo,
	ButtonCloseVideo,
	ImageModule,
	SectionContainer,
	ReproducirVideo,
};
