export class Matemagica{
    a: number;
    b: number;

    constructor(a: number, b: number){
        this.a = a;
        this.b = b;
    }

    getSoma(a, b): number{
        return this.a + this.b
    }

    getSubtracao(a, b): number{
        return this.a - this.b
    }

    getMultiplicacao(a, b): number{
        return this.a * this.b
    }

    getDivisao(a, b): number{
        return this.a / this.b
    }
}