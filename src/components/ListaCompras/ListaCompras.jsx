import "./ListaCompras.css";
import Categoria from "../Categoria/Categoria.jsx";
import Cabecalho from "../Cabecalho/Cabecalho.jsx";

function ListaCompras() {
  return (
    <div className="container">
      <Cabecalho />
      <Categoria />
      <Categoria />
      <Categoria />
    </div>
  );
}

export default ListaCompras;
