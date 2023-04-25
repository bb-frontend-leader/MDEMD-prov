import React, { useContext, useState } from 'react';
import { ProviderContext } from '../../providers';

import House from './styles';

const ImageHouse = ({ data, disabled }) => {
	const { baseUrlApi } = useContext(ProviderContext);

	return (
		<>
			{data.houseProps && (
				<House
					//className={ (!data2 && data0 > 1 && data0 < 6) ? 'inactive' : '' }
					disabled={disabled}
					className="step-15"
					top={data.houseProps.top}
					left={data.houseProps.left}
					scale={data.houseProps.scale}
					src={baseUrlApi + data.imageHouse}
				/>
			)}
		</>
	);
};

export default ImageHouse;
