import idle from '../../sprites/pia/walkIdle.webp';
import right from '../../sprites/pia/walking.webp';
import piaBoat from '../../sprites/pia/boat.webp';
import piaCampfire from '../../sprites/pia/campfire.webp';
import piaRope from '../../sprites/pia/rope.webp';
import piaRiver from '../../sprites/pia/river.webp';
import piaCave from '../../sprites/pia/cave.webp';

import boat from '../../sprites/piasEscape/boat.webp';
import campfire from '../../sprites/piasEscape/campfire.png';
import log from '../../sprites/piasEscape/log.png';
import rope from '../../sprites/piasEscape/rope.png';
import cave from '../../sprites/piasEscape/cave.webp';

import boatSpeech from '../../sprites/piasEscape/DialogosBarco.png';
import campfireSpeech from '../../sprites/piasEscape/DialogosFogata.png';
import logSpeech from '../../sprites/piasEscape/DialogosTronco.png';
import ropeSpeech from '../../sprites/piasEscape/DialogosCuerda.png';
import caveSpeech from '../../sprites/piasEscape/DialogosCueva.png';

import fire from '../../sprites/campfire/campfire.webp';
import rain from '../../sprites/rain/rain.webp';

const data = {
	instructions: {
		title: 'instrucciones',
		message: `En este juego tienes que ayudar a Pia a superar los obstáculos  en su camino. 
    Para ello, cada vez que Pia se detenga, tienes que hacer clic en la solución que creas más conveniente`,
		buttonText: 'Jugar',
	},
	deck: [
		{
			id: 0,
			name: 'bote',
			address: boat,
			complete: 0,
		},
		{
			id: 1,
			name: 'fogata',
			address: campfire,
			complete: 0,
		},
		{
			id: 2,
			name: 'tronco',
			address: log,
			complete: 0,
		},
		{
			id: 3,
			name: 'soga',
			address: rope,
			complete: 0,
		},
		{
			id: 4,
			name: 'cueva',
			address: cave,
			complete: 0,
		},
	],
	speech: [
		{
			id: 0,
			text: boatSpeech,
			position: [8.8, 12, 10],
		},
		{
			id: 1,
			text: campfireSpeech,
			position: [23, 12.5, 10],
		},
		{
			id: 2,
			text: logSpeech,
			position: [38, 15.5, 10],
		},
		{
			id: 3,
			text: ropeSpeech,
			position: [59, 15, 10],
		},
		{
			id: 4,
			text: caveSpeech,
			position: [82, 12.4, 10],
		},
	],
	sprites: [
		{
			id: 0,
			name: 'right',
			expression: {
				src: right,
				size: [1, 2],
				position: [0, 2, 0],
				rotation: [0, 0, 0],
				tilesHorizontal: 4,
				tilesVertical: 4,
				totalTiles: 16,
			},
		},
		{
			id: 1,
			name: 'bote',
			expression: {
				src: piaBoat,
				size: [2.5, 2.5],
				position: [6, 10, 10],
				rotation: [0, 0, 0],
				tilesHorizontal: 4,
				tilesVertical: 4,
				totalTiles: 16,
			},
		},
		{
			id: 2,
			name: 'fogata',
			expression: {
				src: piaCampfire,
				size: [1.3, 2],
				position: [0, 8, 0],
				rotation: [0, 0, 0],
				tilesHorizontal: 8,
				tilesVertical: 4,
				totalTiles: 28,
				frames: 18,
			},
		},
		{
			id: 3,
			name: 'tronco',
			expression: {
				src: piaRiver,
				size: [1, 2],
				position: [0, 8, 0],
				rotation: [0, 0, 0],
				tilesHorizontal: 4,
				tilesVertical: 4,
				totalTiles: 16,
			},
		},
		{
			id: 4,
			name: 'soga',
			expression: {
				src: piaRope,
				size: [2, 1.3],
				position: [0, 8, 0],
				rotation: [0, 0, 0],
				tilesHorizontal: 4,
				tilesVertical: 4,
				totalTiles: 16,
			},
		},
		{
			id: 5,
			name: 'cueva',
			expression: {
				src: piaCave,
				size: [4, 3],
				position: [0, 8, 0],
				rotation: [0, 0, 0],
				tilesHorizontal: 4,
				tilesVertical: 4,
				totalTiles: 16,
			},
		},
		{
			id: 6,
			name: 'idle',
			expression: {
				src: idle,
				size: [1, 2],
				position: [0, 0, 0],
				rotation: [0, 0, 0],
				tilesHorizontal: 4,
				tilesVertical: 4,
				totalTiles: 16,
			},
		},
	],
	obsSprites: [
		{
			id: 0,
			name: 'Fire',
			indexExpression: 0,
			expressions: [
				{
					src: fire,
					size: [0, 0],
					position: [24, 12, 10],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: fire,
					size: [2, 2],
					position: [23.6, 11.6, 8.5],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 1,
			name: 'rain',
			indexExpression: 0,
			expressions: [
				{
					src: rain,
					size: [5, 5],
					position: [83, 15, 10],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 5,
					totalTiles: 20,
				},
				{
					src: rain,
					size: [5, 5],
					position: [83, 15, 10],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 5,
					totalTiles: 20,
				},
			],
		},
		{
			id: 2,
			name: 'rain',
			indexExpression: 0,
			expressions: [
				{
					src: rain,
					size: [5, 5],
					position: [80, 15, 10],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 5,
					totalTiles: 20,
				},
				{
					src: rain,
					size: [0, 0],
					position: [83, 15, 10],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 5,
					totalTiles: 20,
				},
			],
		},
	],
	steps: [
		{
			toX: -3,
			toY: 10.5,
			duration: 50,
			indexExpresion: 0,
			stop: true,
		},
		{
			toX: 5.1,
			toY: 10.5,
			duration: 3000,
			stop: true,
			questionId: 0,
		},
		{
			toX: 5.6,
			toY: 10.5,
			duration: 50,
			indexExpresion: 1,
		},
		{
			toX: 12.8,
			toY: 10.5,
			duration: 3000,
		},
		{
			toX: 13.5,
			toY: 10.5,
			duration: 50,
			indexExpresion: 0,
		},
		{
			toX: 19.3,
			toY: 10.6,
			duration: 3000,
		},
		{
			toX: 19.6,
			toY: 11.2,
			duration: 500,
			stop: true,
			questionId: 1,
			showObject: 'Fire',
		},
		{
			toX: 22.7,
			toY: 11.5,
			duration: 3000,
			indexExpresion: 2,
		},
		{
			toX: 22.7,
			toY: 11.5,
			duration: 4000,
			indexExpresion: 0,
			showObject: '',
		},
		{
			toX: 26.8,
			toY: 11.9,
			duration: 3000,
		},
		{
			toX: 27.2,
			toY: 11.55,
			duration: 500,
		},
		{
			toX: 30.2,
			toY: 11.6,
			duration: 2000,
		},
		{
			toX: 34.5,
			toY: 14.5,
			duration: 3000,
			stop: true,
			questionId: 2,
			showObject: 'LogBridge',
		},
		{
			toX: 35.1,
			toY: 15.1,
			duration: 500,
			indexExpresion: 3,
		},
		{
			toX: 41.6,
			toY: 15.6,
			duration: 3000,
			indexExpresion: 0,
		},
		{
			toX: 43.3,
			toY: 15,
			duration: 1000,
		},
		{
			toX: 45.5,
			toY: 16.55,
			duration: 1000,
		},
		{
			toX: 48.5,
			toY: 17,
			duration: 2000,
		},
		{
			toX: 53,
			toY: 16.95,
			duration: 3000,
		},
		{
			toX: 55.8,
			toY: 16.1,
			duration: 3000,
		},
		{
			toX: 55.9,
			toY: 16.1,
			duration: 500,
			stop: true,
			questionId: 3,
			showObject: 'Rope',
		},
		{
			toX: 55.9,
			toY: 16.1,
			duration: 500,
		},
		{
			toX: 56.5,
			toY: 15.1,
			duration: 50,
			indexExpresion: 4,
		},
		{
			toX: 58.5,
			toY: 14.1,
			duration: 1000,
		},
		{
			toX: 61,
			toY: 13.3,
			duration: 1000,
		},
		{
			toX: 63,
			toY: 13,
			duration: 1000,
			indexExpresion: 0,
		},
		{
			toX: 64,
			toY: 13.8,
			duration: 500,
		},
		{
			toX: 75.5,
			toY: 11,
			duration: 3000,
		},
		{
			toX: 78.5,
			toY: 10.9,
			duration: 2000,
			stop: true,
			questionId: 4,
		},
		{
			toX: 81.8,
			toY: 10.8,
			duration: 2000,
			indexExpresion: 5,
		},
		{
			toX: 81.9,
			toY: 11.4,
			duration: 10,
		},
		{
			toX: 81.9,
			toY: 11.4,
			duration: 3000,
		},
	],
};

export { data };
