import styled from 'styled-components';
import cursor from '../../assets/img/Login/Puntero.webp';

const MenuGameContainer = styled.div`
	position: absolute;
	z-index: 9999999;
	display: flex;
	flex-direction: column;
	gap: 10px;
	right: 2rem;
	top: 20vh;

	& > div {
		padding: 1px;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.5;

		&:hover {
			cursor: url(${cursor}) 15 10, pointer;
			background-color: hsla(42, 96%, 54%, 0.2);
			transition: all 0.5;
		}

		& > img {
			max-width: 4rem;
		}
	}
`;

export { MenuGameContainer };
