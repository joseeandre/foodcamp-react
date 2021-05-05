export default function Sobremesa() {
  return (
    <div class="secao">
      <div class="titulo">Por fim, sua sobremesa</div>
      <div class="opcoes sobremesas">
        <div
          class="opcao sobremesa-pudim"
          onclick="selecionarSobremesa('.sobremesa-pudim', 'Pudim', 7.90)"
        >
          <img src="img/pudim.png" />
          <div class="titulo">Pudim</div>
          <div class="descricao">Apenas um pudim</div>
          <div class="preco">R$ 7,90</div>
          <div class="check">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
        </div>

        <div
          class="opcao sobremesa-mousse"
          onclick="selecionarSobremesa('.sobremesa-mousse', 'Mousse', 6.90)"
        >
          <img src="img/pudim.png" />
          <div class="titulo">Mousse</div>
          <div class="descricao">Cremoso, gostoso</div>
          <div class="preco">R$ 6,90</div>
          <div class="check">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
        </div>

        <div
          class="opcao sobremesa-brownie"
          onclick="selecionarSobremesa('.sobremesa-brownie', 'Brownie', 4.90)"
        >
          <img src="img/pudim.png" />
          <div class="titulo">Brownie</div>
          <div class="descricao">É um bolinho</div>
          <div class="preco">R$ 4,90</div>
          <div class="check">
            <ion-icon name="checkmark-circle"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
