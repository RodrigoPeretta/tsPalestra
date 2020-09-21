namespace Views {
    export class ComprasView extends View<Compras> {
        @logarTempo()
        template(model: Compras): string {
    
            return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>Desconto</th>
                        <th>Valor Total</th>
                    </tr>
                </thead>
    
                <tbody>
                    ${model.toArray().map(compra => 
                        `
                        <tr>
                            <td>${compra.produto}</td>
                            <td>${compra.data.getDate()}/${compra.data.getMonth()+1}/${compra.data.getFullYear()}</td>
                            <td>${compra.valor}</td>
                            <td>${compra.desconto}</td>
                            <td>${compra.valorTotal}</td>
                        </tr>                        
                    `).join('')}  
                </tbody>
    
                <tfoot>
                </tfoot>
            </table>               
            `
        }
    }
}
