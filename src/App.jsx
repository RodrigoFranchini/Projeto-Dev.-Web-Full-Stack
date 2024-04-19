import "./App.css";
import NumAleatorio from "./components/NumAleatorio";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Informacoes from "./components/Informacoes";

function App() {
  return (
    <>
      <main id="cards">
        <h1>React</h1>
        <h2>Componentes - Número Aleatório, Informações e Cards</h2>
        <Card1 titulo="Card1 - Informações sobre mim">
          <Informacoes
            nome="Rodrigo Franchini Cecchin"
            faculdade="PUC Minas"
            curso="Ciências da Computação"
          ></Informacoes>
        </Card1>
        <Card2 titulo="Card2 - Geração de números aleatórios">
          <NumAleatorio min={0} max={50}></NumAleatorio>
        </Card2>
      </main>
    </>
  );
}
export default App;
