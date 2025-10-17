export class Form {
    constructor(nome, email, mensagem) {
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
        this.id = crypto.randomUUID();
    }
    cadastrar() {
        const listaForm = JSON.parse(localStorage.getItem("listaForm") || "[]");
        listaForm.push(this);
        localStorage.setItem("listaForm", JSON.stringify(listaForm));
    }
    static listar() {
        return JSON.parse(localStorage.getItem("listaForm") || "[]");
    }
    static buscar(id) {
        const lista = Form.listar();
        return lista.find(form => form.id === id);
    }
    static alterar(formAlterado) {
        let listaForm = JSON.parse(localStorage.getItem("listaForm") || "[]");
        listaForm = listaForm.map(form => {
            if (form.id === formAlterado.id) {
                return formAlterado;
            }
            return form;
        });
        localStorage.setItem("listaForm", JSON.stringify(listaForm));
    }
    static excluir(id) {
        let listaForm = JSON.parse(localStorage.getItem("listaForm") || "[]");
        listaForm = listaForm.filter(form => form.id !== id);
        localStorage.setItem("listaForm", JSON.stringify(listaForm));
    }
}
