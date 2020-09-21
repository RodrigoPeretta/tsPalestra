class Compras {
    constructor() {
        this._compras = [];
    }
    adiciona(negociacao) {
        this._compras.push(negociacao);
    }
    toArray() {
        return [].concat(this._compras);
    }
}
