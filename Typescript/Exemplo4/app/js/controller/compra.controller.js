class CompraController {
    constructor() {
        this._compras = new Compras();
        this._comprasView = new Views.ComprasView('#comprasView');
        this._mensagemView = new Views.MensagemView('#mensagemView');
        this._inputProduto = document.querySelector('#produto');
        this._inputData = document.querySelector('#data');
        this._inputValor = document.querySelector('#valor');
        this._inputDesconto = document.querySelector('#desconto');
        this._comprasView.update(this._compras);
    }
    adiciona(event) {
        event.preventDefault();
        const compra = new Compra(this._inputProduto.value, new Date(this._inputData.value.replace('-', ',')), parseInt(this._inputValor.value));
        this._compras.adiciona(compra);
        this._comprasView.update(this._compras);
        this._mensagemView.update('Produto adicionado com sucesso');
    }
}
