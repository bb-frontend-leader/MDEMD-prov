import pia from '../../sprites/pia/idle.webp';
import teacher from '../../sprites/piasMistakes/teacherIdle.webp';

import eagleFSpeaking from '../../sprites/inTheClassroom/AguilaFHablando.png';
import eagleSpeaking from '../../sprites/inTheClassroom/AguilaHablando.png';
import eagleFIdle from '../../sprites/inTheClassroom/AguilaFIdle.png';
import eagleIdle from '../../sprites/inTheClassroom/AguilaIdle.png';

import rabbitFSpeaking from '../../sprites/inTheClassroom/ConejoFHablando.png';
import rabbitSpeaking from '../../sprites/inTheClassroom/ConejoHablando.png';
import rabbitFIdle from '../../sprites/inTheClassroom/ConejoFIdle.png';
import rabbitIdle from '../../sprites/inTheClassroom/ConejoIdle.png';

import monkeyFSpeaking from '../../sprites/inTheClassroom/MicoFHablando.png';
import monkeySpeaking from '../../sprites/inTheClassroom/MicoHablando.png';
import monkeyFIdle from '../../sprites/inTheClassroom/MicoFIdle.png';
import monkeyIdle from '../../sprites/inTheClassroom/MicoIdle.png';

import slothFSpeaking from '../../sprites/inTheClassroom/PerezosoFHablando.png';
import slothSpeaking from '../../sprites/inTheClassroom/PerezosoHablando.png';
import slothFIdle from '../../sprites/inTheClassroom/PerezosoFIdle.png';
import slothIdle from '../../sprites/inTheClassroom/PerezosoIdle.png';

import eagle from '../../sprites/inTheClassroom/faceStamps/eagle.png';
import eagleF from '../../sprites/inTheClassroom/faceStamps/eagleF.png';
import rabbit from '../../sprites/inTheClassroom/faceStamps/rabbit.png';
import rabbitF from '../../sprites/inTheClassroom/faceStamps/rabbitF.png';
import monkey from '../../sprites/inTheClassroom/faceStamps/monkey.png';
import monkeyF from '../../sprites/inTheClassroom/faceStamps/monkeyF.png';
import sloth from '../../sprites/inTheClassroom/faceStamps/sloth.png';
import slothF from '../../sprites/inTheClassroom/faceStamps/slothF.png';

const data = {
	instructions: {
		title: 'instrucciones',
		message:
			'Selecciona el orden en el que quieras los compañeros ' +
			'de clase de Pía digan las normas de convivencia en el ' +
			'salón de clase. Luego haz click sobre el compañero de clase ' +
			'que empiece a interrumpir para pedirles que se silencien.',
		buttonText: 'Jugar',
	},
	sprites: [
		{
			id: 0,
			name: 'andrea',
			indexExpression: 0,
			noise: false,
			complete: false,
			expressions: [
				{
					src: eagleFIdle,
					size: [4, 4],
					position: [2, 2, -2],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: eagleFSpeaking,
					size: [5, 4],
					position: [2, 2, -2],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 1,
			name: 'teodoro',
			indexExpression: 0,
			noise: false,
			complete: false,
			expressions: [
				{
					src: eagleIdle,
					size: [5, 5],
					position: [-1, 2, -2.2],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 12,
				},
				{
					src: eagleSpeaking,
					size: [5, 5],
					position: [-1, 2, -2.2],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 2,
					totalTiles: 8,
				},
			],
		},
		{
			id: 2,
			name: 'ana',
			indexExpression: 0,
			noise: false,
			complete: false,
			expressions: [
				{
					src: rabbitFIdle,
					size: [2, 2],
					position: [-12.5, 2.5, 3],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: rabbitFSpeaking,
					size: [2, 2],
					position: [-12.5, 2.5, 3],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 3,
			name: 'mateo',
			indexExpression: 0,
			noise: false,
			complete: false,
			expressions: [
				{
					src: rabbitIdle,
					size: [3, 2],
					position: [-14.5, 2.5, 3.2],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: rabbitSpeaking,
					size: [3, 2],
					position: [-14.5, 2.5, 3.2],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 4,
			name: 'laura',
			indexExpression: 0,
			noise: false,
			complete: false,
			expressions: [
				{
					src: monkeyFIdle,
					size: [4, 4],
					position: [-8, 2, -2],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: monkeyFSpeaking,
					size: [4, 4],
					position: [-8, 2, -2],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 5,
			name: 'manuel',
			indexExpression: 0,
			noise: false,
			complete: false,
			expressions: [
				{
					src: monkeyIdle,
					size: [4, 4],
					position: [-10.5, 2, -2.2],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 12,
				},
				{
					src: monkeySpeaking,
					size: [4, 4],
					position: [-10.5, 2, -2.2],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 6,
			name: 'lina',
			indexExpression: 0,
			noise: false,
			complete: false,
			expressions: [
				{
					src: slothFIdle,
					size: [3, 3],
					position: [-5, 2.5, 3],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: slothFSpeaking,
					size: [3, 3],
					position: [-5, 2.5, 3],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 7,
			name: 'jorge',
			indexExpression: 0,
			noise: false,
			complete: false,
			expressions: [
				{
					src: slothIdle,
					size: [3, 3],
					position: [-6.5, 2.5, 3.2],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: slothSpeaking,
					size: [3, 3],
					position: [-6.5, 2.5, 3.2],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 8,
			name: 'pia',
			indexExpression: 0,
			expressions: [
				{
					src: pia,
					size: [3, 3],
					position: [-16.4, 1, 3.9],
					rotation: [0, 0, 0],
					tilesHorizontal: 5,
					tilesVertical: 2,
					totalTiles: 9,
				},
				{
					src: pia,
					size: [2, 2],
					position: [-18, 2.5, 2.2],
					rotation: [0, 0, 0],
					tilesHorizontal: 5,
					tilesVertical: 2,
					totalTiles: 9,
				},
			],
		},
		{
			id: 9,
			name: 'profesora',
			indexExpression: 0,
			expressions: [
				{
					src: teacher,
					size: [5, 5],
					position: [-19, 2, 4],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: teacher,
					size: [4, 4],
					position: [-19, 2.5, 2],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
	],
	speech: [
		{
			img: eagleF,
			rule: 'Cuando una persona necesite ayuda debemos ofrecerle nuestro apoyo',
			position: [0, 2, 1.5],
		},
		{
			img: eagle,
			rule: 'Debemos cumplir con nuestras responsabilidades escolares',
			position: [-2, 2, 1.5],
		},
		{
			img: rabbitF,
			rule: 'Una regla muy importante es saludar a las personas cuando llegamos',
			position: [-12, 2, 6],
		},
		{
			img: rabbit,
			rule: 'Es bueno despedirse y desear buena suerte a los demás cuando nos vamos',
			position: [-13.5, 2, 6],
		},
		{
			img: monkeyF,
			rule: 'Es importante escuchar a los demás mientras hablan',
			position: [-8.5, 2.3, 3],
		},
		{
			img: monkey,
			rule: 'Debemos hacer silencio en el salón de clase',
			position: [-10, 2.3, 3],
		},
		{
			img: slothF,
			rule: 'Todos debemos hacer respetar a los mayores',
			position: [-5.5, 2, 6.2],
		},
		{
			img: sloth,
			rule: 'Cada persona debe cuidar de sí misma y de los otros',
			position: [-7, 2, 6.2],
		},
	],
};

export { data };
