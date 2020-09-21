class Compras {

    private _compras: Compra[] = [];

    adiciona(negociacao: Compra): void {

        this._compras.push(negociacao);
    }

    toArray(): Compra[]{
        return [].concat(this._compras);
    }
}