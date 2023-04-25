import styled from 'styled-components';

const Advice = styled.img`
	position: absolute;
	width: 20vw;
	height: 42vh;
	top: ${({ top = 0 }) => top}%;
	left: ${({ left = 0 }) => left}%;
	transform: rotate(${({ rotate = 0 }) => rotate}deg) scale(${({ scale = 1 }) => scale});
`;

export default Advice;
