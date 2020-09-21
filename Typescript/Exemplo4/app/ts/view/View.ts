namespace Views {
    export abstract class View<T> {
        protected _elemento: Element;
    
        constructor(seletor: string) {
    
            this._elemento = document.querySelector(seletor);
        }
    
        @logarTempo()
        update(model: T) {
            this._elemento.innerHTML = this.template(model);
        }
    
        abstract template(model: T): string;
    }
}
