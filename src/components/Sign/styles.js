import styled from 'styled-components';

import cursor from '../../assets/img/Login/Puntero.webp';

const ImageSign = styled.img`
	position: absolute;
	z-index: 1;
	padding-top: 0;
	width: 3.3vw;
	top: ${({ top = 0 }) => top + 1}%;
	left: ${({ left = 0 }) => left + 1}%;
	filter: grayscale(${(props) => (props.disabled ? 100 : 0)}%);

	&:hover {
		cursor: url(${cursor}), auto;
		filter: brightness(${(props) => (props.disabled ? 'none' : 130)}%);
	}

	@media screen and (max-height: 600px) {
		transform: rotate(${({ rotate = 0 }) => rotate}deg)
			scale(${({ scale = 1 }) => scale + 0.1});
	}

	@media screen and (min-width: 600px) {
		transform: rotate(${({ rotate = 0 }) => rotate}deg)
			scale(${({ scale = 1 }) => scale + 0.4});
		top: ${({ top = 0 }) => top + 1.5}%;
	}

	@media screen and (min-width: 1200px) {
		transform: rotate(${({ rotate = 0 }) => rotate}deg)
			scale(${({ scale = 1 }) => scale + 0.4});
		top: ${({ top = 0 }) => top + 1.3}%;
	}
	@media screen and (min-width: 1400px) {
		transform: rotate(${({ rotate = 0 }) => rotate}deg)
			scale(${({ scale = 1 }) => scale + 0.3});
		top: ${({ top = 0 }) => top + 1}%;
	}
	@media screen and (min-width: 1600px) {
		transform: rotate(${({ rotate = 0 }) => rotate}deg)
			scale(${({ scale = 1 }) => scale + 0.2});
		top: ${({ top = 0 }) => top + 0.8}%;
	}
`;

export default ImageSign;
