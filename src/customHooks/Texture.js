import { useTexture } from '@react-three/drei';
import { LinearFilter, LinearMipmapLinearFilter } from 'three';

export default function _Texture() {}

export function useSRGBTexture(path, flip, minFilter, magFilter) {
	const result = useTexture(path);

	if (result) {
		if (Array.isArray(result)) {
			return result.map((texture) => {
				texture.minFilter = minFilter ?? LinearMipmapLinearFilter;
				texture.magFilter = magFilter ?? LinearFilter;
				texture.encoding = 3001;
				texture.flipY = flip;
				return texture;
			});
		} else {
			result.minFilter = minFilter ?? LinearMipmapLinearFilter;
			result.magFilter = magFilter ?? LinearFilter;
			result.encoding = 3001;
			result.flipY = flip;
			return result;
		}
	}

	return undefined;
}
