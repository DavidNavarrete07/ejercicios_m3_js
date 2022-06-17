function crearCalculadora(){
    let valor = 0;
    const calculadora = {
        valor: function(){
            return valor;
        },
        sumar: function(num){
            valor += num;
            return valor;
        },
        restar: function(num){
            valor-=num;
            return valor;
        },
        reset: function(){
            valor = 0;
            return valor;
        }
    };
    return calculadora;
}