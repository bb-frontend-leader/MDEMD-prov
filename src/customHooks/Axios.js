import axios from 'axios';
import { useEffect, useState } from 'react';

import settings from '../containers/Game1/settings.json';

export default function _Axios() {}

const instance = axios.create({
	baseURL: settings['base-url'],
});

export function useFetch(url) {
	const [state, dispatch] = useState();

	useEffect(() => {
		instance.get(url).then((res) => dispatch(res.data));
	}, [url]);

	return state;
}
