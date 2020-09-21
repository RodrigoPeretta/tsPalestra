class Compra {
    constructor(produto, data, valor, desconto = 0) {
        this.produto = produto;
        this.data = data;
        this.valor = valor;
        this.desconto = desconto;
    }
    get valorTotal() {
        return this.valor - (this.valor * (this.desconto / 100));
    }
}
