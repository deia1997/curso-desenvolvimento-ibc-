import { AreaRestrita } from "./classes/AreaRestrita.js";

const formContato = document.getElementById("formContato");
const txtNome = document.getElementById("txtNome");
const txtEmail = document.getElementById("txtEmail");
const txtMensagem = document.getElementById("txtMensagem");
const btnEnviar = document.getElementById("btnEnviar");
const btnLimpar = document.getElementById("btnLimpar");
const divMensagem = document.getElementById("divMensagem");

const areasRestritas = [];

function exibirMensagem(color, msg) {
  divMensagem.style.color = color;
  divMensagem.textContent = msg;
}

formContato.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = txtNome.value.trim();
  const email = txtEmail.value.trim();
  const mensagem = txtMensagem.value.trim();

  if (!nome || !email || !mensagem) {
    exibirMensagem("red", "Todos os campos são obrigatórios!");
    return;
  }

  const areaRestrita = new AreaRestrita(nome, email, mensagem);
  areaRestrita.cadastrar();
  exibirMensagem("green", "Mensagem enviada com sucesso!");
  formContato.reset();
});

btnLimpar.addEventListener("click", (event) => {
  event.preventDefault();
  formContato.reset();
  divMensagem.textContent = "";
});
