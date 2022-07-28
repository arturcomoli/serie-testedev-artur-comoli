import db from "./db.js";

class GenerateList {
  static ulNovidades = document.querySelector(".vitrine__novidades__lista");
  static ulDestaques = document.querySelector(".vitrine__destaques__lista");

  static card(img, titulo, preco, status, parcela) {
    const li = document.createElement("li");
    li.className = "vitrine__produto";
    li.innerHTML = `
    <a href="#">
        <div class="vitrine__link">
          <h3 class="vitrine__produto-comprar">COMPRA RÁPIDA</h3>
          ${
            status && `<span class="vitrine__produto-desconto">${status}</span>`
          }
          <img src="${img}" alt="" />
        </div>
    </a>
    <h4>${titulo}</h4>
    <span class="vitrine__produto__preco">R$ ${preco}</span>
    ${
      parcela
        ? `<span>${parcela}</span>`
        : `<span style="color: transparent">a</span>`
    }`;

    return li;
  }

  static novidadesList() {
    db.map(({ img, titulo, preco, status, parcela }) => {
      const produto = GenerateList.card(img, titulo, preco, status, parcela);
      return GenerateList.ulNovidades.appendChild(produto);
    });
  }

  static destaquesList() {
    db.map(({ img, titulo, preco, status, parcela }) => {
      const produto = GenerateList.card(img, titulo, preco, status, parcela);
      return GenerateList.ulDestaques.appendChild(produto);
    });
  }
}

GenerateList.novidadesList();
GenerateList.destaquesList();
