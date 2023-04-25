import styled from 'styled-components';

const StarImage = styled.img`
	position: absolute;
	max-width: 3vw;
	top: ${({ top = 0 }) => parseFloat(top) + 1}%;
	left: ${({ left = 0 }) => left}%;
	transform: rotate(${({ rotate = 0 }) => rotate}deg)
		scale(${({ scale = 1 }) => scale + 0.1});

	@media screen and (max-height: 600px) {
		top: ${({ top = 0 }) => top}%;
	}

	@media screen and (min-width: 992px) {
		transform: rotate(${({ rotate = 0 }) => rotate}deg)
			scale(${({ scale = 1 }) => scale});
		top: ${({ top = 0 }) => top}%;
	}

	@media screen and (min-height: 600px) {
		top: ${({ top = 0 }) => parseFloat(top) + 1}%;
		left: ${({ left = 0 }) => left}%;
		transform: rotate(${({ rotate = 0 }) => rotate}deg)
			scale(${({ scale = 1 }) => scale + 0.1});
	}

	@media screen and (min-width: 1500px) {
		transform: rotate(${({ rotate = 0 }) => rotate}deg)
			scale(${({ scale = 1 }) => scale});
		top: ${({ top = 0 }) => top}%;
	}
`;

export default StarImage;
