import styled from "styled-components";
import background from "../../assets/img/Login/Fondo.webp";
import cursor from "../../assets/img/Login/Puntero.webp";
import celular from "../../assets/img/icons/phone.png";
import send from '../../assets/img/Login/btn_ingresar.webp';

const RotateScreen = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  font-family: 'Dimbo';
  font-size: 1.5rem;
`

const ImageRotate = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${celular});
  background-size: cover;
  animation: rotating 2s linear infinite alternate;

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(90deg);
    }
  }
`

const ContainerPage = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;  
  background-image: url(${background});
  background-position: center center;
  background-size: cover;

`;

const LoginLeft = styled.div`
  width: 63%;
  img {
    width: 80%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const LoginRight = styled.div`
  width: 37%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const EncapLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;
  height: 60%;
  background-color: white;
  padding: 10%;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1), -2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  a {
    text-align: end;
    color: #B6B6B6;
    font-family: sans-serif;
    font-weight: bold;
    text-decoration: none;
  }
`;

const LoginSend = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 150px;
  height: 50px;
  background: none;
  background-image: url(${send});
  background-size: cover;
  &:hover {
		cursor: pointer;
		cursor: url(${cursor}), auto;
  }
  margin-top: -5%;
`;

const InputText = styled.input`
  font-weight: bold;
  min-height: 15%;
  border-radius: 5px;
  padding: 0 10px;
  background-color: #F6F6F6;
`;

export { RotateScreen, ImageRotate, ContainerPage, LoginLeft, LoginRight, LoginSend, EncapLogin, InputText };
