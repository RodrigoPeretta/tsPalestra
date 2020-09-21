class CompraController {
    constructor() {
        this._inputProduto = document.querySelector('#produto');
        this._inputData = document.querySelector('#data');
        this._inputDesconto = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const compra = new Compra(this._inputProduto.value, new Date(this._inputData.value.replace('-', ',')), parseFloat(this._inputValor.value), parseFloat(this._inputDesconto.value));
        console.log(compra.valor + 10);
    }
}
