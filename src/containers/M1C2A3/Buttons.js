import React, { useRef } from 'react';
import { ContainerButtons } from './styles';

const Buttons = () => {
	return (
		<ContainerButtons>
			<button id="leftButton">izquierda</button>
			<button id="rightButton">derecha</button>
		</ContainerButtons>
	);
};

export default Buttons;
