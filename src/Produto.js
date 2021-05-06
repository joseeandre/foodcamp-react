import pedido from "./Pedido";
export default function Produto(produto) {
  let classe = "opcao " + produto.id;
  let buscarClasse = "." + produto.id;

  function selecionarPrato() {
    const selecionado = document.querySelector(buscarClasse);
    const quantidade = selecionado.querySelector(".quantidade");
    if (!selecionado.classList.contains("selecionado")) {
      pedido.prato.push({
        nome: produto.nome,
        preco: produto.preco,
        quantidade: 1,
      });
      selecionado.classList.add("selecionado");
    } else {
      if (quantidade.innerHTML === "0") {
        const remover = document.querySelector(buscarClasse);
        remover.classList.remove("selecionado");
        quantidade.innerHTML = "1";
      }
    }

    habilitarBotaoSePedidoCompleto();
  }

  function selecionarBebida() {
    const selecionado = document.querySelector(buscarClasse);
    const quantidade = selecionado.querySelector(".quantidade");
    if (!selecionado.classList.contains("selecionado")) {
      pedido.bebida.push({
        nome: produto.nome,
        preco: produto.preco,
        quantidade: 1,
      });
      selecionado.classList.add("selecionado");
    } else {
      if (quantidade.innerHTML === "0") {
        const remover = document.querySelector(buscarClasse);
        remover.classList.remove("selecionado");
        quantidade.innerHTML = "1";
      }
    }

    habilitarBotaoSePedidoCompleto();
  }

  function selecionarSobremesa() {
    const selecionado = document.querySelector(buscarClasse);
    const quantidade = selecionado.querySelector(".quantidade");
    if (!selecionado.classList.contains("selecionado")) {
      pedido.sobremesa.push({
        nome: produto.nome,
        preco: produto.preco,
        quantidade: 1,
      });
      selecionado.classList.add("selecionado");
    } else {
      if (quantidade.innerHTML === "0") {
        const remover = document.querySelector(buscarClasse);
        remover.classList.remove("selecionado");
        quantidade.innerHTML = "1";
      }
    }

    habilitarBotaoSePedidoCompleto();
  }

  function habilitarBotaoSePedidoCompleto() {
    if (
      pedido.prato.length > 0 &&
      pedido.bebida.length > 0 &&
      pedido.sobremesa.length > 0
    ) {
      const botao = document.querySelector(".fazer-pedido");
      botao.classList.add("ativo");
      botao.innerHTML = "Fechar pedido";
    } else {
      const botao = document.querySelector(".fazer-pedido");
      botao.classList.remove("ativo");
    }
  }

  function chamarComParametro() {
    if (produto.tipo === "bebidas") {
      selecionarBebida();
    } else if (produto.tipo === "pratos") {
      selecionarPrato();
    } else if (produto.tipo === "sobremesas") {
      selecionarSobremesa();
    }
  }

  function adicionarItem(opcao, nome, categoria) {
    const classeAdicionar = "." + opcao;
    const adicionar = document.querySelector(classeAdicionar);
    const quantidade = adicionar.querySelector(".quantidade");
    let counter = parseInt(quantidade.innerHTML);
    counter += 1;
    quantidade.innerHTML = counter.toString();
    let refeicao = categoria.slice(0, -1);

    for (let i = 0; i < pedido[refeicao].length; i++) {
      if (nome === pedido[refeicao][i].nome) {
        pedido[refeicao][i].quantidade = counter;
      }
    }
  }

  function removerItem(opcao, nome, categoria) {
    const classeAdicionar = "." + opcao;
    const adicionar = document.querySelector(classeAdicionar);
    const quantidade = adicionar.querySelector(".quantidade");
    let counter = parseInt(quantidade.innerHTML);
    counter -= 1;
    quantidade.innerHTML = counter.toString();
    let refeicao = categoria.slice(0, -1);

    for (let i = 0; i < pedido[refeicao].length; i++) {
      if (nome === pedido[refeicao][i].nome) {
        pedido[refeicao][i].quantidade = counter;
        if (pedido[refeicao][i].quantidade <= 0) {
          pedido[refeicao].splice(i, 1);
        }
      }
    }
  }

  function passarIdAdicionar() {
    adicionarItem(produto.id, produto.nome, produto.tipo);
  }

  function passarIdRemover() {
    removerItem(produto.id, produto.nome, produto.tipo);
  }

  return (
    <div class={classe} onClick={chamarComParametro}>
      <img src={produto.foto} />
      <div class="titulo">{produto.nome}</div>
      <div class="descricao">{produto.descricao}</div>
      <div class="preco">R$ {produto.preco}</div>
      <div class="check">
        <ion-icon name="checkmark-circle"></ion-icon>
        <div class="adicionar-item">
          <ion-icon name="remove-circle" onClick={passarIdRemover}></ion-icon>
          <div class="quantidade">1</div>
          <ion-icon name="add-circle" onClick={passarIdAdicionar}></ion-icon>
        </div>
      </div>
    </div>
  );
}
