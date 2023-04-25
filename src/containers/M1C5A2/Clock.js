import React, { useEffect, useRef } from 'react';

import { ContainerClock } from './styles';

let clockInterval;

const Clock = ({ setGameOver, gameOver, isWin }) => {
	const clockRef = useRef();

	useEffect(() => {
		if (clockRef.current && !gameOver && !isWin) {
			let time = 599;
			clearInterval(clockInterval);
			clockRef.current.innerHTML = '10:00';
			clockInterval = setInterval(() => {
				if (time <= 0) {
					clearInterval(clockInterval);
					setGameOver(true);
				}
				if (clockRef.current) {
					clockRef.current.innerHTML = ` 0${parseInt(time / 60)}:${
						time % 60 < 10 ? '0' : ''
					}${time % 60}`;
					time -= 1;
				}
			}, 1000);
		}
	});

	useEffect(() => {
		if (isWin) {
			clearInterval(clockInterval);
		}
	}, [isWin]);

	return <ContainerClock ref={clockRef}></ContainerClock>;
};

export default Clock;
