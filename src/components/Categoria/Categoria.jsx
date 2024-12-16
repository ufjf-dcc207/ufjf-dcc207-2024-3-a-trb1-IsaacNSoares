import "./Categoria.css";
import Produto from "../Produto/Produto.jsx";
import PROD from "../../produtos.json";

function Categoria({categ}) {

  const c = PROD.produtos.filter(info => (info.categoria == categ));

  return (
    <div className="categoria">
      <div className="titulo"><h2>{categ}</h2></div>
      <div className="cat">
        {c.map(info=>(
          <Produto key={info.nome} informacoes={info}/>
        ))}
      </div>
    </div>
  );
}

export default Categoria;
