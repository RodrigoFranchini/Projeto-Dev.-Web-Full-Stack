export default function Informacoes(props) {
  return (
    <div>
      <div className="Nome">Nome: {props.nome}</div>
      <div className="Faculdade"><p>Faculdade: {props.faculdade}</p></div>
      <div className="Curso"><p>Curso: {props.curso}</p></div>
    </div>
  );
}
