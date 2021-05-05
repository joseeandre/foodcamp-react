import pedido from "./Pedido";
export default function Produto(produto) {
  let classe = "opcao " + produto.id;
  let buscarClasse = "." + produto.id;

  function selecionarPrato(seletor, nome, preco) { 
    pedido.prato = nome;
    pedido.precoPrato = preco;
    selecionarItem(seletor, ".pratos");
  }

  function selecionarBebida(seletor, nome, preco) {
    pedido.bebida = produto.nome;
    pedido.precoBebida = produto.preco;
    selecionarItem(seletor, ".bebidas");
  }

  function selecionarSobremesa(seletor, nome, preco) {
    pedido.sobremesa = nome;
    pedido.precoSobremesa = preco;
    selecionarItem(seletor, ".sobremesas");
  }

  function selecionarItem(seletorClicado, seletorCategoria) {
    const seletorSelecionado = seletorCategoria + " .selecionado";
    const selecionado = document.querySelector(seletorSelecionado);

    if (selecionado !== null) {
      selecionado.classList.remove("selecionado");
    } else {
      pedido.contador += 1;
    }

    const opcao = document.querySelector(seletorClicado);
    opcao.classList.add("selecionado");

    habilitarBotaoSePedidoCompleto();
  }

  function habilitarBotaoSePedidoCompleto() {
    if (pedido.contador === 3) {
      const botao = document.querySelector(".fazer-pedido");
      botao.classList.add("ativo");
      botao.innerHTML = "Fechar pedido";
    }
  }

  function chamarComParametro() {
    if (produto.tipo === "bebidas") {
      selecionarBebida(buscarClasse, produto.nome, produto.preco);
    } else if (produto.tipo === "pratos") {
      selecionarPrato(buscarClasse, produto.nome, produto.preco);
    } else if (produto.tipo === "sobremesas") {
      selecionarSobremesa(buscarClasse, produto.nome, produto.preco);
    }
  }

  return (
    <div class={classe} onClick={chamarComParametro}>
      <img src={produto.foto} />
      <div class="titulo">{produto.nome}</div>
      <div class="descricao">{produto.descricao}</div>
      <div class="preco">R$ {produto.preco}</div>
      <div class="check">
        <ion-icon name="checkmark-circle"></ion-icon>
      </div>
    </div>
  );
}
