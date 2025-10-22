export class AreaRestrita {
  static chave = "acessos";

  static listar() {
    return JSON.parse(localStorage.getItem(AreaRestrita.chave) || "[]");
  }

  static salvar(item) {
    const lista = AreaRestrita.listar();
    const id = Date.now().toString();
    lista.push({ id, email: item.email, dataHora: item.dataHora });
    localStorage.setItem(AreaRestrita.chave, JSON.stringify(lista));
  }

  static excluir(id) {
    const lista = AreaRestrita.listar().filter(i => i.id !== id);
    localStorage.setItem(AreaRestrita.chave, JSON.stringify(lista));
  }

  static limpar() {
    localStorage.removeItem(AreaRestrita.chave);
  }
}
