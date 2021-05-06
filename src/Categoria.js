import Produto from "./Produto";

export default function Categoria(categoria) {
  let classe = "opcoes " + categoria.nome;
  return (
    <div class="secao">
      <div class="titulo">{categoria.descricao}</div>
      <div class={classe}>
        {categoria.produtos.map(item => <Produto tipo={categoria.nome}  nome={item.name} preco={item.price} id={item.id} descricao={item.description} foto={item.image} />)}
      </div>
    </div>
  );
}
