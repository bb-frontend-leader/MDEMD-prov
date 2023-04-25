import { useState, Suspense, lazy } from "react";
import { ContainerPage, ImageLoading } from "./styles";

import logo from "../../../src/assets/img/icons/logo.webp";
import loading from "../../../src/assets/img/loading.webp";

const Loading = () => {
  return (
    <ContainerPage>
      <img src={logo} alt="" />
      <p>Cargando ...</p>
      <ImageLoading src={loading} alt="" />
    </ContainerPage>
  );
};

export default Loading;
