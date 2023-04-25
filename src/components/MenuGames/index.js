import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { MenuGameContainer } from './styles';

import BotonCancelar from '../../assets/img/menu/BotonCancelar.webp';
import BotonHome from '../../assets/img/menu/BotonHome.webp';
import BotonInstrucciones from '../../assets/img/menu/BotonInstrucciones.webp';
import BotonMute from '../../assets/img/menu/BotonMute.webp';

const MenuGames = ({ setShowInstruccions, setMute }) => {
	const history = useNavigate();

	const actions = {
		home: () => {
			history('/home');
		},
		cancel: () => {
			history(-1);
		},
		instruction: () => {
			setShowInstruccions();
		},
		mute: () => {
			setMute();
		},
	};

	const options = (option) => {
		const action = Object.create(actions);
		action[option]();
	};

	const listItems = [
		{
			image: BotonHome,
			option: 'home',
		},
		{
			image: BotonMute,
			option: 'mute',
		},
		{
			image: BotonInstrucciones,
			option: 'instruction',
		},
		{
			image: BotonCancelar,
			option: 'cancel',
		},
	];

	return (
		<MenuGameContainer>
			{listItems.map((item, index) => {
				return (
					<div key={index}>
						<img src={item.image} onClick={() => options(item.option)} />
					</div>
				);
			})}
		</MenuGameContainer>
	);
};

MenuGames.propTypes = {
	setShowInstruccions: PropTypes.func.isRequired,
	setMute: PropTypes.func.isRequired,
};

export default MenuGames;
