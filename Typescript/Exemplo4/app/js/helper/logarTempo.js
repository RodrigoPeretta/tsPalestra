var Views;
(function (Views) {
    function logarTempo() {
        return function (target, propertyKey, descriptor) {
            const original = descriptor.value;
            descriptor.value = function (...args) {
                const t1 = performance.now();
                const retorno = original.apply(this, args);
                const t2 = performance.now();
                console.log(`Executou em ${t2 - t1}ms`);
                return retorno;
            };
            return descriptor;
        };
    }
    Views.logarTempo = logarTempo;
})(Views || (Views = {}));
