import wordList from '../../sprites/EOP/wordsList.png';
import complete from '../../sprites/EOP/complete.png';
import empty from '../../sprites/EOP/empty.png';

import pia from '../../sprites/pia/reading.png';

const data = {
	instructions: {
		title: 'instrucciones',
		message:
			'Descubre las palabras escondidas en la sopa ' +
			'de letras. Haz click sostenido y arrastra el ' +
			'mouse para señalarlas, antes de que se acabe el tiempo.',
		buttonText: 'Jugar',
	},

	wordsCheck: {
		list: wordList,
		complete: complete,
		empty: empty,
	},

	sprites: {
		id: 0,
		name: 'pia',
		indexExpression: 0,
		expression: [
			{
				src: pia,
				size: [9, 8],
				position: [-22, -1, -6],
				rotation: [0, 0, 0],
				tilesHorizontal: 5,
				tilesVertical: 4,
				totalTiles: 20,
			},
		],
	},
};

const wordsCompleted = [
	{ id: 0, completed: false },
	{ id: 1, completed: false },
	{ id: 2, completed: false },
	{ id: 3, completed: false },
	{ id: 4, completed: false },
	{ id: 5, completed: false },
	{ id: 6, completed: false },
	{ id: 7, completed: false },
	{ id: 8, completed: false },
	{ id: 9, completed: false },
	{ id: 10, completed: false },
];
export { data, wordsCompleted };
