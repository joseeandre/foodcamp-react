export default function Item(item) {
    return (
      <li class="sobremesa">
        <div class="nome">{item.nome}</div>
        <div class="quantidade">{item.quantidade}</div>
        <div class="preco">{item.preco}</div>
      </li>
    );
  }