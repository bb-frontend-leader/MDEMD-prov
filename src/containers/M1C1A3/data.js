import starving from '../../sprites/dog/starving.webp';
import eating from '../../sprites/dog/eating.webp';
import trapped from '../../sprites/tortoise/trapped.webp';
import free from '../../sprites/tortoise/free_2.png';
import idleTortoise from '../../sprites/tortoise/idle.webp';
import lonely from '../../sprites/bunny/lonely.webp';
import bunnies from '../../sprites/bunny/bunnies.webp';
import idleFox from '../../sprites/fox/idle.webp';
import burrow from '../../sprites/fox/burrow.webp';
import girlIdle from '../../sprites/children/girl_idle.webp';
import girlHappy from '../../sprites/children/girl_happy.webp';
import girlPoiting from '../../sprites/children/girlPoiting.webp';
import boyIdle from '../../sprites/children/boy_idle.webp';
import boyPoiting from '../../sprites/children/boy_poiting.webp';
import boyScout from '../../sprites/boyScout.webp';
import girlScout from '../../sprites/girlScout.webp';

import food from '../../sprites/cards/caringAnimals/CAAComidaPerro.png';
import rabbits from '../../sprites/cards/caringAnimals/CAAPapasConejo.png';
import scisors from '../../sprites/cards/caringAnimals/CAATijeras.png';
import burrowC from '../../sprites/cards/caringAnimals/CAAMadriguera.png';

const data = {
	instructions: {
		title: 'Instrucciones',
		message:
			'¡Hola! ¿Crees que puedes ayudarnos? ' +
			'En la pantalla puedes ver cuatro animales en problemas: ' +
			'un perro, un zorro, una tortuga y un conejo. ' +
			'Cuando hagas clic en ellos aparecerá un cuadro en el que ' +
			'encontrarás una lista de soluciones para cada animal. ' +
			'Haz clic en la que pienses que ayudará a cada uno de los animalitos.',
		buttonText: 'Jugar',
	},
	deck: [
		{
			id: 0,
			name: 'comida para perro',
			address: food,
		},
		{
			id: 1,
			name: 'tijeras',
			address: scisors,
		},
		{
			id: 2,
			name: 'papás conejos',
			address: rabbits,
		},
		{
			id: 3,
			name: 'madriguera',
			address: burrowC,
		},
	],
	sprites: [
		{
			id: 0,
			name: 'perro con hambre',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: starving,
					size: [3, 3],
					position: [-7, 1.2, -16],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 10,
				},
				{
					src: eating,
					size: [3, 3],
					position: [-7, 1.2, -16],
					rotation: [0, 0.1, 0],
					tilesHorizontal: 3,
					tilesVertical: 4,
					totalTiles: 10,
				},
			],
		},
		{
			id: 1,
			name: 'tortuga atrapada',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: trapped,
					size: [4, 3],
					position: [2, 1.2, -20],
					rotation: [0, Math.PI * 14, 0],
					tilesHorizontal: 3,
					tilesVertical: 4,
					totalTiles: 10,
				},
				{
					src: free,
					size: [4.8, 4],
					position: [2.5, 1.6, -20],
					rotation: [0, 0, 0],
					tilesHorizontal: 3,
					tilesVertical: 4,
					totalTiles: 10,
				},
			],
		},
		{
			id: 2,
			name: 'conejo perdido',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: lonely,
					size: [2, 2],
					position: [-2, 0.7, -21],
					rotation: [0, 0, 0],
					tilesHorizontal: 3,
					tilesVertical: 4,
					totalTiles: 10,
				},
				{
					src: bunnies,
					size: [3, 3],
					position: [-2, 1.3, -21],
					rotation: [0, 0, 0],
					tilesHorizontal: 3,
					tilesVertical: 4,
					totalTiles: 10,
				},
			],
		},
		{
			id: 3,
			name: 'zorro sin hogar',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: idleFox,
					size: [4, 3],
					position: [-10, 1.5, -20],
					rotation: [0, Math.PI, 0],
					tilesHorizontal: 3,
					tilesVertical: 4,
					totalTiles: 10,
				},
				{
					src: burrow,
					size: [4, 3],
					position: [-10, 1.5, -20],
					rotation: [0, 0, 0],
					tilesHorizontal: 3,
					tilesVertical: 4,
					totalTiles: 10,
				},
			],
		},
		{
			id: null,
			name: 'girl',
			indexExpression: 0,
			expressions: [
				{
					src: girlIdle,
					size: [4, 4],
					position: [2.5, 2.2, -14],
					rotation: [0, 0, 0],
					tilesHorizontal: 5,
					tilesVertical: 2,
					totalTiles: 10,
				},
				{
					src: girlHappy,
					size: [4, 4],
					position: [2.5, 2.2, -14],
					rotation: [0, 0, 0],
					tilesHorizontal: 5,
					tilesVertical: 2,
					totalTiles: 10,
				},
			],
		},
		{
			id: null,
			name: 'boy',
			indexExpression: 0,
			expressions: [
				{
					src: boyIdle,
					size: [4, 4],
					position: [3.7, 2.2, -12],
					rotation: [0, 0, 0],
					tilesHorizontal: 5,
					tilesVertical: 2,
					totalTiles: 10,
				},
				{
					src: boyPoiting,
					size: [4, 4],
					position: [3.7, 2.2, -12],
					rotation: [0, 0, 0],
					tilesHorizontal: 5,
					tilesVertical: 2,
					totalTiles: 10,
				},
			],
		},
	],
	cutscene: [
		{
			camera: {
				fov: 24,
				position: {
					x: 12.126251664358787,
					y: 2.726405017131645,
					z: 0.2847641585216985,
				},
				rotation: {
					x: -0.09212135637395046,
					y: -0.1236485952913298,
					z: -0.03284751678030142,
				},
			},

			speech: {
				image: boyScout,
				text: 'Niño: Mira, ya casi llegamos al bosque.',
			},
			sprites: [
				{
					id: 0,
					name: 'boy',
					expressions: [
						{
							src: boyPoiting,
							size: [2.5, 3],
							position: [15, 2, -10],
							rotation: [0, 0, 0],
							tilesHorizontal: 5,
							tilesVertical: 2,
							totalTiles: 10,
						},
					],
				},
				{
					id: 1,
					name: 'girl',
					expressions: [
						{
							src: girlIdle,
							size: [3, 3],
							position: [18, 2, -8],
							rotation: [0, 0, 0],
							tilesHorizontal: 5,
							tilesVertical: 2,
							totalTiles: 10,
						},
					],
				},
			],
		},
		{
			speech: {
				image: girlScout,
				text: 'Niña: Es verdad. Finalmente podemos respirar aire puro.',
			},
			sprites: [
				{
					id: 0,
					name: 'boy',
					expressions: [
						{
							src: boyIdle,
							size: [2.5, 3],
							position: [15, 2, -10],
							rotation: [0, 0, 0],
							tilesHorizontal: 5,
							tilesVertical: 2,
							totalTiles: 10,
						},
					],
				},
				{
					id: 1,
					name: 'girl',
					expressions: [
						{
							src: girlHappy,
							size: [3, 3],
							position: [18, 2, -8],
							rotation: [0, 0, 0],
							tilesHorizontal: 5,
							tilesVertical: 2,
							totalTiles: 10,
						},
					],
				},
			],
		},
		{
			camera: {
				fov: 24,
				position: {
					x: -6.126251664358787,
					y: 4.726405017131645,
					z: 7.0847641585216985,
				},
				rotation: {
					x: -0.09212135637395046,
					y: -0.2536485952913298,
					z: -0.03284751678030142,
				},
			},

			speech: {
				image: boyScout,
				text: 'Niño: Pero, mira, hay muchos animales en problemas.',
			},
			sprites: [
				{
					id: 0,
					name: 'boy',
					expressions: [
						{
							src: boyPoiting,
							size: [2.5, 3],
							position: [6, 2, -10],
							rotation: [0, 0, 0],
							tilesHorizontal: 5,
							tilesVertical: 2,
							totalTiles: 10,
						},
					],
				},
				{
					id: 1,
					name: 'girl',
					expressions: [
						{
							src: girlIdle,
							size: [3, 3],
							position: [8, 2, -8],
							rotation: [0, 0, 0],
							tilesHorizontal: 5,
							tilesVertical: 2,
							totalTiles: 10,
						},
					],
				},
				{
					id: 2,
					name: 'perro con hambre',
					expressions: [
						{
							src: starving,
							size: [3, 3],
							position: [-7, 1.2, -16],
							rotation: [0, 0, 0],
							tilesHorizontal: 4,
							tilesVertical: 3,
							totalTiles: 10,
						},
					],
				},
				{
					id: 3,
					name: 'tortuga atrapada',
					expressions: [
						{
							src: trapped,
							size: [4, 3],
							position: [2, 1.2, -20],
							rotation: [0, Math.PI * 14, 0],
							tilesHorizontal: 3,
							tilesVertical: 4,
							totalTiles: 10,
						},
					],
				},
				{
					id: 4,
					name: 'conejo perdido',
					expressions: [
						{
							src: lonely,
							size: [2, 2],
							position: [-2, 0.7, -21],
							rotation: [0, 0, 0],
							tilesHorizontal: 3,
							tilesVertical: 4,
							totalTiles: 10,
						},
					],
				},
				{
					id: 5,
					name: 'zorro sin hogar',
					expressions: [
						{
							src: idleFox,
							size: [4, 3],
							position: [-10, 1.5, -20],
							rotation: [0, Math.PI, 0],
							tilesHorizontal: 3,
							tilesVertical: 4,
							totalTiles: 10,
						},
					],
				},
			],
		},
		{
			speech: {
				image: girlScout,
				text: 'Niña: Es cierto, deberíamos ayudarlos.',
			},
			sprites: [
				{
					id: 0,
					name: 'boy',
					expressions: [
						{
							src: boyIdle,
							size: [2.5, 3],
							position: [6, 2, -10],
							rotation: [0, 0, 0],
							tilesHorizontal: 5,
							tilesVertical: 2,
							totalTiles: 10,
						},
					],
				},
				{
					id: 1,
					name: 'girl',
					expressions: [
						{
							src: girlPoiting,
							size: [3, 3],
							position: [8, 2, -8],
							rotation: [0, 0, 0],
							tilesHorizontal: 5,
							tilesVertical: 2,
							totalTiles: 10,
						},
					],
				},
				{
					id: 2,
					name: 'perro con hambre',
					expressions: [
						{
							src: starving,
							size: [3, 3],
							position: [-7, 1.2, -16],
							rotation: [0, 0, 0],
							tilesHorizontal: 4,
							tilesVertical: 3,
							totalTiles: 10,
						},
					],
				},
				{
					id: 3,
					name: 'tortuga atrapada',
					expressions: [
						{
							src: trapped,
							size: [4, 3],
							position: [2, 1.2, -20],
							rotation: [0, Math.PI * 14, 0],
							tilesHorizontal: 3,
							tilesVertical: 4,
							totalTiles: 10,
						},
					],
				},
				{
					id: 4,
					name: 'conejo perdido',
					expressions: [
						{
							src: lonely,
							size: [2, 2],
							position: [-2, 0.7, -21],
							rotation: [0, 0, 0],
							tilesHorizontal: 3,
							tilesVertical: 4,
							totalTiles: 10,
						},
					],
				},
				{
					id: 5,
					name: 'zorro sin hogar',
					expressions: [
						{
							src: idleFox,
							size: [4, 3],
							position: [-10, 1.5, -20],
							rotation: [0, Math.PI, 0],
							tilesHorizontal: 3,
							tilesVertical: 4,
							totalTiles: 10,
						},
					],
				},
			],
		},
		{
			camera: {
				fov: 24,
				position: {
					x: -6.126251664358787,
					y: 4.726405017131645,
					z: 7.0847641585216985,
				},
				rotation: {
					x: -0.09212135637395046,
					y: -0.2536485952913298,
					z: -0.03284751678030142,
				},
			},
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
