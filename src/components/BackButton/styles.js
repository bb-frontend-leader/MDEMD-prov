import styled from 'styled-components';

import cursor from '../../assets/img/Login/Puntero.webp';

const ContentBack = styled.button`
	position: absolute;
	z-index: 1;
	top: 9%;
	left: 2%;
	border: none;
	background: none;
	padding: 0;
	margin: 0;
	img {
		width: 80px;
		@media screen and (max-height: 700px) {
			width: 50px;
		}
		&:hover {
			cursor: pointer;
			cursor: url(${cursor}), auto;
			filter: brightness(120%);
		}
	}
`;

export default ContentBack;
