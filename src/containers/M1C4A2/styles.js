import styled from 'styled-components';

const ContainerProgressBar = styled.div`
	position: absolute;
	z-index: 1000;
	min-width: 100vw;
	display: flex;
	justify-content: center;
`;

const ContentProgressBar = styled.div`
	display: inline-block;
	width: 400px;
	height: 50px;
	margin: 35px;
	border-radius: 20px;
	background: #f9f9f9;
`;

const Bar = styled.div`
	border-radius: 20px;
	width: 0%;
	height: 100%;
	transition: width;
	transition-duration: 1s;
	transition-timing-function: cubic-bezier(0.36, 0.55, 0.63, 0.48);
	box-shadow: 0px 45px 50px rgba(0, 0, 0, 0.25);
	background-color: #fcc846;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%237a4948' fill-opacity='0.83' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

export { ContainerProgressBar, Bar, ContentProgressBar };
