import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProviderContext } from '../../providers';
import { Tooltip } from "@chakra-ui/tooltip";

import { Avatar, ImageProfileBig, ButtonEditAvatar } from './styles';

const ContentAvatar = () => {
	const { profile, profiles, baseUrlApi } = useContext(ProviderContext);

	return (
		<Avatar>			
				{profile && (
					<Link to="/home">
						<Tooltip label='Cambiar Personaje' placement='auto-start' className='toolTip' width="180px">
							<ImageProfileBig
								className="step-14"
								src={
									baseUrlApi +
									profiles.filter((element) => element.id === profile)[0]
										.imagen_avatar
								}
								alt=""
							/>
						</Tooltip>
					</Link>
				)}
				<Link to="/home">
					<Tooltip label='Cambiar Personaje' placement='auto-start' className='toolTip spacetooltip' width="180px">
						<ButtonEditAvatar />
					</Tooltip>
				</Link>
		</Avatar>
	);
};

export default ContentAvatar;
