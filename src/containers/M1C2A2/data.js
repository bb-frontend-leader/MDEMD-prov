import sittingMom from '../../sprites/mom/sitting.webp';
import sadMom from '../../sprites/mom/sad.webp';
import sittingHappyMom from '../../sprites/mom/sittingHappy.webp';
import happyMom from '../../sprites/mom/happy.webp';
import askingDad from '../../sprites/dad/asking.webp';
import sittingDad from '../../sprites/dad/sitting.webp';
import idleDad from '../../sprites/dad/idle.webp';
import happyDad from '../../sprites/dad/happy.webp';
import sadPia from '../../sprites/pia/sad.webp';
import askingPia from '../../sprites/pia/asking.webp';
import computerPia from '../../sprites/pia/computer.webp';
import happyPia from '../../sprites/pia/happy.webp';
import sittingPia from '../../sprites/pia/sit.webp';

import pia from '../../sprites/pia.webp';
import mamaOso from '../../sprites/mamaOso.webp';
import papaOso from '../../sprites/papaOso.webp';

import garbageLake from '../../sprites/cards/piaCampaing/CPCBasuraLago.png';
import throwGarbage from '../../sprites/cards/piaCampaing/CPCBotarBasura.png';
import fire from '../../sprites/cards/piaCampaing/CPCFuego.png';
import notHunting from '../../sprites/cards/piaCampaing/CPCProhibidaCaza.png';
import notFell from '../../sprites/cards/piaCampaing/CPCProhibidaTala.png';
import notCampfire from '../../sprites/cards/piaCampaing/CPCProhibidoFuego.png';
import pickupGarbage from '../../sprites/cards/piaCampaing/CPCRecogerBasura.png';
import fell from '../../sprites/cards/piaCampaing/CPCTala.png';

import piaYes from '../../sprites/piaSi.png';
import piaNo from '../../sprites/piaNo.png';

const data = {
	instructions: {
		title: 'instrucciones',
		message:
			'Papá oso: Mira Pía, acabo de encontrar estas imágenes sobre el medio ambiente. ' +
			'¿Crees que puedes decirme lo que le sirve al medio ambiente y lo que no?' +
			'\nMira, aquí hay dos cajas, una dice “SÍ” y la otra dice “NO”. Si crees que ' +
			'la imagen es buena para el medio ambiente, ubica la carta en “SÍ”. Pero si ' +
			'crees que es mala para el medio ambiente ubícala en “NO”.',
		buttonText: 'Jugar',
	},
	deck: [
		{
			id: 0,
			name: 'Prender fogatas en zonas prohibidas',
			address: fire,
			answer: false,
		},
		{
			id: 1,
			name: 'Prohibir dejar prendidas fogatas',
			address: notCampfire,
			answer: true,
		},
		{
			id: 2,
			name: 'Talar arboles',
			address: fell,
			answer: false,
		},
		{
			id: 3,
			name: 'Prohibir talar arboles',
			address: notFell,
			answer: true,
		},
		{
			id: 4,
			name: 'Tirar basura al piso',
			address: throwGarbage,
			answer: false,
		},
		{
			id: 5,
			name: 'Tirar basura a rios y lagunas',
			address: garbageLake,
			answer: false,
		},
		{
			id: 6,
			name: 'Recoger la basura',
			address: pickupGarbage,
			answer: true,
		},
		{
			id: 7,
			name: 'Prohibir la caza de animales',
			address: notHunting,
			answer: true,
		},
	],
	table: [
		{
			id: 0,
			name: 'si',
			address: piaYes,
		},
		{
			id: 1,
			name: 'no',
			address: piaNo,
		},
	],
	cutscene: [
		{
			camera: {
				fov: 35,
				position: {
					x: 9.393581986280548,
					y: 13.343181475061405,
					z: 98.79759932919416,
				},
				rotation: {
					x: 0.022657052595375253,
					y: 0.29287992396862605,
					z: -0.006542359826126458,
				},
			},

			speech: {
				image: mamaOso,
				text: 'Mamá oso: Hola Pía, ¿cómo te fue?',
			},
			sprites: [
				{
					id: 0,
					name: 'mamaOso',
					expressions: [
						{
							src: sittingMom,
							size: [25, 30],
							position: [17.6, 17, -2],
							rotation: [0, 0.4, 0],
							tilesHorizontal: 5,
							tilesVertical: 3,
							totalTiles: 12,
						},
					],
				},
				{
					id: 1,
					name: 'papaOso',
					expressions: [
						{
							src: askingDad,
							size: [25, 30],
							position: [-4.6, 15.6, 8],
							rotation: [0, 0.4, 0],
							tilesHorizontal: 5,
							tilesVertical: 3,
							totalTiles: 12,
						},
					],
				},
				{
					id: 2,
					name: 'pia',
					expressions: [
						{
							src: sadPia,
							size: [12, 15],
							position: [-32, 8, 30],
							rotation: [0, 0.5, 0],
							tilesHorizontal: 5,
							tilesVertical: 2,
							totalTiles: 8,
						},
					],
				},
			],
		},
		{
			speech: {
				image: papaOso,
				text: 'Papá oso: ¿Qué pasó Pía? Pareces un poco angustiada',
			},
		},
		{
			speech: {
				image: pia,
				text: 'Pía: Hola mamá, hola papá.',
			},
		},
		{
			camera: {
				fov: 35,
				position: {
					x: 23.80430491459996,
					y: 19.755787901649548,
					z: 69.27943092511082,
				},
				rotation: {
					x: -0.13115484284736167,
					y: 0.20567193281899646,
					z: 0.02693322669515041,
				},
			},
			speech: {
				image: pia,
				text: 'Pía: sí estoy preocupada. Acabo de estar muy cerca de la ciudad y creo que los humanos están haciéndole mucho daño al bosque. No sé qué podemos hacer.',
			},
			sprites: [
				{
					id: 0,
					name: 'mamaOso',
					expressions: [
						{
							src: sadMom,
							size: [25, 30],
							position: [22, 17, -2],
							rotation: [0, 0.4, 0],
							tilesHorizontal: 4,
							tilesVertical: 3,
							totalTiles: 12,
						},
					],
				},
				{
					id: 1,
					name: 'papaOso',
					expressions: [
						{
							src: sittingDad,
							size: [25, 30],
							position: [-4.6, 15.6, 8],
							rotation: [0, Math.PI + 0.4, 0],
							tilesHorizontal: 4,
							tilesVertical: 3,
							totalTiles: 12,
						},
					],
				},
				{
					id: 2,
					name: 'pia',
					expressions: [
						{
							src: askingPia,
							size: [10, 15],
							position: [8, 14, 8],
							rotation: [0, 0.5, 0],
							tilesHorizontal: 4,
							tilesVertical: 3,
							totalTiles: 12,
						},
					],
				},
			],
		},
		{
			speech: {
				image: papaOso,
				text: 'Papá oso: Es verdad Pía, ayer estuve cerca de la laguna. Hay muchos desechos.',
			},
		},
		{
			speech: {
				image: mamaOso,
				text: 'Mamá oso: Tal vez podamos hacer algo. Lo primero, es alertar a la comunidad sobre los riesgos. Creo que avisarles podría ayudar a protegerlos',
			},
			sprites: [
				{
					id: 0,
					name: 'mamaOso',
					expressions: [
						{
							src: sittingHappyMom,
							size: [25, 30],
							position: [22, 17, -2],
							rotation: [0, 0.4, 0],
							tilesHorizontal: 5,
							tilesVertical: 3,
							totalTiles: 12,
						},
					],
				},
				{
					id: 1,
					name: 'papaOso',
					expressions: [
						{
							src: sittingDad,
							size: [25, 30],
							position: [-4.6, 15.6, 8],
							rotation: [0, Math.PI + 0.4, 0],
							tilesHorizontal: 4,
							tilesVertical: 3,
							totalTiles: 12,
						},
					],
				},
				{
					id: 2,
					name: 'pia',
					expressions: [
						{
							src: sittingPia,
							size: [10, 15],
							position: [8, 14, 8],
							rotation: [0, 0.5, 0],
							tilesHorizontal: 4,
							tilesVertical: 3,
							totalTiles: 10,
						},
					],
				},
			],
		},
		{
			speech: {
				image: pia,
				text: 'Pía: ¡Qué buena idea mamá! ¿Cómo podemos alertarlos?',
			},
		},
		{
			camera: {
				fov: 35,
				position: {
					x: 66.54747030198081,
					y: 10.706578120913246,
					z: 52.13134360783602,
				},
				rotation: {
					x: -0.0070520943569378144,
					y: 0.5630734424865184,
					z: 0.003764365672447128,
				},
			},
			speech: {
				image: mamaOso,
				text: 'Mamá oso: ¡Podemos poner unos avisos en las zonas de peligro! Pero primero tendrás que escoger las imágenes más adecuadas para alertar al resto de animales del bosque',
			},
			sprites: [
				{
					id: 0,
					name: 'mamaOso',
					expressions: [
						{
							src: sittingHappyMom,
							size: [25, 30],
							position: [17.6, 16, -2],
							rotation: [0, 0.4, 0],
							tilesHorizontal: 5,
							tilesVertical: 3,
							totalTiles: 12,
						},
					],
				},
				{
					id: 1,
					name: 'papaOso',
					expressions: [
						{
							src: idleDad,
							size: [25, 30],
							position: [50, 13, -10],
							rotation: [0, 0.4, 0],
							tilesHorizontal: 5,
							tilesVertical: 3,
							totalTiles: 12,
						},
					],
				},
				{
					id: 2,
					name: 'pia',
					expressions: [
						{
							src: happyPia,
							size: [10, 15],
							position: [36, 7, -5],
							rotation: [0, 0.4, 0],
							tilesHorizontal: 4,
							tilesVertical: 3,
							totalTiles: 10,
						},
					],
				},
			],
		},
		{
			speech: {
				image: papaOso,
				text: 'Papá oso: Ven Pía. En el computador podemos buscar algunas imágenes que puedan servirnos.',
			},
		},
		{
			camera: {
				fov: 35,
				position: {
					x: 82.97648173058923,
					y: 25.63069878930585,
					z: 104.95581832895904,
				},
				rotation: {
					x: -0.16535470576464653,
					y: 0.0855647447957506,
					z: 0.0142605260606333,
				},
			},
			sprites: [
				{
					id: 0,
					name: 'mamaOso',
					expressions: [
						{
							src: happyMom,
							size: [23, 28],
							position: [50, 13, 15],
							rotation: [0, 0.4, 0],
							tilesHorizontal: 4,
							tilesVertical: 3,
							totalTiles: 10,
						},
					],
				},
				{
					id: 1,
					name: 'papaOso',
					expressions: [
						{
							src: happyDad,
							size: [25, 30],
							position: [60, 14, 10],
							rotation: [0, 0.4, 0],
							tilesHorizontal: 5,
							tilesVertical: 3,
							totalTiles: 12,
						},
					],
				},
				{
					id: 2,
					name: 'pia',
					expressions: [
						{
							src: computerPia,
							size: [12, 15],
							position: [78, 12, 19],
							rotation: [0, 0.4, 0],
							tilesHorizontal: 4,
							tilesVertical: 3,
							totalTiles: 10,
						},
					],
				},
			],
		},
	],
};

export { data };
