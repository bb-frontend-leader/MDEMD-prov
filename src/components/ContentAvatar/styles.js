import styled from 'styled-components';

import cursor from '../../assets/img/Login/Puntero.webp';
import botoneditar from '../../assets/img/icons/BotonEditar.png';

const Avatar = styled.div``;

const ImageProfileBig = styled.img`
	max-width: 45%;
	max-height: 45%;
	position: absolute;
	top: 50%;
	left: 3%;
	z-index: 1;
	&:hover {
		cursor: pointer;
		cursor: url(${cursor}), auto;
		filter: brightness(30%);
	}
	@media screen and (max-height: 300px) {
		margin-left: 45px;
	}
`;

const ButtonEditAvatar = styled.button`
	position: absolute;
	top: 55%;
	left: 6%;
	border: none;
	background: none;
	width: 68px;
	height: 55px;
	margin-bottom: 30px;
	@media screen and (max-height: 700px) {
		width: 30px;
		height: 30px;
		margin-bottom: 15px;
	}
	background-image: url(${botoneditar});
	background-size: cover;
  ${Avatar}: hover & {
		z-index: 2;
	}
	&:hover {
		cursor: pointer;
		cursor: url(${cursor}), auto;
		filter: brightness(120%);    
	}
`;

export { Avatar, ImageProfileBig, ButtonEditAvatar };
