import styled from 'styled-components';

const ContainerButtons = styled.div`
	z-index: 99999999;
	position: absolute;
	min-width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	bottom: 2rem;
	gap: 30vw;

	& > button {
		min-height: 2rem;
		border-radius: 5px;
	}
`;

export { ContainerButtons };
