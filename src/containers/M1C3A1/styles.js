import styled from 'styled-components';
import '../../components/ui/boxDialog.css';

const TextContainer = styled.div`
	width: 20px;
	height: 20px;
	font-family: Dimbo;
	text-align: center;
	background-color: ${(props) => (props.selected === true ? 'green' : 'white')};
	${'' /* background-color: white; */}
`;

const Text = styled.h1`
	${
		'' /* font-size: 6vh;
	font-family: Dimbo;
	text-align: center; */
	}
	${'' /* background-color: ${props => }; */}
`;

const Title = styled.h1`
	font-size: 25px;
	font-family: Dimbo;
	text-align: center;
	text-transform: uppercase;
	text-shadow: 2px 2px black;
	color: white;
	-webkit-font-smoothing: antialiased;
`;

export { Text, TextContainer, Title };
