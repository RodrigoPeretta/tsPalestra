class Compra {
    constructor(nomeProduto, data, valor, desconto) {
        this._produto = nomeProduto;
        this._data = data;
        this._valor = valor;
        this._desconto = desconto;
    }
    get produto() {
        return this._produto;
    }
    get data() {
        return this._data;
    }
    get valor() {
        return this._valor;
    }
    get desconto() {
        return this._desconto;
    }
    get valorTotal() {
        return this._valor - (this._valor * (this._desconto / 100));
    }
}
