import React, { useEffect, useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

import { Soup } from 'letters-soup';

import { useSRGBTexture } from '../../customHooks/Texture';
import { TextContainer, Title } from './styles';

const words = [
	'solidaridad',
	'obediencia',
	'respeto',
	'cuidado',
	'ayuda',
	'trabajo',
	'equipo',
	'yo',
	'otros',
	'cariño',
	'error',
];

function CheckWords(newWord, pickLetters, solve, wordsCompleted, setWordsCompleted) {
	const checkWord = newWord.join('').toLowerCase();
	let wordCopy = [...wordsCompleted];

	words.map((word, index) => {
		if (word === checkWord) {
			wordCopy[index].completed = true;
			solve.add(word);
		}
	});

	setWordsCompleted(wordCopy);
	newWord.length = 0;
	pickLetters.length = 0;
}

function Grid({ wordsCompleted, setWordsCompleted, setIsWin }) {
	const size = 12;
	const fill = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

	const [soup] = useState(new Soup(words, size, fill));
	const [newWord] = useState([]);
	const [pickLetters] = useState([]);
	const [solve] = useState(() => new Set());
	let isVertical;

	useEffect(() => {
		generate();
	}, []);

	useEffect(() => {
		const count = words.length;
		if (solve.size === count) {
			setIsWin(true);
			solve.clear();
		}
	});

	const generate = () => {
		soup.board.reset();
		soup.solution = {};
		for (let index = 0; index < soup.content.length; index++) {
			let content = soup.content[index].toUpperCase();
			let cells = getValidCells(content);
			setContentInBoard(content, cells, isVertical);
			soup.solution[content] = cells;
		}
		soup.fillEmptyCells();
		return soup.board.getAllCells();
	};

	const getValidCells = (content) => {
		const contentSize = content.length;
		let canSetInBoard = false;
		let cells = [];
		do {
			cells = getNumberCellsFromContentSize(contentSize);
			const isValid = soup.isValidCells(cells, content);
			if (isValid) canSetInBoard = true;
		} while (!canSetInBoard);
		return cells;
	};
	const setContentInBoard = (content, cells, isInvert) => {
		for (let i = 0, j = content.length - 1; i < cells.length; i++, j--) {
			let cell = cells[i];
			let charContent = isInvert ? content[j] : content[i];
			cell.setContent(charContent);
			soup.board.setCell(cell.getRow(), cell.getColumn(), cell);
		}
	};
	const getNumberCellsFromContentSize = (contentSize) => {
		let isValidWordInBoard = false;
		let cells = [];
		do {
			let randomCell = soup.getRandomCell();
			let direction = soup.getRandomDirection();
			if (direction === 1) {
				isVertical = false;
				cells = soup.board.getRowCells(randomCell, contentSize);
			}
			if (direction === 2) {
				isVertical = true;
				cells = soup.board.getColumnCells(randomCell, contentSize);
			}
			if (direction === 3) continue;
			if (cells.length === contentSize) isValidWordInBoard = true;
		} while (!isValidWordInBoard);
		return cells;
	};

	const letterColor = (e) => {
		e.target.style.backgroundColor = 'green';
	};

	const onPointerDownHandler = (letter) => {
		const length = pickLetters.length;

		if (length === 0) {
			pickLetters.push(letter.currentTarget.textContent);
			letterColor(letter);
		}
	};

	const onPointerEnterHandler = (letter) => {
		const length = pickLetters.length;

		if (length > 0 && length < 12) {
			pickLetters.push(letter.currentTarget.textContent);
			letterColor(letter);
		}
		return;
	};

	const onPointerUpHandler = () => {
		newWord.push(...pickLetters.join(''));
		CheckWords(newWord, pickLetters, solve, wordsCompleted, setWordsCompleted);
	};

	const [setCell] = useState(() => new Set());
	const cellColor = (allCells) => {
		words.map((word) => {
			if (solve.has(word)) {
				let cells = soup.getSolution(word.toUpperCase());
				cells.map((cell) => {
					setCell.add(cell);
				});
			}
		});

		const isPainted = setCell.has(allCells);
		return isPainted;
	};

	const GridCell = (props) => {
		return (
			<>
				<mesh position={props.position}>
					<Html
						transform
						position={[0, 0, 0]}
						scale={[2.4, 2.4, 1]}
						zIndexRange={[1, 0]}
					>
						<TextContainer
							onPointerDown={onPointerDownHandler}
							onPointerEnter={onPointerEnterHandler}
							onPointerUp={onPointerUpHandler}
							selected={cellColor(props.col)}
						>
							{props.letter}
						</TextContainer>
					</Html>
					<planeGeometry args={[0, 0]} />
					<meshBasicMaterial />
				</mesh>
			</>
		);
	};

	return (
		<>
			{soup.board.cells.map((row, rIndex) =>
				row.map((col, index) => {
					return (
						<GridCell
							key={index}
							position={[index * 1.2 - 8.5, rIndex * 1.2 - 3.4, 6]}
							letter={col.content}
							col={col}
						/>
					);
				}),
			)}
			<Html
				transform
				position={[-2.8, 13.3, 0]}
				scale={[2.4, 2.4, 1]}
				zIndexRange={[1, 0]}
			>
				<Title>Sopa de letras</Title>
			</Html>
		</>
	);
}

const Words = ({ wordsCompleted, resources }) => {
	const Orbs = () => {
		const complete = useSRGBTexture(resources.complete, true, THREE.LinearFilter);
		const empty = useSRGBTexture(resources.empty, true, THREE.LinearFilter);

		return (
			<>
				{wordsCompleted.map((word, index) => {
					return (
						<mesh key={index} position={[9, -index * 2.05 + 14.3, 0.1]}>
							<planeGeometry args={[1, 1]} />
							<meshBasicMaterial
								map={word.completed ? complete : empty}
								transparent
							/>
						</mesh>
					);
				})}
			</>
		);
	};
	const WordList = () => {
		const texture = useSRGBTexture(resources.list, true, THREE.LinearFilter);

		return (
			<mesh position={[14, 4, 0]}>
				<planeGeometry args={[14, 25]} />
				<meshBasicMaterial map={texture} transparent />
			</mesh>
		);
	};

	return (
		<>
			<WordList />
			<Orbs />
		</>
	);
};

export { Words, Grid };
