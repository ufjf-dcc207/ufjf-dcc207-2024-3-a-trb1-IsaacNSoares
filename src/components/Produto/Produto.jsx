import "./Produto.css";

function Produto({informacoes}) {

  const valorerradonum = informacoes.preco
  const valorerradostr = valorerradonum.toString()
  const valorcorreto = valorerradostr.replace('.', ',')

  return (
    <div className="produto">
      <img src={informacoes.imagem} alt={informacoes.nome} />
      <h3 className="nome">{informacoes.nome}</h3>
      <p className="descricao">{informacoes.descricao}</p>
      <p className="loja">{informacoes.loja}</p>
      <p className="preco">R${valorcorreto}</p>
    </div>
  );
}

export default Produto;
