import App from "./App";
import ReactDOM from "react-dom";
import pedido from "./Pedido";

export default function Overlay() {
  const precoTotal =
    parseFloat(pedido.precoPrato) +
    parseFloat(pedido.precoBebida) +
    parseFloat(pedido.precoSobremesa);

  function enviarPedido() {
    const mensagem =
      "Olá, gostaria de fazer o pedido:\n- Prato: " +
      pedido.prato +
      "\n- Bebida: " +
      pedido.bebida +
      "\n- Sobremesa: " +
      pedido.sobremesa +
      "\nTotal: R$ " +
      precoTotal.toFixed(2);
    const mensagemFormatada = encodeURIComponent(mensagem);
    const url = "https://wa.me/5521999998844?text=" + mensagemFormatada;
    window.open(url);
  }

  function cancelarPedido() {
    const overlay = document.querySelector(".overlay");
    overlay.classList.add("escondido");
    ReactDOM.render(<App />, document.querySelector(".root"));
  }

  return (
    <div class="overlay escondido">
      <div class="confirmar-pedido">
        <div class="titulo">Confirme seu pedido</div>
        <ul>
          <li class="prato">
            <div class="nome">{pedido.prato}</div>
            <div class="preco">{pedido.precoPrato}</div>
          </li>
          <li class="bebida">
            <div class="nome">{pedido.bebida}</div>
            <div class="preco">{pedido.precoBebida}</div>
          </li>
          <li class="sobremesa">
            <div class="nome">{pedido.sobremesa}</div>
            <div class="preco">{pedido.precoSobremesa}</div>
          </li>
          <li class="total">
            <div>Total</div>
            <div>R$ {precoTotal.toFixed(2)}</div>
          </li>
        </ul>
        <button class="confirmar" onClick={enviarPedido}>
          Tudo certo, pode pedir!
        </button>
        <button class="cancelar" onClick={cancelarPedido}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
