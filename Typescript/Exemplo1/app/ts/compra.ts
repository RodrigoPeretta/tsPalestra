class Compra {
    private _produto;
    private _valor;
    private _desconto;

    constructor(nomeProduto, valor, desconto){
        this._produto = nomeProduto
        this._valor = valor
        this._desconto = desconto
    }

    get produto() {
        return this._produto;
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
