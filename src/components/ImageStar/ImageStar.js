import React, { useContext } from 'react';
import { ProviderContext } from '../../providers';

import StarImage from './styles';

const ImageStar = ({ data, className }) => {
	const { baseUrlApi } = useContext(ProviderContext);

	return (
		<>
			{data.startProps && (
				<StarImage
					className={className}
					top={data.startProps.top}
					left={data.startProps.left}
					scale={data.startProps.scale}
					rotate={data.startProps.rotate}
					src={
						data.completed === 1
							? baseUrlApi + data.start
							: baseUrlApi + data.startEmpty
					}
				/>
			)}
		</>
	);
};

export default ImageStar;
