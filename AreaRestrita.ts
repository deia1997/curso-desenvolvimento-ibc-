export class AreaRestrita {
  private static chave = "acessos";

  static listar(): { id: string; email: string; dataHora: string }[] {
    return JSON.parse(localStorage.getItem(AreaRestrita.chave) || "[]");
  }

  static salvar(item: { email: string; dataHora: string }): void {
    const lista = AreaRestrita.listar();
    const id = Date.now().toString();
    lista.push({ id, email: item.email, dataHora: item.dataHora });
    localStorage.setItem(AreaRestrita.chave, JSON.stringify(lista));
  }

  static excluir(id: string): void {
    const lista = AreaRestrita.listar().filter(i => i.id !== id);
    localStorage.setItem(AreaRestrita.chave, JSON.stringify(lista));
  }

  static limpar(): void {
    localStorage.removeItem(AreaRestrita.chave);
  }
}
