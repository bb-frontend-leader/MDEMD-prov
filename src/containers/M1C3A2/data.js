import eagle from '../../sprites/bird/idle.webp';
import rabbit from '../../sprites/bunny/idle.png';
import monkey from '../../sprites/monkey/speaking.png';
import mom from '../../sprites/mom/sitting.webp';
import teacher from '../../sprites/teacher/sitting.png';

import rabbitGM from '../../sprites/IdealWorkingGroup/rabbitSpeech/rabbitGM.png';
import rabbitBM from '../../sprites/IdealWorkingGroup/rabbitSpeech/rabbitBM.png';
import eagleGM from '../../sprites/IdealWorkingGroup/eagleSpeech/eagleGM.png';
import eagleBM from '../../sprites/IdealWorkingGroup/eagleSpeech/eagleBM.png';
import monkeyGM from '../../sprites/IdealWorkingGroup/monkeySpeech/monkeyGM.png';
import monkeyBM from '../../sprites/IdealWorkingGroup/monkeySpeech/monkeyBM.png';
import momGM from '../../sprites/IdealWorkingGroup/momSpeech/momGM.png';
import momBM from '../../sprites/IdealWorkingGroup/momSpeech/momBM.png';
import teacherGM from '../../sprites/IdealWorkingGroup/teacherSpeech/teacherGM.png';
import teacherBM from '../../sprites/IdealWorkingGroup/teacherSpeech/teacherBM.png';

const data = {
	instructions: {
		title: 'instrucciones',
		message:
			'Selecciona cada acción y ponla en ' +
			'su caja correspondiente, si es buena ' +
			'o mala para la convivencia en el bosque.',
		buttonText: 'Jugar',
	},
	speechImages: [
		{ src: teacherGM, answer: true },
		{ src: teacherBM, answer: false },
		{ src: rabbitGM, answer: true },
		{ src: rabbitBM, answer: false },
		{ src: momGM, answer: true },
		{ src: momBM, answer: false },
		{ src: monkeyGM, answer: true },
		{ src: monkeyBM, answer: false },
		{ src: eagleGM, answer: true },
		{ src: eagleBM, answer: false },
	],
	sprites: [
		{
			id: 5,
			name: 'conejo',
			indexExpression: 0,
			expression: [
				{
					src: rabbit,
					size: [8, 8],
					position: [-8, 3.1, -3],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 10,
				},
			],
		},
		{
			id: 3,
			name: 'mico',
			indexExpression: 0,
			expression: [
				{
					src: monkey,
					size: [8, 8],
					position: [12, 3.2, -6],
					rotation: [0, Math.PI, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 4,
			name: 'aguila',
			indexExpression: 0,
			expression: [
				{
					src: eagle,
					size: [8, 8],
					position: [18, 3, -3],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 2,
					totalTiles: 8,
				},
			],
		},
		{
			id: 1,
			name: 'mama',
			indexExpression: 0,
			expression: [
				{
					src: mom,
					size: [8, 8],
					position: [0, 5, -5],
					rotation: [0, Math.PI, 0],
					tilesHorizontal: 5,
					tilesVertical: 3,
					totalTiles: 12,
				},
			],
		},
		{
			id: 6,
			name: 'maestra',
			indexExpression: 0,
			expression: [
				{
					src: teacher,
					size: [8, 8],
					position: [-13, 5, 0],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
	],
};

export { data };
