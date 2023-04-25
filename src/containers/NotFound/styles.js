import styled from 'styled-components';
import background from '../../assets/img/error404.webp';

const ContainerPage = styled.div`
	min-width: 100vw;
	max-width: 100vw;
	min-height: 100vh;
	max-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${background});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export { ContainerPage };
