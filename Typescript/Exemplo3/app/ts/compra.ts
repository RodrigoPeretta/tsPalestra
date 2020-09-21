
class Compra {
    constructor(private _nomeProduto: string, 
                private _data: Date, 
                private _valor: number, 
                private _desconto: number){
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
