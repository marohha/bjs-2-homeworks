function parseCount(a){
    if(isNaN(Number.parseFloat(a))){
        throw new Error("Невалидное значение"); 
    }
    return Number.parseFloat(a);
}

function validateCount(b) {
    try {
        return parseCount(b);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;

        if((a + b) < c || a > (b + c) || (a + c) < b){
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return (this.a + this.b + this.c);
    }

    get area() {
        let p = 0.5 * (this.a + this.b + this.c);
            let s = Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
            return s;
    }   
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return Object.freeze({
            area: "Ошибка! Треугольник не существует",
            perimeter: "Ошибка! Треугольник не существует"
        });
        
    }

}

