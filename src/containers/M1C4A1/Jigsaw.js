import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { useGLTF, Html } from '@react-three/drei';
import { a, useSprings } from '@react-spring/three';

import { useSRGBTexture } from '../../customHooks/Texture';

import board from '../../sprites/apologiesAndGratitudes/Tablero.png';
import { useGesture } from '@use-gesture/react';
import { useThree } from '@react-three/fiber';
import { RandomRange } from '../../util/Mathf';

function JigsawLoader({ model, texture, spring, bind, props }) {
	const piece = useRef();
	const { nodes, materials } = useGLTF(model.path);

	return (
		<a.mesh
			ref={piece}
			{...props}
			{...spring}
			{...bind}
			geometry={nodes[model.geometry].geometry}
			material={materials[model.material]}
		>
			<meshToonMaterial map={texture} transparent />
		</a.mesh>
	);
}

function Plane(props) {
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		if (hovered && !props.completed) document.body.classList.add('pointer');
		else document.body.classList.remove('pointer');
	}, [hovered]);

	return (
		<a.mesh
			index={props.index}
			onClick={(e) => props.onClickHandler(e.object)}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
			{...props.spring}
			{...props.bind}
		>
			<Html
				position={[0, 0, 0]}
				scale={props.completed ? [6, 6, 1] : [0, 0, 0]}
				transform
				occlude
				onOcclude={() => props.completed}
				zIndexRange={[1, 0]}
				style={{
					width: '40px',
					height: '40px',
					opacity: props.completed ? '1' : '0',
					border: '3px solid #319B42',
					borderRadius: '3px',
				}}
			>
				<div
					style={{
						width: '100%',
						height: '100%',
						opacity: '.4',
						background: '#319B42',
					}}
				/>
			</Html>
			<planeGeometry args={[6, 6]} />
			<meshToonMaterial map={props.texture} transparent />
		</a.mesh>
	);
}

function PickJigsaw({ setId, deck, correctCount, completed, setIsWin }) {
	const textures = useSRGBTexture(
		deck.map((element) => element.path),
		true,
		THREE.LinearFilter,
	);

	const length = textures.length;

	const [jigsaws] = useSprings(length, (i) => ({
		position: i < length / 2 ? [i * 8 - 4, 14, 0] : [(i - length / 2) * 8 - 4, 6, 0],
		width: 60,
		height: 60,
	}));

	const onClickHandler = (object) => {
		if (completed[object.index].complete) return;
		setId(object.index);
	};

	useEffect(() => {
		if (correctCount === length)
			setTimeout(() => {
				setIsWin(true);
			}, 1500);
	}, [correctCount]);

	return (
		<>
			{jigsaws.map((jigsaw, index) => {
				return (
					<Plane
						key={index}
						index={index}
						texture={textures[index]}
						completed={completed[index].complete}
						spring={jigsaw}
						onClickHandler={onClickHandler}
					/>
				);
			})}
		</>
	);
}

const Jigsaw = ({
	id,
	setId,
	answerState,
	setAnswerState,
	correctCount,
	setIsWin,
	models,
	deck,
	jigsaws,
	positions,
	completed,
}) => {
	const count = 5;
	const { size, viewport } = useThree();
	const aspect = size.width / viewport.width;
	const [gone] = useState(() => new Set());
	const initPos = [
		[-12, 10, 0],
		[-12, 15, 0],
		[12, 5, 0],
		[12, 10, 0],
		[12, 15, 0],
	];
	const shuffle = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};
	const newPos = shuffle(initPos);
	const [pieces, setPieces] = useSprings(count, (i) => ({
		// position: i < 2 ? [-12, i * 5 + 10, 0] : [12, (i - 2) * 5 + 5, 0],
		position: newPos[i],
		rotation: i === 0 ? [Math.PI / 2, 0, 0] : [0, 0, 0],
		scale: [0.05, 0.05, 0.05],
	}));
	const setJigsaw = jigsaws.map((jigsaw) => jigsaw.pieces);

	const textures = useSRGBTexture(
		setJigsaw[id !== null ? id : 0].map((piece) => piece.path),
		// true,
		// THREE.LinearFilter,
	);

	const Board = () => {
		const texture = useSRGBTexture(board, true, THREE.LinearFilter);
		return (
			<mesh position={[-0.13, 10.44, 0]}>
				<planeGeometry args={[14.2, 12.8]} />
				<meshBasicMaterial map={texture} transparent />
			</mesh>
		);
	};

	const checkAnswer = () => {
		setTimeout(() => {
			setAnswerState(true);
			gone.clear();
			setPieces.start((i) => ({
				// position: i < 2 ? [-12, i * 5 + 10, 0] : [12, (i - 2) * 5 + 5, 0],
				position: newPos[i],
			}));
		}, 1500);
	};

	const setPosBoundary = (index, xMov, yMov) => {
		if (index === 0 && xMov > -1 && xMov <= 1 && yMov > 10 && yMov <= 11) {
			return 1;
		}
		if (index === 1 && xMov > -4 && xMov <= -2 && yMov > 12 && yMov <= 14) {
			return 1;
		}
		if (index === 2 && xMov > 2 && xMov <= 3 && yMov > 13 && yMov <= 14) {
			return 1;
		}
		if (index === 3 && xMov > -4 && xMov < -2 && yMov > 7 && yMov <= 9) {
			return 1;
		}
		if (index === 4 && xMov > 1 && xMov <= 3 && yMov > 7 && yMov <= 9) {
			return 1;
		}
		return 0;
	};

	const bind = useGesture(
		{
			onDrag: ({ args: [index], down, offset: [x, y] }) => {
				const xMov = x / aspect;
				const yMov = -y / aspect;
				const isGone = gone.has(index);
				if (!down && setPosBoundary(index, xMov, yMov)) {
					gone.add(index);
				}
				if (!isGone) {
					setPieces.start((i) => {
						if (index !== i)
							return {
								scale:
									down && !gone.has(i) ? [0, 0, 0] : [0.05, 0.05, 0.05],
							};
						return {
							position:
								setPosBoundary(index, xMov, yMov) && !down
									? positions[index]
									: [xMov, yMov, 0.1],
						};
					});
				}

				if (gone.size === count) {
					checkAnswer();
				}
			},
		},
		{
			drag: {
				from: (c) => {
					return [
						pieces[c.args].position.animation.to[0] * aspect,
						-pieces[c.args].position.animation.to[1] * aspect,
					];
				},
			},
		},
	);

	return (
		<>
			{id !== null &&
				!answerState &&
				pieces.map((piece, index) => {
					return (
						<JigsawLoader
							key={index}
							index={index}
							model={models[index]}
							texture={textures[index]}
							spring={piece}
							bind={{ ...bind(index) }}
						/>
					);
				})}
			{id !== null && !answerState && <Board />}
			{id === null && (
				<PickJigsaw
					setId={setId}
					deck={deck}
					correctCount={correctCount}
					completed={completed}
					setIsWin={setIsWin}
				/>
			)}
		</>
	);
};

useGLTF.preload('/models/jigsaw/center.glb');
useGLTF.preload('/models/jigsaw/upperRigth.glb');
useGLTF.preload('/models/jigsaw/upperLeft.glb');
useGLTF.preload('/models/jigsaw/downRigth.glb');
useGLTF.preload('/models/jigsaw/downLeft.glb');

export default Jigsaw;
