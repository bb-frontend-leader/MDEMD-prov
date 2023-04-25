import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { usePlane, useSphere, useBox, useCylinder, Debug } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import useControls from '../../customHooks/useControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
//import { useStore } from '../../customHooks/Threejs';

import { data } from './data';
import { Fruits } from './Fruits';

const mountMeshes = {
	BlueberryVines: (mesh) => {
		mesh.material.metalness = 1.5;
	},
	AppleTree: (mesh) => {
		mesh.material.metalness = 0;
	},
	OrangeTree: (mesh) => {
		mesh.material.metalness = 0;
	},
	PeachTree: (mesh) => {
		mesh.material.metalness = 0;
	},
	StrawberryVines: (mesh) => {
		mesh.material.metalness = 1.5;
	},
	RaspberryBushes: (mesh) => {
		mesh.material.metalness = 1.5;
	},
	RocksBushes: (mesh) => {
		mesh.material.metalness = 0;
	},
	Scenery: (mesh) => {
		mesh.material.metalness = 0;
	},
};

function Model() {
	const model = useRef({});

	useEffect(() => {
		if (model.current) {
			Object.keys(model.current).map((mesh, index) => {
				if (typeof mountMeshes[model.current[mesh].name] === 'function') {
					mountMeshes[model.current[mesh].name](model.current[mesh]);
				}
			});
		}
	});

	useFrame((e) => {});

	const result = useLoader(
		GLTFLoader,
		'/models/enviroment/ForestRecolectandoFrutas.glb',
	);

	return (
		<group name={'forest'}>
			{Object.keys(result.nodes).map((node, index) => {
				return (
					<primitive
						ref={(el) => (model.current[node] = el)}
						object={result.nodes[node]}
						key={index}
					/>
				);
			})}
		</group>
	);
}

function Basket(props) {
	const group = useRef();
	const result = useGLTF('/models/enviroment/PODBasket.glb');
	//const setTarget = useStore((state) => state.setTarget);

	return (
		<primitive
			object={result.scene}
			{...props}
			onClick={(e) => {
				//setTarget(e.object);
			}}
		/>
	);
}

function Forest(props) {
	const group = useRef();
	const { instructions, models, sprites } = data;

	const refForest = useRef();

	useFrame(() => {});

	return (
		<group ref={refForest} rotation={[0, 3.05, 0]} name={'forest'}>
			<Model />
			<Basket position={[0, 0.37, 0.5]} scale={[0.05, 0.012, 0.05]} />
		</group>
	);
}

useGLTF.preload('/models/enviroment/ForestRecolectandoFrutas.glb');
useGLTF.preload('/models/fruit/Arandano.glb');
useGLTF.preload('/models/fruit/Durazno.glb');
useGLTF.preload('/models/fruit/Fresa.glb');
useGLTF.preload('/models/fruit/Manzana.glb');
useGLTF.preload('/models/fruit/Mora.glb');
useGLTF.preload('/models/fruit/Naranja.glb');
useGLTF.preload('/models/enviroment/PODSBasket.glb');

export { Forest, Fruits };
