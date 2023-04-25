import helechosCompleto from '../../sprites/apologiesAndGratitudes/cuadrosCompletos-01.png';
import riosCompleto from '../../sprites/apologiesAndGratitudes/cuadrosCompletos-02.png';
import lagunasCompleto from '../../sprites/apologiesAndGratitudes/cuadrosCompletos-03.png';
import cascadasCompleto from '../../sprites/apologiesAndGratitudes/cuadrosCompletos-04.png';
import rocasCompleto from '../../sprites/apologiesAndGratitudes/cuadrosCompletos-05.png';
import frailejonesCompleto from '../../sprites/apologiesAndGratitudes/cuadrosCompletos-06.png';

import helechosOne from '../../sprites/apologiesAndGratitudes/Helechos/01.png';
import helechosTwo from '../../sprites/apologiesAndGratitudes/Helechos/02.png';
import helechosThree from '../../sprites/apologiesAndGratitudes/Helechos/03.png';
import helechosFour from '../../sprites/apologiesAndGratitudes/Helechos/04.png';
import helechosFive from '../../sprites/apologiesAndGratitudes/Helechos/05.png';

import riosOne from '../../sprites/apologiesAndGratitudes/Rios/01.png';
import riosTwo from '../../sprites/apologiesAndGratitudes/Rios/02.png';
import riosThree from '../../sprites/apologiesAndGratitudes/Rios/03.png';
import riosFour from '../../sprites/apologiesAndGratitudes/Rios/04.png';
import riosFive from '../../sprites/apologiesAndGratitudes/Rios/05.png';

import lagunasOne from '../../sprites/apologiesAndGratitudes/Laguna/01.png';
import lagunasTwo from '../../sprites/apologiesAndGratitudes/Laguna/02.png';
import lagunasThree from '../../sprites/apologiesAndGratitudes/Laguna/03.png';
import lagunasFour from '../../sprites/apologiesAndGratitudes/Laguna/04.png';
import lagunasFive from '../../sprites/apologiesAndGratitudes/Laguna/05.png';

import cascadasOne from '../../sprites/apologiesAndGratitudes/Cascada/01.png';
import cascadasTwo from '../../sprites/apologiesAndGratitudes/Cascada/02.png';
import cascadasThree from '../../sprites/apologiesAndGratitudes/Cascada/03.png';
import cascadasFour from '../../sprites/apologiesAndGratitudes/Cascada/04.png';
import cascadasFive from '../../sprites/apologiesAndGratitudes/Cascada/05.png';

import rocasOne from '../../sprites/apologiesAndGratitudes/Rocas/01.png';
import rocasTwo from '../../sprites/apologiesAndGratitudes/Rocas/02.png';
import rocasThree from '../../sprites/apologiesAndGratitudes/Rocas/03.png';
import rocasFour from '../../sprites/apologiesAndGratitudes/Rocas/04.png';
import rocasFive from '../../sprites/apologiesAndGratitudes/Rocas/05.png';

import frailejonesOne from '../../sprites/apologiesAndGratitudes/Frailejones/01.png';
import frailejonesTwo from '../../sprites/apologiesAndGratitudes/Frailejones/02.png';
import frailejonesThree from '../../sprites/apologiesAndGratitudes/Frailejones/03.png';
import frailejonesFour from '../../sprites/apologiesAndGratitudes/Frailejones/04.png';
import frailejonesFive from '../../sprites/apologiesAndGratitudes/Frailejones/05.png';

import pia from '../../sprites/pia/computer.webp';
import eagle from '../../sprites/bird/happy.webp';
import monkey from '../../sprites/monkey/idle.png';
import teacher from '../../sprites/piasMistakes/teacherIdle.webp';
import rabbit from '../../sprites/piasMistakes/rabbitCelebrate.webp';
import mom from '../../sprites/mom/happy.webp';
import dad from '../../sprites/dad/happy.webp';

import teacherBubble from '../../sprites/apologiesAndGratitudes/Agradecimientos/GLOBOPROFESORA.png';
import rabbitBubble from '../../sprites/apologiesAndGratitudes/Agradecimientos/GLOBOCONEJO.png';
import monkeyBubble from '../../sprites/apologiesAndGratitudes/Agradecimientos/GLOBOMICO.png';
import momBubble from '../../sprites/apologiesAndGratitudes/Agradecimientos/GLOBOMAMA.png';
import dadBubble from '../../sprites/apologiesAndGratitudes/Agradecimientos/GLOBOPAPA.png';
import eagleBubble from '../../sprites/apologiesAndGratitudes/Agradecimientos/GLOBOAGUILA.png';

const data = {
	instructions: {
		title: 'instrucciones',
		message:
			'Ayúdale a Pía a armar el rompecabezas; ' +
			'escoge una zona y ármala; arrastra las ' +
			'piezas a su espacio correspondiente; cada ' +
			'vez que completes una zona, Pía recibirá un agradecimiento',
		buttonText: 'Jugar',
	},
	descriptionText: {
		text: 'Arrastra la burbuja de texto hasta la canasta',
	},
	deck: [
		{
			id: 0,
			name: 'helechosCompleto',
			path: helechosCompleto,
		},
		{
			id: 1,
			name: 'lagunasCompleto',
			path: lagunasCompleto,
		},
		{
			id: 2,
			name: 'riosCompleto',
			path: riosCompleto,
		},
		{
			id: 3,
			name: 'cascadasCompleto',
			path: cascadasCompleto,
		},
		{
			id: 4,
			name: 'rocasCompleto',
			path: rocasCompleto,
		},
		{
			id: 5,
			name: 'frailejonesCompleto',
			path: frailejonesCompleto,
		},
	],
	jigsaws: [
		{
			id: 0,
			name: 'helechos',
			pieces: [
				{
					path: helechosOne,
				},
				{
					path: helechosTwo,
				},
				{
					path: helechosThree,
				},
				{
					path: helechosFour,
				},
				{
					path: helechosFive,
				},
			],
		},
		{
			id: 1,
			name: 'rios',
			pieces: [
				{
					path: riosOne,
				},
				{
					path: riosTwo,
				},
				{
					path: riosThree,
				},
				{
					path: riosFour,
				},
				{
					path: riosFive,
				},
			],
		},
		{
			id: 2,
			name: 'lagunas',
			pieces: [
				{
					path: lagunasOne,
				},
				{
					path: lagunasTwo,
				},
				{
					path: lagunasThree,
				},
				{
					path: lagunasFour,
				},
				{
					path: lagunasFive,
				},
			],
		},
		{
			id: 3,
			name: 'cascadas',
			pieces: [
				{
					path: cascadasOne,
				},
				{
					path: cascadasTwo,
				},
				{
					path: cascadasThree,
				},
				{
					path: cascadasFour,
				},
				{
					path: cascadasFive,
				},
			],
		},
		{
			id: 4,
			name: 'rocas',
			pieces: [
				{
					path: rocasOne,
				},
				{
					path: rocasTwo,
				},
				{
					path: rocasThree,
				},
				{
					path: rocasFour,
				},
				{
					path: rocasFive,
				},
			],
		},
		{
			id: 5,
			name: 'frailejones',
			pieces: [
				{
					path: frailejonesOne,
				},
				{
					path: frailejonesTwo,
				},
				{
					path: frailejonesThree,
				},
				{
					path: frailejonesFour,
				},
				{
					path: frailejonesFive,
				},
			],
		},
	],
	sprites: [
		{
			id: 5,
			name: 'conejo',
			expression: {
				src: rabbit,
				size: [8, 8],
				position: [12, 5, -2],
				rotation: [0, Math.PI, 0],
				tilesHorizontal: 4,
				tilesVertical: 3,
				totalTiles: 10,
			},
		},
		{
			id: 3,
			name: 'mico',
			expression: {
				src: monkey,
				size: [8, 8],
				position: [12, 5, -2],
				rotation: [0, 0, 0],
				tilesHorizontal: 4,
				tilesVertical: 3,
				totalTiles: 12,
			},
		},
		{
			id: 4,
			name: 'aguila',
			expression: {
				src: eagle,
				size: [8, 8],
				position: [12, 5, -2],
				rotation: [0, 0, 0],
				tilesHorizontal: 4,
				tilesVertical: 2,
				totalTiles: 8,
			},
		},
		{
			id: 1,
			name: 'mama',
			expression: {
				src: mom,
				size: [8, 8],
				position: [12, 5, -2],
				rotation: [0, Math.PI, 0],
				tilesHorizontal: 4,
				tilesVertical: 3,
				totalTiles: 10,
			},
		},
		{
			id: 6,
			name: 'maestra',
			expression: {
				src: teacher,
				size: [8, 8],
				position: [12, 5, -2],
				rotation: [0, Math.PI, 0],
				tilesHorizontal: 4,
				tilesVertical: 4,
				totalTiles: 16,
			},
		},
		{
			id: 2,
			name: 'papa',
			expression: {
				src: dad,
				size: [8, 8],
				position: [12, 5, -2],
				rotation: [0, Math.PI, 0],
				tilesHorizontal: 5,
				tilesVertical: 3,
				totalTiles: 12,
			},
		},
		{
			id: null,
			name: 'pia',
			expression: [
				{
					src: pia,
					size: [6, 6],
					position: [-10.7, 3.8, -2.1],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 10,
				},
			],
		},
	],
	speechBubbles: [
		{
			path: rabbitBubble,
		},
		{
			path: monkeyBubble,
		},
		{
			path: eagleBubble,
		},
		{
			path: momBubble,
		},
		{
			path: teacherBubble,
		},
		{
			path: dadBubble,
		},
	],
	positions: [
		[-0.3, 10.8, 0],
		[-3, 13.4, 0],
		[2.35, 13.4, 0],
		[-3, 8.2, 0],
		[2.35, 8.2, 0],
	],
	pieceModels: [
		{
			path: '/models/jigsaw/center.glb',
			geometry: 'Pieza_Centro',
			material: 'Pieza Centro',
		},
		{
			path: '/models/jigsaw/upperLeft.glb',
			geometry: 'Pieza_Izquierda_Arriba',
			material: 'Pieza Izquierda Arriba',
		},
		{
			path: '/models/jigsaw/upperRigth.glb',
			geometry: 'Pieza_Derecha_Arriba',
			material: 'Pieza Derecha Arriba',
		},
		{
			path: '/models/jigsaw/downLeft.glb',
			geometry: 'Pieza_Izquierda_Abajo',
			material: 'Pieza Izquierda Abajo',
		},
		{
			path: '/models/jigsaw/downRigth.glb',
			geometry: 'Pieza_Derecha_Abajo',
			material: 'Pieza Derecha Abajo',
		},
	],
};

const jigsawComplete = [
	{ id: 0, complete: false },
	{ id: 1, complete: false },
	{ id: 2, complete: false },
	{ id: 3, complete: false },
	{ id: 4, complete: false },
	{ id: 5, complete: false },
];

export { data, jigsawComplete };
