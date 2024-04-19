import React, { useState } from "react";
import "./componentsStyle.css";

export default function NumAleatorio(props) {
  const { min, max } = props;
  const [aleatorio, setAleatorio] = useState(0);

  const gerarNumeroAleatorio = () => {
    const novoAleatorio = parseInt(Math.random() * (max - min) + min);
    setAleatorio(novoAleatorio);
  };

  return (
    <div>
      Mínimo: {min}
      <p>Máximo: {max}</p>
      <p>Gerado: {aleatorio}</p>
      <button onClick={gerarNumeroAleatorio} className="botao-gerar">
        Gerar Novo Número
      </button>
    </div>
  );
}
