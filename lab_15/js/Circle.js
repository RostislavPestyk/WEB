class Circle extends GeometricFigure {
    constructor(S) {
        super();
        this.S = S;
    }

    getArea() {
        return Math.sqrt(this.S / Math.PI); // обчислюємо радіус
    }
}