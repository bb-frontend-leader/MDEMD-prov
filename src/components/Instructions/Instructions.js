import React, { useState } from 'react';
import { Tooltip } from "@chakra-ui/tooltip";

import { ButtonCloseInstructions, ContentInstructions, Help } from './styles';

import help from '../../assets/img/menu/BotonInstrucciones.webp';

const TextInstructions = ({ description, className }) => {

	const [openinstructions, setOpenInstructions] = useState(true);

	const closeInstruction = () => {
		setOpenInstructions(!openinstructions);
	};

	return (
		<>
			<Tooltip label='Presiona este boton para abrir o cerrar las instrucciones!' placement='right' className='toolTip'>
			<Help onClick={() => closeInstruction()}>
				<img src={help} alt="" />
			</Help>
			</Tooltip>
			<ContentInstructions isOpen={openinstructions} className={className}>
				<p>{description}</p>
				<ButtonCloseInstructions
					onClick={() => closeInstruction()}
					className={'step-13'}
				/>
			</ContentInstructions>
		</>		
	);
};

export default TextInstructions;
