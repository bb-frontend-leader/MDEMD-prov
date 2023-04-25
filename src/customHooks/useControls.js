import { useEffect, useRef } from 'react';

function useControls() {
	const keys = useRef({ up: false, left: false, down: false, right: false });

	useKeys(['ArrowUp', 'w'], (pressed) => (keys.current.up = pressed));
	useKeys(['ArrowLeft', 'a'], (pressed) => (keys.current.left = pressed));
	useKeys(['ArrowDown', 's'], (pressed) => (keys.current.down = pressed));
	useKeys(['ArrowRight', 'd'], (pressed) => (keys.current.right = pressed));

	const leftButton = document.getElementById('leftButton');

	if (leftButton && leftButton.className !== 'listener') {
		leftButton.addEventListener('touchstart', () => {
			keys.current.left = true;
			leftButton.classList.add('listener');
		});
		leftButton.addEventListener('touchend', () => {
			keys.current.left = false;
		});
	}

	const rightButton = document.getElementById('rightButton');

	if (rightButton && rightButton.className !== 'listener') {
		rightButton.addEventListener('touchstart', () => {
			keys.current.right = true;
			rightButton.classList.add('listener');
		});
		rightButton.addEventListener('touchend', () => {
			keys.current.right = false;
		});
	}

	return keys;
}

function useKeys(target, event) {
	useEffect(() => {
		const downHandler = ({ key }) => target.indexOf(key) !== -1 && event(true);
		const upHandler = ({ key }) => target.indexOf(key) !== -1 && event(false);

		window.addEventListener('keydown', downHandler);
		window.addEventListener('keyup', upHandler);

		return () => {
			window.removeEventListener('keydown', downHandler);
			window.removeEventListener('keyup', upHandler);
		};
	}, []);
}

export default useControls;
