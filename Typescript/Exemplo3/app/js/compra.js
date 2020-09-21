class Compra {
    constructor(_nomeProduto, _data, _valor, _desconto) {
        this._nomeProduto = _nomeProduto;
        this._data = _data;
        this._valor = _valor;
        this._desconto = _desconto;
    }
    get produto() {
        return this._nomeProduto;
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
