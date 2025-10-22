import { AreaRestrita } from "./classes/areaRestrita.js";

window.onload = () => {
  carregarTabela();
}

function carregarTabela() {
  const lista = AreaRestrita.listar();
  const tabela = document.getElementById("login") as HTMLTableElement;

  tabela.innerHTML = `
    <tr>
      <th>E-mail</th>
      <th>Data e Hora do Acesso</th>
      <th>Ações</th>
    </tr>
  `;

  lista.forEach(item => {
    const linha = tabela.insertRow();
    linha.insertCell().textContent = item.email;
    linha.insertCell().textContent = item.dataHora;

    const celAcoes = linha.insertCell();
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.addEventListener("click", () => {
      excluirAcesso(item.id);
    });
    celAcoes.appendChild(btnExcluir);
  });
}

function excluirAcesso(id: string) {
  if (confirm("Deseja realmente excluir esse registro?")) {
    AreaRestrita.excluir(id);
    carregarTabela();
  }
}
