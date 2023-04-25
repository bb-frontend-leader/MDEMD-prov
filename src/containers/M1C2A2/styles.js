import styled, { keyframes } from 'styled-components';
import '../../components/ui/boxDialog.css';

const fadeIn = keyframes`
  from { transform: scale(0.85); } 
`;

const TextContainer = styled.div`
	min-width: 100vw;
	position: fixed;
	top: ${(props) => (props.vertical ? props.vertical : '1rem')};
	z-index: 1000;
	justify-content: center;
	display: ${(props) => (props.show ? 'flex' : 'none')};
`;

const Text = styled.h1`
	font-size: 6vh;
	font-family: Dimbo;
	text-align: center;
	text-transform: uppercase;
	animation: ${fadeIn} 1s infinite alternate;
	padding: 0.5rem 1rem;
	background-color: hsl(37, 93%, 58%);
	border-radius: 10px;
	border: 0.5rem solid white;
	margin: ${(props) => (typeof props.margin == 'string' ? props.margin : '3rem')};
`;

export { Text, TextContainer };
