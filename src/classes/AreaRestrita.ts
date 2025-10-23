export class AreaRestrita {
  public id: string;

  constructor(
    public nome: string,
    public email: string,
    public mensagem: string
  ) {
    this.id = crypto.randomUUID();
  }

  cadastrar(): void {
    const lista: AreaRestrita[] = JSON.parse(localStorage.getItem("listaAreaRestrita") || "[]");
    lista.push(this);
    localStorage.setItem("listaAreaRestrita", JSON.stringify(lista));
  }

  static listar(): AreaRestrita[] {
    const lista: AreaRestrita[] = JSON.parse(localStorage.getItem("listaAreaRestrita") || "[]");
    return lista;
  }

  static excluir(id: string): void {
    let lista: AreaRestrita[] = JSON.parse(localStorage.getItem("listaAreaRestrita") || "[]");
    lista = lista.filter(area => area.id !== id);
    localStorage.setItem("listaAreaRestrita", JSON.stringify(lista));
  }
}
