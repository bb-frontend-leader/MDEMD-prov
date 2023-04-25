import * as Mathf from '../../util/Mathf';
import boyPickingUp from '../../sprites/children/boyPickingUp.webp';
import girlSeeds from '../../sprites/children/girlSeeds.webp';
import girlSignal from '../../sprites/children/girlSignal.webp';
import boyBucket from '../../sprites/children/boyBucket.png';
import boyIdle from '../../sprites/children/boy_idle.webp';
import girlIdle from '../../sprites/children/girl_idle.webp';
import campfire from '../../sprites/campfire/campfire.webp';

import trashBag from '../../sprites/cards/caringPlants/CAPBolsaBasura.png';
import seeds from '../../sprites/cards/caringPlants/CAPSemillasArboles.png';
import sign from '../../sprites/cards/caringPlants/CAPLetreroLago.png';
import bucket from '../../sprites/cards/caringPlants/CAPBalde.png';

const data = {
	instructions: {
		title: 'Instrucciones',
		message:
			'¡Hola! Como puedes ver, tenemos otros problemas en el bosque. ' +
			'Estoy segura de que quieres ayudarnos. Para esta misión necesitarás esta mochila. ' +
			'¡Perfecto! Ahora lo que tendrás que hacer es guiarme por el bosque hasta cada una ' +
			'de las dificultades que puedas ver y buscar en la mochila la situación correcta. ' +
			'Cada vez que necesites una solución, podrás hacer clic en la mochila y escoger una de las soluciones.',
		buttonText: 'Jugar',
	},
	deck: [
		{
			id: 0,
			name: 'bolsa de basura',
			address: trashBag,
		},
		{
			id: 1,
			name: 'semillas',
			address: seeds,
		},
		{
			id: 2,
			name: 'señal de aviso',
			address: sign,
		},
		{
			id: 3,
			name: 'extintor',
			address: bucket,
		},
	],
	sprites: [
		{
			id: 0,
			name: 'basura',
			hover: false,
			indexExpression: 0,
			expressions: [
				{
					src: boyIdle,
					size: [2, 2],
					position: [-5, 1.2, 2.5],
					rotation: [0, Math.PI, 0],
					tilesHorizontal: 5,
					tilesVertical: 2,
					totalTiles: 10,
				},
				{
					src: boyPickingUp,
					size: [3, 2],
					position: [-4.2, 1.2, 2.5],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 1,
			name: 'arboles talados',
			hover: false,
			indexExpression: 0,
			expressions: [
				{
					src: girlIdle,
					size: [2, 2],
					position: [-7.5, 1.6, 1.5],
					rotation: [0, 0, 0],
					tilesHorizontal: 5,
					tilesVertical: 2,
					totalTiles: 10,
				},
				{
					src: girlSeeds,
					size: [2, 2],
					position: [-7.5, 1.6, 1.5],
					rotation: [0, 0.1, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 2,
			name: 'lago contaminado',
			hover: false,
			indexExpression: 0,
			expressions: [
				{
					src: girlIdle,
					size: [2, 2],
					position: [-2.5, 1.5, 0],
					rotation: [0, Math.PI, 0],
					tilesHorizontal: 5,
					tilesVertical: 2,
					totalTiles: 10,
				},
				{
					src: girlSignal,
					size: [4, 2],
					position: [0, 1.5, 0],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 3,
			name: 'fogata',
			hover: false,
			indexExpression: 0,
			expressions: [
				{
					src: boyIdle,
					size: [2, 2],
					position: [10.5, 1.5, 2.8],
					rotation: [0, Math.PI, 0],
					tilesHorizontal: 5,
					tilesVertical: 2,
					totalTiles: 10,
				},
				{
					src: boyBucket,
					size: [4, 2],
					position: [11.5, 1.5, 2.8],
					rotation: [0, 0, 0],
					tilesHorizontal: 5,
					tilesVertical: 4,
					totalTiles: 20,
				},
			],
		},
		{
			id: null,
			name: 'fire',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: campfire,
					size: [2, 2],
					position: [11.8, 1.5, 3],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: campfire,
					size: [0, 0],
					position: [11.8, 1.5, 3],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
	],
};

const cardComplete = [
	{ id: 0, complete: false },
	{ id: 1, complete: false },
	{ id: 2, complete: false },
	{ id: 3, complete: false },
];

export { data, cardComplete };
