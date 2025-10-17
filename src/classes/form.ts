export class Form {
  public id: string;

  constructor(
    public nome: string,
    public email: string,
    public mensagem: string
  ) {
    this.id = crypto.randomUUID();
    this.nome = nome;
    this.email = email;
    this.mensagem = mensagem;
  }

  cadastrar(): void {
    const listaForm: Form[] = JSON.parse(localStorage.getItem("listaForm") || "[]");
    listaForm.push(this);
    localStorage.setItem("listaForm", JSON.stringify(listaForm));
  }

  static listar(): Form[] {
    return JSON.parse(localStorage.getItem("listaForm") || "[]");
  }

  static buscar(id: string): Form | undefined {
    const lista = Form.listar();
    return lista.find(form => form.id === id);
  }

  static alterar(formAlterado: Form): void {
    let listaForm: Form[] = JSON.parse(localStorage.getItem("listaForm") || "[]");
    listaForm = listaForm.map(form => {
      if (form.id === formAlterado.id) {
        return formAlterado;
      }
      return form;
    });
    localStorage.setItem("listaForm", JSON.stringify(listaForm));
  }

  static excluir(id: string): void {
    let listaForm: Form[] = JSON.parse(localStorage.getItem("listaForm") || "[]");
    listaForm = listaForm.filter(form => form.id !== id);
    localStorage.setItem("listaForm", JSON.stringify(listaForm));
  }
}
