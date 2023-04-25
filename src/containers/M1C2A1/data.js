import * as Mathf from '../../util/Mathf';
import idleBird from '../../sprites/bird/idle.webp';
import happyBird from '../../sprites/bird/happy.webp';
import idlePia from '../../sprites/pia/idle.webp';
import happyPia from '../../sprites/pia/happy.webp';
import idleTortoise from '../../sprites/tortoise/idle.webp';
import happyTortoise from '../../sprites/tortoise/happy.webp';

import sewer from '../../sprites/cards/cityAndForest/CYBSewer.png';
import smoke from '../../sprites/cards/cityAndForest/CYBSmoke.png';
import trash from '../../sprites/cards/cityAndForest/CYBTrash.png';
import chimney from '../../sprites/cards/cityAndForest/CYBChimney.png';

const data = {
	instructions: {
		title: 'Instrucciones',
		message:
			'¡Hola! !Estoy segura de que podrías ayudarnos! Mira las cartas que hay  ' +
			'a un lado de la pantalla. Si haces click en una de ellas, te mostrará ' +
			'una fuente de contaminación que está dañando el bosque. Mírala ' +
			'atentamente y luego búscala en la ciudad o en el bosque. Cuando la ' +
			'encuentres, haz click 👆🏼 en ella y desaparecerá.',
		buttonText: 'Jugar',
	},
	decks: [
		{
			id: 0,
			name: 'sewer',
			address: sewer,
		},
		{
			id: 1,
			name: 'smoke',
			address: smoke,
		},
		{
			id: 2,
			name: 'trash',
			address: trash,
		},
		{
			id: 3,
			name: 'chimney',
			address: chimney,
		},
	],
	sprites: [
		{
			name: 'bird',
			expressions: [
				{
					src: idleBird,
					size: [2, 2],
					position: [8, 0.6, 40],
					rotation: [0, 60 * Mathf.Deg2rad, 0],
					tilesHorizontal: 4,
					tilesVertical: 2,
					totalTiles: 8,
				},
				{
					src: happyBird,
					size: [2, 2],
					position: [8, 0.6, 40],
					rotation: [0, 50 * Mathf.Deg2rad, 0],
					tilesHorizontal: 4,
					tilesVertical: 2,
					totalTiles: 8,
				},
			],
		},
		{
			name: 'pia',
			expressions: [
				{
					src: idlePia,
					size: [2, 2],
					position: [7, 0.3, 42],
					rotation: [0, 50 * Mathf.Deg2rad, 0],
					tilesHorizontal: 5,
					tilesVertical: 2,
					totalTiles: 9,
				},
				{
					src: happyPia,
					size: [1.5, 1.8],
					position: [7, 0.3, 42],
					rotation: [0, 50 * Mathf.Deg2rad, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 10,
				},
			],
		},
		{
			name: 'tortoise',
			expressions: [
				{
					src: idleTortoise,
					size: [2, 2],
					position: [7.5, 0.1, 43],
					rotation: [0, 50 * Mathf.Deg2rad, 0],
					tilesHorizontal: 4,
					tilesVertical: 2,
					totalTiles: 8,
				},
				{
					src: happyTortoise,
					size: [2, 2],
					position: [7.5, 0.1, 43],
					rotation: [0, 50 * Mathf.Deg2rad, 0],
					tilesHorizontal: 4,
					tilesVertical: 2,
					totalTiles: 8,
				},
			],
		},
	],
};

const cardComplete = [
	{ id: 0, name: 'TUBOS DE DESAGÜE', complete: false },
	{ id: 1, name: 'HUMO DE CARROS', complete: false },
	{ id: 2, name: 'BASURA', complete: false },
	{ id: 3, name: 'HUMO DE FABRICA', complete: false },
];

export { data, cardComplete };
