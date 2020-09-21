var Views;
(function (Views) {
    function logarTempo() {
        return function (target, propertyKey, description) {
            const original = description.value;
            description.value = function (...args) {
                let t1 = performance.now();
                const retorno = original.apply(this, args);
                let t2 = performance.now();
                console.log(`Executou em ${t2 - t1} ms`);
                return retorno;
            };
        };
    }
    Views.logarTempo = logarTempo;
})(Views || (Views = {}));
