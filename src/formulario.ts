import { AreaRestrita } from "./classes/AreaRestrita.js";

const formContato = document.getElementById("formContato") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
const txtMensagem = document.getElementById("txtMensagem") as HTMLTextAreaElement;
const btnEnviar = document.getElementById("btnEnviar") as HTMLButtonElement;
const btnLimpar = document.getElementById("btnLimpar") as HTMLButtonElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

function exibirMensagem(color: string, msg: string) {
  divMensagem.style.color = color;
  divMensagem.textContent = msg;
}

// Impede envio do formulário se os campos estiverem vazios
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

// Botão limpar
btnLimpar.addEventListener("click", (event) => {
  event.preventDefault();
  formContato.reset();
  divMensagem.textContent = "";
});
