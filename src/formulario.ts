import { Form } from "./form.js";

const formContato = document.getElementById("formContato") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
const txtMensagem = document.getElementById("txtMensagem") as HTMLTextAreaElement;
const btnLimpar = document.getElementById("btnLimpar") as HTMLButtonElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;
const tabela = document.getElementById("tabelaMensagens") as HTMLTableElement;

function exibirMensagem(color: string, msg: string) {
  divMensagem.style.color = color;
  divMensagem.textContent = msg;
  setTimeout(() => (divMensagem.textContent = ""), 3000);
}

function renderizarTabela() {
  const lista = Form.listar();
  const tbody = tabela.querySelector("tbody") as HTMLTableSectionElement;
  tbody.innerHTML = "";

  lista.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.email}</td>
      <td>${item.mensagem}</td>
      <td><button data-id="${item.id}">Excluir</button></td>
    `;
    tbody.appendChild(tr);
  });

  tabela.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      if (id) {
        Form.excluir(id);
        renderizarTabela();
      }
    });
  });
}

formContato.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = txtNome.value;
  const email = txtEmail.value;
  const mensagem = txtMensagem.value;

  if (!nome || !email || !mensagem) {
    exibirMensagem("red", "Todos os campos são obrigatórios!");
    return;
  }

  const novoForm = new Form(nome, email, mensagem);
  novoForm.cadastrar();

  exibirMensagem("green", "Mensagem enviada com sucesso!");
  formContato.reset();
  renderizarTabela();
});

btnLimpar.addEventListener("click", () => {
  formContato.reset();
  divMensagem.textContent = "";
});

renderizarTabela();
