  /*
    HERENCIA
    Ejercicio en clase
  */
  class Auto {
    constructor(mar, mod, anio_fab, cant_puertas) {
      this.marca = mar;
      this.modelo = mod;
      this.anioFabricacion = anio_fab;
      this.cantidadPuertas = cant_puertas;
    }
    acelerar() {
      console.log("Acelerando...");
    }
    subirVidrios() {
      console.log("Subir vidrios...");
    }
  }

  class AutoGas extends Auto {
    acelerar() {
      console.log("Acelerando a gas...");
    }
  }

  class AutoNafta extends Auto {
    acelerar() {
      console.log("Acelerando a nafta...");
    }
  }

  class AutoElectrico extends Auto {
    acelerar() {
      console.log("Acelerando de forma eléctrica...");
    }
  }

  const a1 = new Auto("Toyota", "h77", 2010, 4);
  const a2 = new AutoGas("Toyota", "h77", 2010, 4);
  const a3 = new AutoNafta("Hyundai", "POQ1", 2012, 4);
  const a4 = new AutoElectrico("Chevrolet", "Spark", 2008, 2);
  a1.acelerar();
  a2.acelerar();
  a3.acelerar();
  a4.acelerar();

  /*
    Ejercicio asincrónico - Trabajando con Date()
  */
  function devolverFecha() {
    const fecha = new Date().getDay();
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const nombreDia = dias[fecha];
    alert(`El día de la semana es: "${nombreDia}"`);
  }