import { Form } from "./classes/form.js";

const formContato = document.getElementById("formulario");
const txtNome = document.getElementById("txtNome");
const txtEmail = document.getElementById("txtEmail");
const txtMensagem = document.getElementById("txtMensagem");
const divMensagem = document.getElementById("divMensagem");

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

window.onload = () => {
    if (id) {
        const btns = formContato.querySelectorAll("#btnSubmit");
        btns[0].textContent = "Alterar";
        carregarDadosForm(id);
    }
};

function exibirMensagem(color, msg) {
    divMensagem.style.color = color;
    divMensagem.textContent = msg;
}

formContato.addEventListener("submit", (event) => {
    event.preventDefault();
    const target = event.submitter;

    if (target.textContent === "Limpar") {
        txtNome.value = "";
        txtEmail.value = "";
        txtMensagem.value = "";
        divMensagem.textContent = "";
        return;
    }

    const nome = txtNome.value;
    const email = txtEmail.value;
    const mensagem = txtMensagem.value;

    if (!id) {
        const form = new Form(nome, email, mensagem);
        form.cadastrar();
        exibirMensagem("green", "Formulário enviado com sucesso");
    } else {
        const formAlterado = new Form(nome, email, mensagem);
        formAlterado.id = id;
        Form.alterar(formAlterado);
        exibirMensagem("green", "Alteração realizada com sucesso");
    }
});

function carregarDadosForm(id) {
    const form = Form.buscarForm(id);
    if (form) {
        txtNome.value = form.nome;
        txtEmail.value = form.email;
        txtMensagem.value = form.mensagem;
    }
}
