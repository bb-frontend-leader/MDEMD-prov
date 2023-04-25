import eagle from '../../sprites/eagle/searching.webp';
import rabbit from '../../sprites/bunny/searching.webp';
import hummingbird from '../../sprites/hummingbird/searching.webp';
import mom from '../../sprites/mom/searching.webp';
import dad from '../../sprites/dad/searching.webp';
import teacher from '../../sprites/teacher/searching.webp';

import eagleImage from '../../sprites/positiveEmotions/eagle.webp';
import rabbitImage from '../../sprites/positiveEmotions/rabbit.webp';
import hummingbirdImage from '../../sprites/positiveEmotions/hummingbirdAndPia.webp';
import momImage from '../../sprites/positiveEmotions/mom.webp';
import dadImage from '../../sprites/positiveEmotions/dad.webp';
import teacherImage from '../../sprites/positiveEmotions/teacher.webp';

const data = {
	instructions: {
		title: 'Instrucciones',
		message: `Ayuda a encontrar a Pia en el bosque, haz clic sostenido y mueve el mouse para girar la cámara. 
      Luego haz clic en cada uno de los lugares del bosque en donde creas que está escondida Pia.`,
		buttonText: 'Jugar',
	},
	descriptionText: {
		text: 'Haz click sostenido y arrastra la cámara para buscar a pia',
	},

	images: [
		{
			id: 0,
			src: eagleImage,
		},
		{
			id: 1,
			src: rabbitImage,
		},
		{
			id: 2,
			src: hummingbirdImage,
		},
		{
			id: 3,
			src: momImage,
		},
		{
			id: 4,
			src: dadImage,
		},
		{
			id: 5,
			src: teacherImage,
		},
	],
	sprites: [
		{
			id: 0,
			name: 'eagle',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: eagle,
					size: [20, 20],
					position: [-75, 15, -15],
					rotation: [0, Math.PI / 2, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 12,
				},
				{
					src: eagle,
					size: [20, 20],
					position: [-50, 15, -10],
					rotation: [0, Math.PI / 2, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 12,
				},
			],
		},
		{
			id: 1,
			name: 'rabbit',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: rabbit,
					size: [10, 10],
					position: [60, 15, 5],
					rotation: [0, (7 * Math.PI) / 4, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: rabbit,
					size: [10, 10],
					position: [40, 15, 0],
					rotation: [0, (7 * Math.PI) / 4, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 2,
			name: 'hummingbird',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: hummingbird,
					size: [10, 10],
					position: [35, 15, 50],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: hummingbird,
					size: [20, 20],
					position: [35, 15, 35],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
		{
			id: 3,
			name: 'mom',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: mom,
					size: [20, 20],
					position: [80, 15, -35],
					rotation: [0, (7 * Math.PI) / 4, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 12,
				},
				{
					src: mom,
					size: [20, 20],
					position: [40, 15, -30],
					rotation: [0, (7 * Math.PI) / 4, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 12,
				},
			],
		},
		{
			id: 4,
			name: 'dad',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: dad,
					size: [20, 20],
					position: [-40, 15, 60],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 10,
				},
				{
					src: dad,
					size: [20, 20],
					position: [-50, 15, 10],
					rotation: [0, (17 * Math.PI) / 12, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 10,
				},
			],
		},
		{
			id: 5,
			name: 'teacher',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: teacher,
					size: [20, 20],
					position: [-34, 15, -62],
					rotation: [0, 0, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: teacher,
					size: [20, 20],
					position: [-30, 15, -50],
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
