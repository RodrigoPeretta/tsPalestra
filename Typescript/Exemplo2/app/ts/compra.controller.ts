class CompraController {

    private _inputProduto: HTMLInputElement;
    private _inputData: HTMLInputElement;
    private _inputDesconto: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor() {

        this._inputProduto = <HTMLInputElement>document.querySelector('#produto');
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputDesconto = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    adiciona(event: Event) {

        event.preventDefault();

        const compra = new Compra(
            this._inputProduto.value,
            new Date(this._inputData.value.replace('-',',')),
            parseFloat(this._inputValor.value),
            parseFloat(this._inputDesconto.value));

        console.log(compra.valor + 10);
    }
}