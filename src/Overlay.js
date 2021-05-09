import App from "./App";
import ReactDOM from "react-dom";
import pedido from "./Pedido";
import Item from "./Item";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Overlay() {
  let precoTotal = 0;
  for(let i = 0; i < pedido.prato.length; i++) {
    precoTotal += parseFloat(pedido.prato[i].quantidade)*parseFloat(pedido.prato[i].preco)
  }

  for(let i = 0; i < pedido.bebida.length; i++) {
    precoTotal += parseFloat(pedido.bebida[i].quantidade)*parseFloat(pedido.bebida[i].preco)
  }

  for(let i = 0; i < pedido.sobremesa.length; i++) {
    precoTotal += parseFloat(pedido.sobremesa[i].quantidade)*parseFloat(pedido.sobremesa[i].preco)
  }

  function enviarPedido() {
    let pratos = "";
    let bebidas = "";
    let sobremesas = "";
    for(let i = 0; i < pedido.prato.length; i++){
      pratos += (" " + pedido.prato[i].nome + ": " + pedido.prato[i].quantidade +"\n");
    }
    for(let i = 0; i < pedido.bebida.length; i++){
      bebidas +=(" " + pedido.bebida[i].nome + ": " + pedido.bebida[i].quantidade +"\n");
    }
    for(let i = 0; i < pedido.sobremesa.length; i++){
      sobremesas += (" " + pedido.sobremesa[i].nome + ": " + pedido.sobremesa[i].quantidade +"\n");
    }


    const mensagem =
      "Olá, gostaria de fazer o pedido:\n- Prato: " +
      pratos +
      "\n- Bebida: " +
      bebidas +
      "\n- Sobremesa: " +
      sobremesas +
      "\nTotal: R$ " +
      precoTotal.toFixed(2);
    const mensagemFormatada = encodeURIComponent(mensagem);
    const url = "https://wa.me/5512981253244?text=" + mensagemFormatada;
    window.open(url);
  }

  function cancelarPedido() {
    ReactDOM.render(<App />, document.querySelector(".root"));
  }

  return (
    <div class="overlay">
      <div class="confirmar-pedido">
        <div class="titulo">Confirme seu pedido</div>
        <ul>
          {pedido.prato.map(item => <Item nome={item.nome} preco={item.preco} quantidade={item.quantidade} />)}
          {pedido.bebida.map(item => <Item nome={item.nome} preco={item.preco} quantidade={item.quantidade} />)}
          {pedido.sobremesa.map(item => <Item nome={item.nome} preco={item.preco} quantidade={item.quantidade} />)}  
          <li class="total">
            <div>Total</div>
            <div>R$ {precoTotal.toFixed(2)}</div>
          </li>
        </ul>
        <button class="confirmar" onClick={enviarPedido}>
          Tudo certo, pode pedir!
        </button>
        <Link to="/">
          <button class="cancelar" onClick={cancelarPedido}>
            Cancelar
          </button>
        </Link>
      </div>
    </div>
  );
}
