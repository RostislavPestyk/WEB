function calcRectangleArea(width, height) {

    if (width == String || height == String) {
        throw new Error("Ви ввели не вірні дані");
    }

    return width * height;
}

let res = 0;

try {
    res = calcRectangleArea(5, 5);
    console.log(res);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}