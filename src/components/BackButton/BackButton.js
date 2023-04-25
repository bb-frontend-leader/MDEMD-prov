import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from "@chakra-ui/tooltip";

import ContentBack from './styles';
import back from '../../assets/img/Mapa/back.webp';

const BackButton = ({ ruta, rutaTour }) => {
	return (
		<Tooltip label='Regresar' placement='top' className='toolTip'>
			<ContentBack className={rutaTour} >
				{ruta && (
					<Link to={ruta}>
						<img src={back} alt="" />
					</Link>
				)}
			</ContentBack>
		</Tooltip>
	);
};

export default BackButton;
