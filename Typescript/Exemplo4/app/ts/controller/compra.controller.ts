class CompraController {

    private _inputProduto: HTMLInputElement;
    private _inputData: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _inputDesconto: HTMLInputElement;
    private _compras = new Compras();
    private _comprasView = new Views.ComprasView('#comprasView');
    private _mensagemView = new Views.MensagemView('#mensagemView');


    constructor() {

        this._inputProduto = <HTMLInputElement>document.querySelector('#produto');
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._inputDesconto = <HTMLInputElement>document.querySelector('#desconto');
        this._comprasView.update(this._compras);
    }

    adiciona(event: Event) {

        event.preventDefault();

        const compra = new Compra(
            this._inputProduto.value,
            new Date(this._inputData.value.replace('-',',')),
            parseInt(this._inputValor.value)
            );

        this._compras.adiciona(compra);

        this._comprasView.update(this._compras);

        this._mensagemView.update('Produto adicionado com sucesso');


    }
}