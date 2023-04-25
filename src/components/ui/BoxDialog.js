import React from 'react';

import { ButtonStart } from './styles';

import piaImage from '../../sprites/pia.webp';
import papaOsoImage from '../../sprites/papaOso.webp';

import './boxDialog.css';

const BoxDialog = ({
	title,
	message,
	hasButton,
	buttonText,
	hide,
	setIsReady,
	image,
}) => {
	return (
		<div
			style={{
				position: 'absolute',
				inset: '20vh 20vw',
				height: '60vh',
				width: '60vw',
				background: '#f18f60',
				borderRadius: '20px',
				boxShadow: 'inset 0 -12px 0px #7d5f70, inset 0 -18px 0px #e36c55',
				zIndex: '100001',
				visibility: hide ? 'hidden' : 'visible',
			}}
		>
			<div
				style={{
					position: 'fixed',
					inset: '21vh 21vw 28vh',
					height: '50vh',
					width: '58vw',
					background: '#fff1eb',
					borderRadius: '20px',
					boxShadow: '0px 0px 0 2px #c66c59',
				}}
			>
				<h1
					style={{
						fontSize: '5vh',
						fontFamily: 'Dimbo',
						color: '#bd443f',
						textAlign: 'center',
						textTransform: 'uppercase',
						textShadow: '1px 1px #742323',
					}}
				>
					{title}
				</h1>
				<p
					style={{
						fontSize: '4vh',
						fontFamily: 'Dimbo',
						color: '#bd443f',
						textAlign: 'justify',
						margin: '20px',
					}}
				>
					{message}
				</p>
				<img
					src={image === 'papaOso' ? papaOsoImage : piaImage}
					style={{ position: 'fixed', inset: '10vh 18vw', width: '20vh' }}
					alt=""
				/>
			</div>
			{hasButton && (
				<ButtonStart onClick={() => setIsReady(true)}>{buttonText}</ButtonStart>
			)}
		</div>
	);
};

export default BoxDialog;
