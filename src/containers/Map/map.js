import { Link } from 'react-router-dom';
import { Tooltip } from '@chakra-ui/tooltip';
import { useNavigate } from 'react-router-dom';

import { ImageMark, ImageMap } from './styles';

function ImageMaps(props) {
	const { user, baseUrlApi } = props;
	const modules = user.modules.filter((module) => module.zoneAvailable > 0);
	const history = useNavigate();

	let finalImagebg = modules[0]['imagebg'];

	modules.map((element, index) => {
		if (index > 0) {
			if (element.zoneAvailable > 0 && modules[index - 1].zoneAvailable > 1) {
				finalImagebg = element['imagebg'];
			}
		}
	});

	const updateFocus = (e, id) => {
		if (e.key === 'Enter') {
			history(`/module/${id}`);
		}
	};

	return (
		<div>
			<ImageMap src={baseUrlApi + finalImagebg} alt="mapa" />
			{user.modules.map((module, index) => {
				if (module.zoneAvailable > 0 && index == 0) {
					return (
						<Link to={`/module/${module.moduleID}`} key={index}>
							<Tooltip
								label="Ingresar al módulo"
								placement="auto-start"
								className="toolTip"
							>
								<ImageMark
									className="step-11"
									top={module.markerProps.top}
									left={module.markerProps.left}
									src={
										module.zoneAvailable === 1
											? baseUrlApi + module.marker
											: baseUrlApi + module.markerComplete
									}
									alt=""
									onKeyDown={(e) => updateFocus(e, module.moduleID)}
									tabIndex={index + 3}
								/>
							</Tooltip>
						</Link>
					);
				}

				if (
					index > 0 &&
					module.zoneAvailable > 0 &&
					modules[index - 1].zoneAvailable > 1
				) {
					return (
						<Link to={`/module/${module.moduleID}`} key={index}>
							<ImageMark
								className="step-11"
								top={module.markerProps.top}
								left={module.markerProps.left}
								src={
									module.zoneAvailable === 1
										? baseUrlApi + module.marker
										: baseUrlApi + module.markerComplete
								}
								alt=""
							/>
						</Link>
					);
				}
			})}
		</div>
	);
}
export default ImageMaps;
