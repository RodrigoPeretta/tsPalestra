var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Views;
(function (Views) {
    class ComprasView extends Views.View {
        template(model) {
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
                    ${model.toArray().map(compra => `
                        <tr>
                            <td>${compra.produto}</td>
                            <td>${compra.data.getDate()}/${compra.data.getMonth() + 1}/${compra.data.getFullYear()}</td>
                            <td>${compra.valor}</td>
                            <td>${compra.desconto}</td>
                            <td>${compra.valorTotal}</td>
                        </tr>                        
                    `).join('')}  
                </tbody>
    
                <tfoot>
                </tfoot>
            </table>               
            `;
        }
    }
    __decorate([
        Views.logarTempo()
    ], ComprasView.prototype, "template", null);
    Views.ComprasView = ComprasView;
})(Views || (Views = {}));
