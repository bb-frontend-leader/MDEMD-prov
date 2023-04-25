import cougarIdle from '../../sprites/piasMistakes/cougarIdle.webp';
import cougarCelebrate from '../../sprites/piasMistakes/cougarCelebrate.webp';
import rabbitIdle from '../../sprites/piasMistakes/rabbitIdle.webp';
import rabbitCelebrate from '../../sprites/piasMistakes/rabbitCelebrate.webp';
import piaIdle from '../../sprites/pia/idle.webp';
import piaCelebrate from '../../sprites/pia/happy.webp';
import dadsIdle from '../../sprites/piasMistakes/dadsIdle.webp';
import dadsCelebrate from '../../sprites/piasMistakes/dadsCelebrate.webp';
import teacherIdle from '../../sprites/piasMistakes/teacherIdle.webp';
import teacherCelebrate from '../../sprites/piasMistakes/teacherCelebrate.webp';

const data = {
	instructions: {
		title: 'Instrucciones',
		message: `De acuerdo con la historia vista en el video inicial, 
      haz clic sobre cada animal y relacionalo con una emoción y una explicación de la emoción seleccionada`,
		buttonText: 'Jugar',
	},
	sprites: [
		{
			id: 0,
			name: 'puma',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: cougarIdle,
					size: [5, 5],
					position: [10, 6, 16],
					rotation: [0, Math.PI / 2, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: cougarCelebrate,
					size: [5, 5],
					position: [10, 6, 16],
					rotation: [0, Math.PI / 2, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},

		{
			id: 1,
			name: 'pia',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: piaIdle,
					size: [3, 3],
					position: [8, 3.5, 14],
					rotation: [0, Math.PI / 2, 0],
					tilesHorizontal: 5,
					tilesVertical: 2,
					totalTiles: 9,
				},
				{
					src: piaCelebrate,
					size: [2.5, 3],
					position: [8, 3.5, 14],
					rotation: [0, Math.PI / 2, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 10,
				},
			],
		},
		{
			id: 2,
			name: 'Papás',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: dadsIdle,
					size: [6, 6],
					position: [12, 3, 16],
					rotation: [0, Math.PI / 2, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 12,
				},
				{
					src: dadsCelebrate,
					size: [6, 6],
					position: [12, 3, 16],
					rotation: [0, Math.PI / 2, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 12,
				},
			],
		},
		{
			id: 3,
			name: 'conejo',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: rabbitIdle,
					size: [3, 3],
					position: [12, 1, 9],
					rotation: [0, Math.PI / 2, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 10,
				},
				{
					src: rabbitCelebrate,
					size: [3, 3],
					position: [12, 1, 9],
					rotation: [0, Math.PI / 2, 0],
					tilesHorizontal: 4,
					tilesVertical: 3,
					totalTiles: 10,
				},
			],
		},
		{
			id: 4,
			name: 'Maestra',
			hover: true,
			indexExpression: 0,
			expressions: [
				{
					src: teacherIdle,
					size: [5, 5],
					position: [13, 1, 12],
					rotation: [0, Math.PI / 2, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
				{
					src: teacherCelebrate,
					size: [5, 5],
					position: [13, 1, 12],
					rotation: [0, Math.PI / 2, 0],
					tilesHorizontal: 4,
					tilesVertical: 4,
					totalTiles: 16,
				},
			],
		},
	],
};

export { data };
