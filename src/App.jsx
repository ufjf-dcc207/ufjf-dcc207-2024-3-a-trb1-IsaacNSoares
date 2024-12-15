import "./App.css";
import Produto from "../src/components/Produto/Produto.jsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="cabecalho">
          <h1>Lista de Compras</h1>
        </div>
        <div className="categoria">
          <h2>Categoria 1</h2>
          <Produto/>
          <Produto/>
          <Produto/>
        </div>
        <div className="categoria">
          <h2 className="nomeCategoria">Categoria 2</h2>
          <Produto/>
          <Produto/>
          <Produto/>
        </div>
        <div className="categoria">
          <h2 className="nomeCategoria">Categoria 3</h2>
          <Produto/>
          <Produto/>
          <Produto/>
        </div>
      </div>
    </>
  );
}

export default App;
