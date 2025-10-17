import { Form } from "./form.js";

const form = document.getElementById("formulario");
const txtNome = document.getElementById("txtNome");
const txtEmail = document.getElementById("txtEmail");
const txtMensagem = document.getElementById("txtMensagem");
const btnEnviar = document.getElementById("btnEnviar");
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

    const botoes = document.querySelectorAll(".btnExcluir");
    botoes.forEach(botao => {
        botao.addEventListener
