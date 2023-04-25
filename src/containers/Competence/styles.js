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
	background: none;
	border: none;
	background-size: cover;
	position: absolute;
  background-image: url(${botoncerrarvideo});
	

@media only screen and (max-width: 600px) {
      top: 30%;
      left: 73.2%;
      width: 50px;
      height: 50px;}

@media only screen and (min-width: 600px) {
      top: 30%;
      left: 73.2%;
      width: 50px;
      height: 50px;

}

@media only screen and (min-width: 768px) {
      top: 30%;
      left: 73.2%;
      width: 50px;
      height: 50px;
}

@media only screen and (min-width: 992px) {
      top: 20%;
      left: 73.2%;
      width: 50px;
      height: 50px;
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
      top: 27%;
      left: 70.5%;
      width: 50px;
      height: 50px;
}
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

const ImageCompetence = styled.img`
	width: 100vw;
	height: 100vh;
`;

const ContentVideoCompetence = styled.div`
	justify-content: center;
	align-items: center;
	z-index: 2;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
`;

export {
	ContainerPage,
	ContentPage,
	ImageCompetence,
	ContentVideoCompetence,
  ButtonCloseVideo,
  ContentButtonVideo,
  ContentButtonVideos,
};
