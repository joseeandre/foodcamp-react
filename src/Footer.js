import App from "./App";
import ReactDOM from "react-dom";

export default function Footer() {
  function confirmarPedido() {
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove("escondido");
    ReactDOM.render(<App />, document.querySelector(".root"));
  }

  return (
    <div class="footer">
      <a href="#" class="fazer-pedido" onClick={confirmarPedido}>
        Selecione os 3 itens
        <br />
        para fechar o pedido
      </a>
    </div>
  );
}
