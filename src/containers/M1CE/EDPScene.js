import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox, usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { element } from 'prop-types';

export default function EscapeScene({ id, answerState, showObject, ...props }) {
	const group = useRef();
	const gltf = useLoader(GLTFLoader, 'models/enviroment/EvalStage.glb');

	const sceneRef = useRef();

	useEffect(() => {
		if (sceneRef.current) {
			sceneRef.current.children[0].children.map((element) => {
				if (['Fire', 'LogBridge', 'Rope'].includes(element.name)) {
					element.visible = false;
				}
			});
		}
	}, []);

	useEffect(() => {
		if (sceneRef.current) {
			sceneRef.current.children[0].children.map((element) => {
				if (
					['Fire', 'LogBridge', 'Rope'].includes(element.name) &&
					showObject == element.name
				) {
					element.visible = true;
				} else if (['Fire', 'LogBridge', 'Rope'].includes(element.name)) {
					element.visible = false;
				}
			});
		}
	}, [showObject]);

	return <primitive ref={sceneRef} object={gltf.scene} {...props} />;
}

useGLTF.preload('models/enviroment/EDPScene.glb');
