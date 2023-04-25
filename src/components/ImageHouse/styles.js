import styled from 'styled-components';

const House = styled.img`
	position: absolute;
	top: ${({ top = 0 }) => top}%;
	left: ${({ left = 0 }) => left}%;
	width: 20vw;
	height: 20vh;
	transform: rotate(${({ rotate = 0 }) => rotate}deg) scale(${({ scale = 1 }) => scale});
	filter: grayscale(${(props) => (props.disabled ? 100 : 0)}%);
`;

export default House;
