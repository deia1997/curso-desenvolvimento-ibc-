export class AreaRestrita {
  constructor(nome, email, mensagem) {
    this.nome = nome;
    this.email = email;
    this.mensagem = mensagem;
    this.id = crypto.randomUUID();
  }

  cadastrar() {
    const lista = JSON.parse(localStorage.getItem("listaAreaRestrita") || "[]");
    lista.push(this);
    localStorage.setItem("listaAreaRestrita", JSON.stringify(lista));
  }

  static listar() {
    const lista = JSON.parse(localStorage.getItem("listaAreaRestrita") || "[]");
    return lista;
  }

  static excluir(id) {
    let lista = JSON.parse(localStorage.getItem("listaAreaRestrita") || "[]");
    lista = lista.filter(area => area.id !== id);
    localStorage.setItem("listaAreaRestrita", JSON.stringify(lista));
  }
}
