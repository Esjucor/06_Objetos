class Ordenador {
    constructor(marca, modelo, memoria = 4, capacidadHD = 512, pulgadas = 17) {
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
        this.capacidadHD = capacidadHD;
        this.pulgadas = pulgadas;
    }
    toString(){
        return `marca: ${this.marca}, modelo: ${this.modelo}, memoria: ${this.memoria}, capacidadHD: ${this.capacidadHD}, pulgadas: ${this.pulgadas}`
    }
}

class Portatil extends Ordenador{
    constructor(marca, modelo, memoria = 4, capacidadHD = 256, pulgadas = 12, autonomia=4){
        super(marca, modelo, memoria, capacidadHD, pulgadas);
        this.autonomia = autonomia;
    }
    toString(){
        return `${super.toString()}, autonomia: ${this.autonomia}`;
    }

}

let Ordenador1 = new Ordenador("HP","520");
console.log(Ordenador1.toString());

let Portatil1 = new Portatil("Lenovo","ideapad330");
console.log(Portatil1.toString());