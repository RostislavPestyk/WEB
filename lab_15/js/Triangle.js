class Triangle extends GeometricFigure {
    constructor(b, c, sinA) {
        super();
        this.b = b;
        this.c = c;
        this.sinA = sinA;
    }

    getArea() {
        return 1 / 2 * this.b * this.c * Math.sin(this.sinA);
    }
}