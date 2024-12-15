import "./App.css";
import Categoria from "../src/components/Categoria/Categoria.jsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="cabecalho">
          <h1>Lista de Compras</h1>
        </div>
        <Categoria/>
        <Categoria/>
        <Categoria/>
      </div>
    </>
  );
}

export default App;
