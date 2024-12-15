import "./ListaCompras.css";
import Categoria from "../Categoria/Categoria.jsx";
import Cabecalho from "../Cabecalho/Cabecalho.jsx";

function ListaCompras() {
  return (
    <div className="container">
      <Cabecalho />
      <Categoria categ={"Livros"}/>
      <Categoria categ={"Música"}/>
      <Categoria categ={"Variados"}/>
    </div>
  );
}

export default ListaCompras;
