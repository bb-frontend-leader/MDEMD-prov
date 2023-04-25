import styled from 'styled-components';
import background from '../../assets/img/SeleccionAvatar/fondo.webp';
import cursor from '../../assets/img/Login/Puntero.webp';
import send from '../../assets/img/Login/btn_ingresar.webp';

const ContainerPage = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	background-image: url(${background});
	background-position: center center;
	background-size: cover;
	display: flex;
	align-items: center;
`;

const Contentup = styled.div`
	display: flex;
  justify-content: start;
  align-items: center;
	padding: 30px;
	p {
    font-family: Dimbo;
		font-size: 300%;
		color: #494949;
		font-weight: bold;
		margin-left: 30%;
		margin-top: 15px;
	}
	@media screen and (max-height: 500px) {
		padding: 0;
		width: 70vw;
		p {
			font-size: 210%;
			margin-left: 20%;
			margin-top: 15px;
		}
	}
	@media screen and (max-height: 300px) {
		padding: 0;
		width: 70vw;
		p {
			font-size: 150%;
			margin-left: 20%;
		}
	}
`;

const Contentdown = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const ContainerLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

const ContentAvatars = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	max-width: 80%;
`;

const ContentProfile = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;

const ImageProfile = styled.img`
	&:hover {
		cursor: pointer;
		cursor: url(${cursor}), auto;
	}
`;

const ImageProfileBig = styled.img`
	max-width: 60%;
	max-height: 60%;
	@media screen and (max-width: 1200px) {
		width: 50%;
		height: 50%;
	}
`;

const ImageProfileContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0);
	background: ${(props) =>
		props.selected ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)'};
	border-radius: 50%;
	padding: 0.3rem;
	transition: all 0.5s;
	margin: 0 10px;
	@media screen and (max-width: 1500px) {
		border-radius: auto;
		img {
			width: 130px;
		}
	}
	@media screen and (max-width: 1200px) {
		img {
			width: 90px;
		}
	}
	@media screen and (max-width: 900px) {
		padding: 0;
		img {
			width: 70px;
		}
	}
	@media screen and (max-width: 700px) {
		img {
			width: 50px;
		}
	}

	&:hover {
		background: rgba(0, 0, 0, 0.7);
		transition: all 0.5s;
	}
`;

const ContentSend = styled.div`
	display: flex;
	height: 30%;
	flex-direction: column;
	align-items: center;
	@media screen and (max-width: 1100px) {
		img {
			width: 120px;
		}
	}
	@media screen and (max-height: 500px) {
		flex-direction: row;
		height: 20vh;
	}
`;

const Input = styled.input`
	min-width: 15vw;
	min-height: 2.5rem;
	background-color: #e9e9e9;
	border: none;
	border-radius: 1rem;
	font-family: Arial;
	font-size: 1.3rem;
	font-weight: bold;
	padding: 0 20px;
	color: #494949;
	text-align: center;
`;

const ImageSend = styled.button`
	border: none;
	width: 150px;
	height: 50px;
	background: none;
	background-image: url(${send});
	background-size: cover;
	&:hover {
		cursor: pointer;
		cursor: url(${cursor}), auto;
	}
	padding: 20px;
	margin-top: 3%;
`;

const ContainerRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 30%;
`;

export {
	ContainerPage,
	ContainerLeft,
	ContentProfile,
	ImageProfile,
	ImageProfileBig,
	Contentup,
	ContainerRight,
	ImageSend,
	Input,
	ImageProfileContainer,
	Contentdown,
	ContentSend,
	ContentAvatars,
};
