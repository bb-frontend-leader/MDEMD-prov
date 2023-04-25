import { useState, useEffect } from 'react';

export default function _Audio() {}

export function useAudio(url) {
	const [audioPlayer] = useState(new Audio(url));
	const [state, setState] = useState(false);
	const [volume, setVolume] = useState(1);

	const play = (volume) => {
		setVolume(volume ?? 1);
		setState(true);
	};

	const pause = (volume) => {
		setVolume(volume ?? 1);
		setState(false);
	};

	const toggle = (volume) => {
		setVolume(volume ?? 1);
		setState(!state);
	};

	useEffect(() => {
		audioPlayer.volume = volume;
		state ? audioPlayer.play() : audioPlayer.pause();
	}, [state]);

	useEffect(() => {
		audioPlayer.addEventListener('ended', () => setState(false));
		return () => {
			audioPlayer.removeEventListener('ended', () => setState(false));
		};
	}, []);

	return { play, pause, toggle, isPlaying: state, volume };
}
