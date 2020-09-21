class CompraController {

    private _inputProduto: HTMLInputElement;
    private _inputData: HTMLInputElement;
    private _inputDesconto: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _compras = new Compras();

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
            parseInt(this._inputValor.value),
            parseInt(this._inputDesconto.value));

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