import React, { useContext } from 'react';
import { ProviderContext } from '../../providers';

import Advice from './styles';

const ImageAdvice = ({ data }) => {

	const { baseUrlApi } = useContext(ProviderContext);

	return (
		<>
			{data.adviceProps && (
				<Advice
					top={data.adviceProps.top}
					left={data.adviceProps.left}
					scale={data.adviceProps.scale}
					src={baseUrlApi + data.imageAdvice}
				/>
			)}
		</>
	);

};

export default ImageAdvice;
