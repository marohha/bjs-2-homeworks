function parseCount(a){
    let parse = Number.parseFloat(a);
    if(isNaN(parse)){
        throw new Error("Невалидное значение"); 
    }
    return parse;
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
        let p = (this.a + this.b + this.c)
        return p;
    }

    get area() {
        let p1 = 0.5 * p;
            let s = Number((Math.sqrt(p1 * (p1 - this.a) * (p1 - this.b) * (p1 - this.c))).toFixed(3));
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

