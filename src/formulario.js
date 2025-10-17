import { Form } from "./form.js";

const form = document.getElementById("formulario");
const txtNome = document.getElementById("txtNome");
const txtEmail = document.getElementById("txtEmail");
const txtMensagem = document.getElementById("txtMensagem");
const btnLimpar = document.getElementById("btnLimpar");
const divMensagem = document.getElementById("divMensagem");
const tbody = document.getElementById("tabelaMensagens");

function exibirMensagem(cor, msg) {
  divMensagem.style.color = cor;
  divMensagem.textContent = msg;
}

function atualizarTabela() {
  const lista = Form.listar();
  tbody.innerHTML = "";
  lista.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.email}</td>
      <td>${item.mensagem}</td>
      <td><button class="btnExcluir" data-id="${item.id}">Excluir</button></td>
    `;
    tbody.appendChild(tr);
  });

  document.querySelectorAll(".btnExcluir").forEach(botao => {
    botao.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      if (id) {
        Form.excluir(id);
        atualizarTabela();
      }
    });
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = txtNome.value.trim();
  const email = txtEmail.value.trim();
  const mensagem = txtMensagem.value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    exibirMensagem("red", "Todos os campos são obrigatórios!");
    return;
  }

  const novo = new Form(nome, email, mensagem);
  novo.cadastrar();

  exibirMensagem("green", "Mensagem enviada com sucesso!");
  form.reset();
  atualizarTabela();
});

btnLimpar.addEventListener("click", (event) => {
  event.preventDefault();
  form.reset();
  divMensagem.textContent = "";
});

window.addEventListener("DOMContentLoaded", atualizarTabela);
