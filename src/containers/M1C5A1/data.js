import good from '../../sprites/table/goodBasket.webp';
import bad from '../../sprites/table/badBasket.webp';

import kickTrashCan from '../../sprites/cards/POD/PODCards01.png';
import selfish from '../../sprites/cards/POD/PODCards02.png';
import study from '../../sprites/cards/POD/PODCards03.png';
import riseHand from '../../sprites/cards/POD/PODCards04.png';
import ungrateful from '../../sprites/cards/POD/PODCards05.png';
import tantrum from '../../sprites/cards/POD/PODCards06.png';
import share from '../../sprites/cards/POD/PODCards07.png';
import eatFood from '../../sprites/cards/POD/PODCards08.png';
import jumpPuddles from '../../sprites/cards/POD/PODCards09.png';
import makeNoise from '../../sprites/cards/POD/PODCards10.png';
import assistOthers from '../../sprites/cards/POD/PODCards11.png';
import judicious from '../../sprites/cards/POD/PODCards12.png';

const data = {
	instructions: {
		title: 'instrucciones',
		message:
			'Haz click sostenido sobre cada acción, arrastrala ' +
			'sobre la cesta correspondiente: si es buena o es ' +
			'mala para la convivencia.',
		buttonText: 'Jugar',
	},
	images: [
		{
			id: 0,
			name: 'si',
			address: good,
		},
		{
			id: 1,
			name: 'no',
			address: bad,
		},
	],
	deck: [
		{
			id: 0,
			name: 'Patear las canecas de basura',
			address: kickTrashCan,
			answer: false,
		},
		{
			id: 1,
			name: 'No compartir las cosas',
			address: selfish,
			answer: false,
		},
		{
			id: 2,
			name: 'Repasar las lecciones del colegio en familia',
			address: study,
			answer: true,
		},
		{
			id: 3,
			name: 'Pedir la palabra en el salón de clase',
			address: riseHand,
			answer: true,
		},
		{
			id: 4,
			name: 'No comer lo que nos sirven en la mesa',
			address: ungrateful,
			answer: false,
		},
		{
			id: 5,
			name: 'Hacer pataletas',
			address: tantrum,
			answer: false,
		},
		{
			id: 6,
			name: 'Compartir nuestras cosas con amigos y compañeros',
			address: share,
			answer: true,
		},
		{
			id: 7,
			name: 'Sentarse a la mesa y comer lo que nos sirven',
			address: eatFood,
			answer: true,
		},
		{
			id: 8,
			name: 'Saltar en charcos y mojar a los demás',
			address: jumpPuddles,
			answer: false,
		},
		{
			id: 9,
			name: 'Gritar en el salón de clases',
			address: makeNoise,
			answer: false,
		},
		{
			id: 10,
			name: 'Ayudar a los demás con sus problemas',
			address: assistOthers,
			answer: true,
		},
		{
			id: 11,
			name: 'Atender las clases y estudiar con juicio',
			address: judicious,
			answer: true,
		},
	],
};

export { data };
