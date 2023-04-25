import front from '../../sprites/pia/front.webp';
import back from '../../sprites/pia/back.webp';
import left from '../../sprites/pia/left.webp';
import right from '../../sprites/pia/right.webp';

const data = {
	instructions: {
		title: 'instrucciones',
		message:
			'Mueve a Pía con las flechas del teclado a la derecha y ' +
			'a la izquierda y ayúdala a recolectar las frutas antes ' +
			'de que se acabe el tiempo, para que el gran arbol no se caiga!',
		buttonText: 'Jugar',
	},
	sprites: [
		{
			id: 0,
			name: 'front',
			expression: {
				src: front,
				size: [1.5, 1.5],
				position: [0, 2, 4],
				rotation: [0, 0, 0],
				tilesHorizontal: 4,
				tilesVertical: 4,
				totalTiles: 16,
			},
		},
		{
			id: 1,
			name: 'back',
			expression: {
				src: back,
				size: [1.5, 1.5],
				position: [0, 2, 0],
				rotation: [0, 0, 0],
				tilesHorizontal: 4,
				tilesVertical: 4,
				totalTiles: 16,
			},
		},
		{
			id: 2,
			name: 'left',
			expression: {
				src: left,
				size: [1.5, 1.5],
				position: [0, 2, 0],
				rotation: [0, Math.PI, 0],
				tilesHorizontal: 4,
				tilesVertical: 4,
				totalTiles: 16,
			},
		},
		{
			id: 3,
			name: 'right',
			expression: {
				src: right,
				size: [1.5, 1.5],
				position: [0, 2, 0],
				rotation: [0, 0, 0],
				tilesHorizontal: 4,
				tilesVertical: 4,
				totalTiles: 16,
			},
		},
	],
	models: [
		{
			name: 'blueberry',
			path: '/models/fruit/Arandano.glb',
			geometry: 'Blueberry',
			material: 'Blueberry.001',
		},
		{
			name: 'peach',
			path: '/models/fruit/Durazno.glb',
			geometry: 'Peach',
			material: 'Peach',
		},
		{
			name: 'strawberry',
			path: '/models/fruit/Fresa.glb',
			child: [
				{
					geometry: 'Strawberry-Strawberry',
					material: 'Strawberry.001',
				},
				{
					geometry: 'Strawberry-Stub',
					material: 'Stub.001',
				},
			],
		},
		{
			name: 'apple',
			path: '/models/fruit/Manzana.glb',
			child: [
				{
					geometry: 'Apple-Apple',
					material: 'Apple.002',
				},
				{
					geometry: 'Apple-Stub',
					material: 'Stub.002',
				},
			],
		},
		{
			name: 'blackberry',
			path: '/models/fruit/Mora.glb',
			geometry: 'Blackberry-Blackberry_mat',
			material: 'Blackberry_mat',
		},
		{
			name: 'orange',
			path: '/models/fruit/Naranja.glb',
			geometry: 'Orange',
			material: 'Orange',
		},
		{
			name: 'blueberry',
			path: '/models/fruit/Arandano.glb',
			geometry: 'Blueberry',
			material: 'Blueberry.001',
		},
		{
			name: 'peach',
			path: '/models/fruit/Durazno.glb',
			geometry: 'Peach',
			material: 'Peach',
		},
		{
			name: 'strawberry',
			path: '/models/fruit/Fresa.glb',
			child: [
				{
					geometry: 'Strawberry-Strawberry',
					material: 'Strawberry.001',
				},
				{
					geometry: 'Strawberry-Stub',
					material: 'Stub.001',
				},
			],
		},
		{
			name: 'apple',
			path: '/models/fruit/Manzana.glb',
			child: [
				{
					geometry: 'Apple-Apple',
					material: 'Apple.002',
				},
				{
					geometry: 'Apple-Stub',
					material: 'Stub.002',
				},
			],
		},
		{
			name: 'blackberry',
			path: '/models/fruit/Mora.glb',
			geometry: 'Blackberry-Blackberry_mat',
			material: 'Blackberry_mat',
		},
		{
			name: 'orange',
			path: '/models/fruit/Naranja.glb',
			geometry: 'Orange',
			material: 'Orange',
		},
		{
			name: 'blueberry',
			path: '/models/fruit/Arandano.glb',
			geometry: 'Blueberry',
			material: 'Blueberry.001',
		},
		{
			name: 'peach',
			path: '/models/fruit/Durazno.glb',
			geometry: 'Peach',
			material: 'Peach',
		},
		{
			name: 'strawberry',
			path: '/models/fruit/Fresa.glb',
			child: [
				{
					geometry: 'Strawberry-Strawberry',
					material: 'Strawberry.001',
				},
				{
					geometry: 'Strawberry-Stub',
					material: 'Stub.001',
				},
			],
		},
		{
			name: 'apple',
			path: '/models/fruit/Manzana.glb',
			child: [
				{
					geometry: 'Apple-Apple',
					material: 'Apple.002',
				},
				{
					geometry: 'Apple-Stub',
					material: 'Stub.002',
				},
			],
		},
		{
			name: 'blackberry',
			path: '/models/fruit/Mora.glb',
			geometry: 'Blackberry-Blackberry_mat',
			material: 'Blackberry_mat',
		},
		{
			name: 'orange',
			path: '/models/fruit/Naranja.glb',
			geometry: 'Orange',
			material: 'Orange',
		},
	],
};

export { data };
