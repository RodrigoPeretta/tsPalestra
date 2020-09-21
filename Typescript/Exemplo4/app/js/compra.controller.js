class CompraController {
    constructor() {
        this._compras = new Compras();
        this._inputProduto = document.querySelector('#produto');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const compra = new Compra(this._inputProduto.value, new Date(this._inputData.value.replace('-', ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._compras.adiciona(compra);
    }
}
