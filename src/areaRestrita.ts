import { AreaRestrita } from "./classes/AreaRestrita.js";

window.onload = () => {
  carregarTabela();
}

function carregarTabela() {
  const lista = AreaRestrita.listar();
  const tabela = document.getElementById("login") as HTMLTableElement;

  tabela.innerHTML = `
    <tr>
      <th>Nome</th>
      <th>E-mail</th>
      <th>Mensagem</th>
      <th>Ações</th>
    </tr>
  `;

  lista.forEach(areaRestrita => {
    const linha = tabela.insertRow();
    linha.insertCell().textContent = areaRestrita.nome;
    linha.insertCell().textContent = areaRestrita.email;
    linha.insertCell().textContent = areaRestrita.mensagem;

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.addEventListener("click", () => {
      excluirArea(areaRestrita.id); // Corrigido para areaRestrita.id
    });

    linha.insertCell().appendChild(btnExcluir);
  });
}

function excluirArea(id: string) {
  AreaRestrita.excluir(id);
  carregarTabela();
}
