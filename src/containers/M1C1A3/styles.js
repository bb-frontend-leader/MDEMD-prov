import styled from 'styled-components';

import backpack from '../../sprites/backpack.webp';

const CardsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	width: 60vw;
	height: 23vh;
	gap: 0.5rem;
	position: absolute;
	inset: 0vh 20vw;
	background-image: url(${backpack});
	background-repeat: no-repeat;
	background-size: contain;
  background-position: calc(50% - 3vw) 50%;
	visibility: ${(props) => (props.visible !== null ? 'visible' : 'hidden')};
`;

export { CardsContainer };
