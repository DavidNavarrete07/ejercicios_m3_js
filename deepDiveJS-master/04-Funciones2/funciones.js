function concatenar(){
    let string  = ''
    for (palabra of arguments) {
        string += palabra;
    }
    return string
}

function invocarFunciones(callback, otraF){
    if(otraF != undefined){
        return callback() + otraF();
    }else{
        return callback();
    }
}

function creadorDeIncrementos(incremento){
    return function(num){
         return num + incremento;
    }
}


function invocacionUnica(func){
    let contador = 0;
    return function incrementar(){
        if(contador == 0){
            func();
            contador++;
        }
    }
}

function objetoConClousure(){
    let valor = 0;
    return objeto = {
        incremento(){
            valor++;
            return valor;
        },
        incrementoPor10(){
            valor+=10;
            return valor;
        },
        pedirValor(){
            return valor;
        },
        cambiarValor(num){
            valor = num;
            return valor;
        }
    }
}

function ListaDeFuncionesInvitados(arreglo, cod){
    const arrFunciones = [];
    for (let nombre of arreglo) {
        arrFunciones.push(function(intentoCod){
            if(intentoCod == cod){
                return nombre;
            }
            return "código secreto: invalido";
        });
    }
    return arrFunciones;
}