import "./App.css";
import Categoria from "../src/components/Categoria/Categoria.jsx";
import Cabecalho from "../src/components/Cabecalho/Cabecalho.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Cabecalho/>
        <Categoria/>
        <Categoria/>
        <Categoria/>
      </div>
    </>
  );
}

export default App;
