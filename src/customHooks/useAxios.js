import { useEffect, useState, useContext } from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';

import { ProviderContext } from '../providers';

const useAxios = ({ method, params, isWin }) => {
	const { user, baseUrlApi, competences, activities } = useContext(ProviderContext);
	const [data, setData] = useState();
	const { wsId } = params;

	useEffect(() => {
		if (isWin && user?.id) {
			const { id } = user;
			let finalParams = [
				{ key: 'PCO_WSOn', value: '1' },
				{ key: 'PCO_WSKey', value: 'X24B27XD7Q' },
				{ key: 'PCO_WSSecret', value: 'PDUOMAZEJQ' },
				{ key: 'estudiante_id', value: id },
				{ key: 'actividad_id', value: activities.id },
				{ key: 'competencia_id', value: competences.id },
				...params,
			];

			const stringParams = finalParams
				.map((element) => {
					return `${element.key}=${element.value}`;
				})
				.join('&');

			let url = `${baseUrlApi}index.php?${stringParams}`;
			axios[method](url).then((res) => {
				//console.log(res.data.data);
			});
		}
	}, [isWin]);

	return data;
};

/*
useAxios.propTypes = {
	isWin: PropTypes.bool.isRequired,
	method: PropTypes.string.isRequired,
};
*/

export default useAxios;
