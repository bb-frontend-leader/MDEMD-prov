import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

import { ProviderContext } from '../../providers';

import {
	ContainerPage,
	LoginLeft,
	LoginRight,
	LoginSend,
	EncapLogin,
	InputText,
} from './styles';

import logo from '../../assets/img/Login/Personajes.webp';
import login1 from '../../assets/img/Login/Logo.webp';
import imgerror from '../../assets/img/Login/ErrorLogin.webp';

function Login() {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const { baseUrlApi, updateUser, updatePassword } = useContext(ProviderContext);
	const history = useNavigate();

	const submit = () => {
		let url =
			baseUrlApi +
			`index.php?PCO_WSOn=1&PCO_WSKey=X24B27XD7Q&PCO_WSSecret=PDUOMAZEJQ&PCO_WSId=ConsultaEstudianteLogin&login=${user}&contrasena=${password}`;
		axios
			.get(url)
			.then(function (response) {
				if (response?.status == '200') {
					updateUser(response.data.data);
					updatePassword(password);
					history('/home');
				}
			})
			.catch(function (response) {
				Swal.fire({
					html: '<img src=' + imgerror + ' style=width:450px;>',
				});
			});
	};

	const remember = () => {
		Swal.fire({
			icon: 'success',
			title: 'Para cambio de contraseña',
			text: 'Por favor contacta tu docente.',
		});
	};

	const enterLogin = (e) => {
		if (e.key === 'Enter') {
			submit();
		}
	};

	return (
		<ContainerPage>
			<LoginLeft>
				<img src={logo} alt="" />
			</LoginLeft>
			<LoginRight>
				<EncapLogin>
					<img src={login1} alt="" />
					<InputText
						value={user}
						autoFocus
						placeholder="Usuario"
						onChange={(e) => setUser(e.target.value)}
					/>
					<InputText
						type="password"
						value={password}
						placeholder="Contraseña"
						onChange={(e) => setPassword(e.target.value)}
						onKeyDown={enterLogin}
					/>
					<a href="#" onClick={() => remember()}>
						¿Olvidó su contraseña?
					</a>
				</EncapLogin>
				<LoginSend onClick={() => submit()} />
			</LoginRight>
		</ContainerPage>
	);
}

export default Login;
