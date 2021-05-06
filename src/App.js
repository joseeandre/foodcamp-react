import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Overlay from "./Overlay";
import Header from "./Header";
import Categoria from "./Categoria";
import Footer from "./Footer";

const categorias = [{name: "pratos", description: "Primeiro, seu prato", options: [{name: "Frango Yin Yang", description: "Um pouco de batata, um pouco de salada", image: "img/frango_yin_yang.png", price: "14.90", id: "prato-frango"}, {name: "Carne Yin Yang", description: "Um pouco de batata, um pouco de salada", image: "img/frango_yin_yang.png", price: "17.90", id: "prato-carne"}, {name: "Peixe Yin Yang", description: "Um pouco de batata, um pouco de salada", image: "img/frango_yin_yang.png", price: "16.90", id: "prato-peixe"}]}, {name: "bebidas", description: "Agora, sua bebida", options: [{name: "Coquinha gelada", description: "Lata 350 ml", image: "img/coquinha_gelada.png", price: "6.90", id: "bebida-coca"}, {name: "Coquinha gelada", description: "Lata 350 ml", image: "img/coquinha_gelada.png", price: "4.90", id: "bebida-guarana"}, {name: "Suquinho gelado", description: "500 ml", image: "img/coquinha_gelada.png", price: "7.90", id: "bebida-suco"}]}, {name: "sobremesas", description: "Por fim, sua sobremesa", options: [{name: "Pudim", description: "Apenas um pudim", image: "img/pudim.png", price: "7.90", id: "sobremesa-pudim"}, {name: "Mousse", description: "Cremoso e gostoso", image: "img/pudim.png", price: "6.90", id: "sobremesa-mousse"}, {name: "Brownie", description: "É um bolinho", image: "img/pudim.png", price: "4.90", id: "sobremesa-brownie"}]}];

export default function App() {
  return (
    <Router>
      <Header />
      <div class="menu">
        {categorias.map(item => <Categoria nome={item.name} descricao={item.description} produtos={item.options}/>)}
      </div>
      <Footer />

      <Switch>
        <Route path="/revisar">
          <Overlay />
        </Route>
      </Switch>
    </Router>
  );
}
