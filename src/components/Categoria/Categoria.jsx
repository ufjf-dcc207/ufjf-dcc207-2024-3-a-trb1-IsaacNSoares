import "./Categoria.css";
import Produto from "../Produto/Produto.jsx";

function Categoria() {
  return (
    <div className="categoria">
      <h2>Categoria 1</h2>
      <Produto/>
      <Produto/>
      <Produto/>
    </div>
  );
}

export default Categoria;
