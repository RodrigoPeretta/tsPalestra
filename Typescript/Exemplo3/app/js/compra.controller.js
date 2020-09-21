class CompraController {
    constructor() {
        this._compras = new Compras();
        this._inputProduto = document.querySelector('#produto');
        this._inputData = document.querySelector('#data');
        this._inputDesconto = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const compra = new Compra(this._inputProduto.value, new Date(this._inputData.value.replace('-', ',')), parseInt(this._inputValor.value), parseInt(this._inputDesconto.value));
        this._compras.adiciona(compra);
        this._compras.toArray().forEach(compra => {
            console.log(compra.produto);
            console.log(compra.data);
            console.log(compra.valor);
            console.log(compra.desconto);
            console.log(compra.valorTotal);
        });
    }
}
