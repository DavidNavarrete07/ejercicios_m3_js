// Test objetos
function setPropsOnObj(obj) {
    obj.p = 5;
    obj['plataforma'] = 5;

    obj['proximo'] = num => {
        if (num) {
            return num + 1;
        }
    }
    obj.la = {
        clave: {
            secreta: {
                es: 404
            }
        }
    }
}

// Test arreglos
function setPropsOnArr(array){
    array['hola'] = () =>{
        return "Hola!";
    }
    array['river'] = 'plate';
    array[0] = 5;
    array['doble'] = num => {
        return num * 2;
    }
}

// Test funciones
functionObject = function() {
    return 'Soy una función con propiedades!';
};

function setPropsOnFunc(functionObject){
    functionObject['year'] = '2017';
    functionObject['mitad'] = num => {
        return num/2;
    }
    functionObject.prototype.helloWorld = function(){
        return "Hello World";
    }
}