import React, { useContext } from 'react';
import { ProviderContext } from '../../providers';

import ImageSign from './styles';

const Sign = ({ data, onClick, className, disabled }) => {
	const { baseUrlApi } = useContext(ProviderContext);

	return (
		<>
			{data.buttonProps && (
				<ImageSign
					className={className}
					top={data.buttonProps.top}
					left={data.buttonProps.left}
					src={baseUrlApi + data.imageButton}
					onClick={onClick}
					disabled={disabled}
				/>
			)}
		</>
	);
};

export default Sign;
