import "./Categoria.css";
import Produto from "../Produto/Produto.jsx";

function Categoria({categ}) {
  return (
    <div className="categoria">
      <h2>{categ}</h2>
      <Produto/>
      <Produto/>
      <Produto/>
    </div>
  );
}

export default Categoria;
