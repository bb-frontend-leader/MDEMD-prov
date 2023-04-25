import styled from 'styled-components';

import backpack from '../../sprites/backpack.webp';

const FruitsBoardContainer = styled.div`
	position: relative;
	background-color: hsla(0, 0%, 100%, 1);
	display: flex;
	z-index: 9999999999;
	border-radius: 40%;
	padding: 0.5rem;

	& img {
		max-width: 2.5rem;
	}
`;

const ContainerImage = styled.div`
	filter: ${(props) => (props.disabled ? 'grayscale(1)' : 'grayscale(0)')};

	&:hover img {
		cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
		filter: ${(props) => (props.disabled ? 'grayscale(1)' : 'brightness(1.5)')};
		transform: ${(props) => (props.disabled ? 'scale(1)' : 'scale(1.5)')};
	}
`;

export { FruitsBoardContainer, ContainerImage };
