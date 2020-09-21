
class Compra {
    constructor(readonly produto: string, 
        readonly data: Date, 
        readonly valor: number, 
        readonly desconto: number = 0){
    }

    get valorTotal() {
        return this.valor - (this.valor * (this.desconto / 100));
    }
}
