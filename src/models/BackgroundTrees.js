import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';

import { useAudio } from '../customHooks/Audio';
import correct from '../sounds/sfx/Aplausos.mp3';
import wrong from '../sounds/sfx/Oops_error.mp3';

function PostsBehavoiur({
	id,
	setId,
	setAnswerState,
	correctCount,
	setCorrectCount,
	setIsWin,
	props,
}) {
	const [currentFeeling, setCurrentFeeling] = useState(undefined);
	const [currentDesire, setCurrentDesire] = useState(undefined);
	const [indexFeeling, setIndexFeeling] = useState(null);
	const [indexDesire, setIndexDesire] = useState(null);

	const { currDesire, prevDesire } = currentDesire ? currentDesire : 0;
	const { currFeeling, prevFeeling } = currentFeeling ? currentFeeling : 0;
	const [checked] = useState(() => new Set());

	const { play: playWrong } = useAudio(wrong);
	const { play: playCorrect } = useAudio(correct);

	const disableObject = () => {
		currDesire.material.emissive = { r: 1, g: 0, b: 0 };
		currFeeling.material.emissive = { r: 1, g: 0, b: 0 };
		setInterval(() => {
			// currDesire.material.emissive = { r: 0, g: 0, b: 0 };
			// currFeeling.material.emissive = { r: 0, g: 0, b: 0 };
			setCurrentFeeling(undefined);
		}, 1200);
	};

	const winSigns = () => {
		currDesire.material.emissive = { r: 0, g: 1, b: 0 };
		currFeeling.material.emissive = { r: 0, g: 1, b: 0 };
		currDesire.isActive = false;
		currFeeling.isActive = false;
	};

	useEffect(() => {
		setId(null);
	}, []);

	useEffect(() => {
		if (correctCount === 5) setIsWin(true);
	}, [correctCount]);

	useEffect(() => {
		if (id === null) return;
		if (currDesire && currDesire.isActive)
			currDesire.material.emissive = { r: 0.7, g: 0.6, b: 0.2 };
		if (prevDesire && prevDesire.isActive)
			prevDesire.material.emissive = { r: 0, g: 0, b: 0 };
		if (currFeeling && currFeeling.isActive)
			currFeeling.material.emissive = { r: 0.2, g: 0.6, b: 0.6 };
		if (prevFeeling && prevFeeling.isActive)
			prevFeeling.material.emissive = { r: 0, g: 0, b: 0 };
		if (currentDesire && currentFeeling) {
			checkAnswer((value) => {
				value ? playCorrect(0.6) : playWrong(0.25); // -23LUFS
				setAnswerState(value);
				if (value) setCorrectCount(correctCount + 1);
			});
		}
	}, [currentDesire, currentFeeling]);

	const checkAnswer = (answer) => {
		const isChecked = checked.has(id);
		// if (id !== null && !isChecked) {
		if (id !== null && currDesire.isActive && currFeeling.isActive) {
			if (indexDesire === id && indexFeeling === id) {
				checked.add(id);
				setIndexDesire(null);
				setIndexFeeling(null);
				winSigns();
				answer(true);
			} else if (indexDesire !== null && indexFeeling !== null) {
				answer(false);
			}
		}
	};

	return (
		<>
			<DesiresPost
				id={id}
				setCurrent={setCurrentDesire}
				setIndex={setIndexDesire}
			/>
			<FeelingsPost
				id={id}
				setCurrent={setCurrentFeeling}
				setIndex={setIndexFeeling}
			/>
			;
		</>
	);
}

function DesiresPost({ id, setIndex, setCurrent, props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/DesiresPost.glb');

	useEffect(() => {
		group.current.children[0].children.map((obj) => {
			obj.material.emissiveIntensity = 0.3;
			obj.material.emissive = { r: 0, g: 0, b: 0 };
			obj.isActive = true;
		});
	}, []);

	const onClickHandler = (object) => {
		if (id !== null && object.index !== undefined) {
			setIndex(object.index);
			setCurrent((prev) => {
				return {
					currDesire: object,
					prevDesire:
						prev && prev.prevDesire !== prev.currDesire
							? prev.currDesire
							: undefined,
				};
			});
		}
	};

	return (
		<group ref={group} {...props} dispose={null}>
			<group
				position={[10, 7, -3]}
				scale={[0.2, 0.2, 0.2]}
				onClick={(e) => onClickHandler(e.object)}
				onPointerEnter={() => document.body.classList.add('pointer')}
				onPointerOut={() => document.body.classList.remove('pointer')}
			>
				<mesh
					index={0}
					isActive={true}
					geometry={nodes.SecoSign.geometry}
					material={materials['Sign6.001']}
					position={[0.21, 22.75, 0]}
				/>
				<mesh
					index={1}
					isActive={true}
					geometry={nodes.PerdidaSign.geometry}
					material={materials['Sign9.001']}
					position={[0.21, -7.88, 0]}
				/>
				<mesh
					index={2}
					isActive={true}
					geometry={nodes.DondeSign.geometry}
					material={materials['Sign10.001']}
					position={[0.21, -17.91, 0]}
				/>
				<mesh
					index={3}
					isActive={true}
					geometry={nodes.LluviaSign.geometry}
					material={materials['Sign7.001']}
					position={[0.21, 11.31, 0]}
				/>
				<mesh
					index={4}
					isActive={true}
					geometry={nodes.AprenderSign.geometry}
					material={materials['Sign8.001']}
					position={[0.21, 1.79, 0]}
				/>
				<mesh
					geometry={nodes.Post.geometry}
					material={materials['Post2.001']}
					position={[-1.03, -10.06, 0]}
				/>
			</group>
		</group>
	);
}

function FeelingsPost({ id, setIndex, setCurrent, props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/FeelingsPost.glb');

	useEffect(() => {
		group.current.children[0].children.map((obj) => {
			obj.material.emissiveIntensity = 0.3;
			obj.material.emissive = { r: 0, g: 0, b: 0 };
			obj.isActive = true;
		});
	}, []);

	const onClickHandler = (object) => {
		if (id !== null && object.index !== undefined) {
			setIndex(object.index);
			setCurrent((prev) => {
				return {
					currFeeling: object,
					prevFeeling:
						prev && prev.prevFeeling !== prev.currFeeling
							? prev.currFeeling
							: undefined,
				};
			});
		}
	};

	return (
		<group ref={group} {...props} dispose={null}>
			<group
				position={[10, 7, 7]}
				scale={[0.2, 0.2, 0.2]}
				onClick={(e) => onClickHandler(e.object)}
				onPointerEnter={() => document.body.classList.add('pointer')}
				onPointerOut={() => document.body.classList.remove('pointer')}
			>
				<mesh
					index={0}
					isActive={true}
					geometry={nodes.FelicidadSign.geometry}
					material={materials.Sign4}
					position={[0.25, -15.08, 0]}
				/>
				<mesh
					index={1}
					isActive={true}
					geometry={nodes.Trizteza.geometry}
					material={materials.Sign5}
					position={[0.25, 13.86, 0]}
				/>
				<mesh
					index={2}
					isActive={true}
					geometry={nodes.TemorSign.geometry}
					material={materials.Sign3}
					position={[0.25, 23.58, 0]}
				/>
				<mesh
					index={3}
					isActive={true}
					geometry={nodes.DesagradoSign.geometry}
					material={materials.Sign2}
					position={[0.25, -5.33, 0]}
				/>
				<mesh
					index={4}
					isActive={true}
					geometry={nodes.FuriaSign.geometry}
					material={materials.Sign1}
					position={[0.25, 4.35, 0]}
				/>
				<mesh
					geometry={nodes.Post.geometry}
					material={materials.Post1}
					position={[-0.99, -7.52, 0]}
				/>
			</group>
		</group>
	);
}

function Trees({ ...props }) {
	const group = useRef();
	const { nodes, materials } = useGLTF('/models/enviroment/BackgroundTrees.glb');
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.Bushes_Rocks_Vines.geometry}
				material={materials.Bushes_Vine_Rocks_mat}
			/>
			<mesh geometry={nodes.Scenery.geometry} material={materials.Scenery_mat} />
			<mesh geometry={nodes.Trees.geometry} material={materials.Trees_mat} />
		</group>
	);
}

useGLTF.preload('/models/enviroment/BackgroundTrees.glb');
useGLTF.preload('/models/enviroment/DesiresPost.glb');
useGLTF.preload('/models/enviroment/FeelingsPost.glb');

export { Trees, PostsBehavoiur };
