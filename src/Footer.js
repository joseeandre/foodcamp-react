import App from "./App";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Footer() {
  function confirmarPedido() {
    ReactDOM.render(<App />, document.querySelector(".root"));
  }

  return (
    <Link to="/revisar">
      <div class="footer">
        <a href="#" class="fazer-pedido" onClick={confirmarPedido}>
          Selecione os 3 itens
          <br />
          para fechar o pedido
        </a>
      </div>
    </Link>
  );
}
