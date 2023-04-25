import right from '../../sprites/pia/walking.webp';
import bunny from '../../sprites/evaluative_competence/sore_rabbit.webp';
import goodBunny from '../../sprites/evaluative_competence/good_rabbit.webp';

import venado from '../../sprites/evaluative_competence/venado.webp';

import tapir from '../../sprites/evaluative_competence/sore_tapir.webp';
import goodTapir from '../../sprites/evaluative_competence/good_tapir.png';

import bird from '../../sprites/evaluative_competence/birds_fighting.webp';
import goodBird from '../../sprites/evaluative_competence/birds_talking.png';

import traffic_light from '../../sprites/evaluative_competence/traffic_light.webp';

import situation1Question from '../../assets/img/M1CE/situation_1/question.png';
import situation1Answer1 from '../../assets/img/M1CE/situation_1/answer_1.png';
import situation1Answer2 from '../../assets/img/M1CE/situation_1/answer_2.png';
import situation1Answer3 from '../../assets/img/M1CE/situation_1/answer_3.png';

import situation2Question from '../../assets/img/M1CE/situation_2/question.png';
import situation2Answer1 from '../../assets/img/M1CE/situation_2/answer_1.png';
import situation2Answer2 from '../../assets/img/M1CE/situation_2/answer_2.png';
import situation2Answer3 from '../../assets/img/M1CE/situation_2/answer_3.png';

import situation3Question from '../../assets/img/M1CE/situation_3/question.png';
import situation3Answer1 from '../../assets/img/M1CE/situation_3/answer_1.png';
import situation3Answer2 from '../../assets/img/M1CE/situation_3/answer_2.png';
import situation3Answer3 from '../../assets/img/M1CE/situation_3/answer_3.png';

import situation4Question from '../../assets/img/M1CE/situation_4/question.png';
import situation4Answer1 from '../../assets/img/M1CE/situation_4/answer_1.png';
import situation4Answer2 from '../../assets/img/M1CE/situation_4/answer_2.png';
import situation4Answer3 from '../../assets/img/M1CE/situation_4/answer_3.png';

import situation5Question from '../../assets/img/M1CE/situation_5/question.png';
import situation5Answer1 from '../../assets/img/M1CE/situation_5/answer_1.png';
import situation5Answer2 from '../../assets/img/M1CE/situation_5/answer_2.png';
import situation5Answer3 from '../../assets/img/M1CE/situation_5/answer_3.png';

const data = {
	instructions: {
		title: 'instrucciones',
		message: `En este juego tienes que ayudar a Pia a superar los obstáculos  en su camino. 
    Para ello, cada vez que Pia se detenga, tienes que hacer clic en la solución que creas más conveniente`,
		buttonText: 'Jugar',
	},
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
	],
	obsSprites: [
		{
			id: 0,
			name: 'bunny',
			indexExpression: 0,
			expressions: [
				{
					src: bunny,
					size: [1.4, 1.2],
					position: [-11.7, 8.4, 7.5],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: goodBunny,
					size: [1, 1.2],
					position: [-11.7, 8.4, 7.5],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 1,
			name: 'venado',
			indexExpression: 0,
			expressions: [
				{
					src: venado,
					size: [2, 2.5],
					position: [-6, 9, 7.5],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: venado,
					size: [2, 2.5],
					position: [-6, 9, 7.5],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 2,
			name: 'tapir',
			indexExpression: 0,
			expressions: [
				{
					src: tapir,
					size: [2, 1.5],
					position: [-1, 8.5, 7.5],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: goodTapir,
					size: [2, 1.5],
					position: [-1, 8.5, 7.5],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 3,
			name: 'bird',
			indexExpression: 0,
			expressions: [
				{
					src: bird,
					size: [2.5, 1.9],
					position: [4, 9, 7.5],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: goodBird,
					size: [2.8, 1.9],
					position: [4, 8.6, 7.5],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 4,
			name: 'traffic_light',
			indexExpression: 1,
			expressions: [
				{
					src: traffic_light,
					size: [0.8, 3],
					position: [9, 9.2, 7.5],
					rotation: [0, 0, 0],
					tilesHorizontal: 10,
					tilesVertical: 3,
					totalTiles: 10,
				},
				{
					src: traffic_light,
					size: [0.8, 3],
					position: [9, 9.2, 7.5],
					rotation: [0, 0, 0],
					tilesHorizontal: 10,
					tilesVertical: 3,
					totalTiles: 10,
				},
			],
		},
	],
	steps: [
		{
			toX: -18,
			toY: 8.45,
			duration: 50,
			indexExpresion: 0,
			stop: true,
		},
		{
			toX: -13,
			toY: 8.45,
			duration: 3000,
		},
		{
			toX: -13,
			toY: 8.45,
			duration: 1000,
			stop: true,
			questionId: 0,
		},
		{
			toX: -13,
			toY: 8.45,
			duration: 1500,
			questionId: null,
		},
		{
			toX: -8,
			toY: 8.45,
			duration: 3000,
		},
		{
			toX: -8,
			toY: 8.45,
			duration: 1000,
			stop: true,
			questionId: 1,
		},
		{
			toX: -8,
			toY: 8.45,
			duration: 1500,
			questionId: null,
		},
		{
			toX: -3,
			toY: 8.45,
			duration: 3000,
		},
		{
			toX: -3,
			toY: 8.45,
			duration: 1000,
			stop: true,
			questionId: 2,
		},
		{
			toX: -3,
			toY: 8.45,
			duration: 1500,
			questionId: null,
		},
		{
			toX: 2,
			toY: 8.45,
			duration: 3000,
		},
		{
			toX: 2,
			toY: 8.45,
			duration: 1000,
			stop: true,
			questionId: 3,
		},
		{
			toX: 2,
			toY: 8.45,
			duration: 1500,
			questionId: null,
		},
		{
			toX: 7,
			toY: 8.45,
			duration: 3000,
		},
		{
			toX: 7,
			toY: 8.45,
			duration: 1000,
			stop: true,
			questionId: 4,
		},
		{
			toX: 7,
			toY: 8.45,
			duration: 1500,
			questionId: null,
		},
	],
	situations: [
		{
			question: situation1Question,
			description: `¿Qué debería hacer Pía?`,
			options: [
				{
					image: situation1Answer1,
					isRight: false,
					description: 'Pía responde: no es mi problema.',
				},
				{
					image: situation1Answer2,
					isRight: false,
					decripcion: 'Pía se rie.',
				},
				{
					image: situation1Answer3,
					isRight: true,
					description: 'Pía ayuda al conejito.',
				},
			],
		},
		{
			question: situation2Question,
			description: `¿Cuál será la expresión en el rostro del ciervo si está triste?`,
			options: [
				{
					image: situation2Answer1,
					isRight: false,
					decripcion: 'Venado contento.',
				},

				{
					image: situation2Answer2,
					isRight: true,
					decripcion: 'Venano triste.',
				},
				{
					image: situation2Answer3,
					isRight: false,
					decripcion: 'Venado furioso.',
				},
			],
		},
		{
			question: situation3Question,
			description: `¿Qué debería hacer Pía?
      `,
			options: [
				{
					image: situation3Answer1,
					isRight: false,
					decripcion: 'Pía salta en el charco.',
				},

				{
					image: situation3Answer2,
					isRight: false,
					decripcion: 'Pía los salpica de agua.',
				},
				{
					image: situation3Answer3,
					isRight: true,
					decripcion: 'Pía cruza con cuidado.',
				},
			],
		},
		{
			question: situation4Question,
			description: `¿Cómo deberían actuar después de lo que pasó?`,
			options: [
				{
					image: situation4Answer1,
					isRight: false,
					decripcion: 'Seguir peleando.',
				},

				{
					image: situation4Answer2,
					isRight: true,
					decripcion: 'Pedir disculpas.',
				},
				{
					image: situation4Answer3,
					isRight: false,
					decripcion: 'Insultarse mutuamente.',
				},
			],
		},
		{
			question: situation5Question,
			description: `¿Qué consecuencias negativas podrían ocurrir?`,
			options: [
				{
					image: situation5Answer1,
					isRight: false,
					decripcion: 'Pía cruza y los auto pitan.',
				},

				{
					image: situation5Answer2,
					isRight: false,
					decripcion: 'Pía casi es atropellada.',
				},
				{
					image: situation5Answer3,
					isRight: true,
					decripcion: 'Pía es golpeada por un auto.',
				},
			],
		},
	],
};

export { data };
