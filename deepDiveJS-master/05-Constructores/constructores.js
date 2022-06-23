class CalculadoraNPI {
    constructor () {
      this.num1 = undefined;
      this.num2 = undefined;
      this.valor_interno = 0;
    }
  
    agregar (num) {
      if (this.num1 == undefined) {
        this.num1 = num;
      } else {
        this.num2 = num;
      }
    }
  
    sumar () {
      this.valor_interno = this.num1 + this.num2;
    }

    restar(){
        this.valor_interno = this.num1 - this.num2;
    }

    multiplicar(){
        this.valor_interno = this.num1 * this.num2;
    }
    dividir(){
        this.valor_interno = this.num1 / this.num2;
    }
  
    valor () {
      return this.valor_interno;
    }
  }