import styled from 'styled-components';

import backpack from '../../sprites/backpack.webp';

const LifeContiainer = styled.div`
	position: absolute;
	display: flex;
	gap: 1rem;
	top: 1rem;
	right: 2rem;
`;

const Heart = styled.div`
	position: relative;
	width: 25px;
	height: 23px;
	animation: heartbeat 1s infinite;
	margin: 0 auto;
	z-index: 9999999999;

	&:before,
	&:after {
		position: absolute;
		content: '';
		left: 15px;
		top: 0;
		width: 15px;
		height: 25px;
		background: ${(props) =>
			props.background ? 'hsl(0, 100%, 50%)' : 'hsl(0, 100%, 100%)'};
		-moz-border-radius: 15px 15px 0 0;
		border-radius: 15px 15px 0 0;
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-ms-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg);
		-webkit-transform-origin: 0 100%;
		-moz-transform-origin: 0 100%;
		-ms-transform-origin: 0 100%;
		-o-transform-origin: 0 100%;
		transform-origin: 0 100%;
	}

	&:after {
		left: 0;
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
		-webkit-transform-origin: 100% 100%;
		-moz-transform-origin: 100% 100%;
		-ms-transform-origin: 100% 100%;
		-o-transform-origin: 100% 100%;
		transform-origin: 100% 100%;
	}

	@keyframes heartbeat {
		0% {
			transform: scale(0.75);
		}
		20% {
			transform: scale(1);
		}
		40% {
			transform: scale(0.75);
		}
		60% {
			transform: scale(1);
		}
		80% {
			transform: scale(0.75);
		}
		100% {
			transform: scale(0.75);
		}
	}
`;

export { LifeContiainer, Heart };
