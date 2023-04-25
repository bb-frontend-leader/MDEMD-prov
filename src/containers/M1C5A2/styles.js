import styled from 'styled-components';
import Clock from '../../assets/img/clock.png';

const ContainerClock = styled.div`
	z-index: 99999999;
	position: absolute;
	top: 10vh;
	left: 47.5vw;
	min-width: 8rem;
	min-height: 8rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	background-image: url(${Clock});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: contain;
`;

export { ContainerClock };
