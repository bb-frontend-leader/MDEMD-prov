const data = {
	models: {
		blueberry: {
			name: 'blueberry',
			path: '/models/fruit/Arandano.glb',
			geometry: 'Blueberry',
			material: 'Blueberry.001',
		},
		peach: {
			name: 'peach',
			path: '/models/fruit/Durazno.glb',
			geometry: 'Peach',
			material: 'Peach',
		},
		strawberry: {
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
		apple: {
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
		blackberry: {
			name: 'blackberry',
			path: '/models/fruit/Mora.glb',
			geometry: 'Blackberry-Blackberry_mat',
			material: 'Blackberry_mat',
		},
		orange: {
			name: 'orange',
			path: '/models/fruit/Naranja.glb',
			geometry: 'Orange',
			material: 'Orange',
		},
	},
};

export { data };
