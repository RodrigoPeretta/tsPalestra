namespace Views {
    export function logarTempo(){
        return function(target: any, 
                        propertyKey: string,
                        description: PropertyDescriptor){
                            const original = description.value;
                            description.value = function(...args: any[]){
                                let t1 = performance.now();
                                const retorno = original.apply(this, args);
                                let t2 = performance.now();
                                console.log(`Executou em ${t2-t1} ms`);
                                return retorno;
                            }
                        }
    }
}