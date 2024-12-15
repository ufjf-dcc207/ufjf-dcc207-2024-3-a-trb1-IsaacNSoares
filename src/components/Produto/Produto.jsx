import "./Produto.css";

function Produto({informacoes}) {
  return (
    <div className="produto">
      <img src={informacoes.imagem} alt={informacoes.nome} />
      <h3 className="nome">{informacoes.nome}</h3>
      <p className="descricao">{informacoes.descricao}</p>
      <p className="loja">{informacoes.loja}</p>
      <p className="preco">{informacoes.preco}</p>
    </div>
  );
}

export default Produto;
