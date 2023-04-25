import styled from 'styled-components';

import cursor from '../../assets/img/Login/Puntero.webp';

const ContentBack = styled.button`
	position: absolute;
	z-index: 999999999999999;	
	bottom: 0.5rem;
	right: 5%;
	border: none;
	background: none;
	padding: 0;
	margin: 0;
	@media screen and (max-height: 450px) {
		bottom: 4%;
	}
	img {
		width: 140px;
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
