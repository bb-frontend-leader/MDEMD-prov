import React, { useRef, useEffect } from 'react';

import { ContainerProgressBar, ContentProgressBar, Bar } from './styles';

let clearTime = null;

export default function ProgressBar({ speechStart, correctCount, id }) {
	const barRef = useRef();
	const duration = 5;

	useEffect(() => {
		if (barRef.current && !speechStart && id != null) {
			barRef.current.style.transitionDuration = `${duration}s`;
			barRef.current.style.width = '100%';

			clearTime = setTimeout(() => {
				barRef.current.style.transitionDuration = `${0}s`;
				barRef.current.style.width = '0';
			}, duration * 1000);
		} else if (barRef.current && speechStart && id != null) {
			clearTimeout(clearTime);

			barRef.current.style.transitionDuration = `${0}s`;
			barRef.current.style.width = '0';
		}
	}, [speechStart]);

	useEffect(() => {
		if (barRef.current) {
			clearTimeout(clearTime);

			barRef.current.style.transitionDuration = `${0}s`;
			barRef.current.style.width = '0';
		}
	}, [correctCount]);

	return (
		<ContainerProgressBar>
			<ContentProgressBar>
				<Bar ref={barRef} />
			</ContentProgressBar>
		</ContainerProgressBar>
	);
}
