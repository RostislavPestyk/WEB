
// Неважлива фенкція. Служить для полегшеного запуску процесу демонстрації проекту
function prepare(){
    let startArray = [
        {name: "Coffe cup", volume: 150, material: "Porcelain", pictname: "coffe_cup.jpg"},
        {name: "Class coffe cup", volume: 225, material: "Glass", pictname: "coffee-cup-glass.jpg"},
        {name: "Cartons of coffeemakers", volume: 250, material: "Paper", pictname: "kartonnen-koffiebeker-250ml.jpg"},
        {name: "Metal mug", volume: 270, material: "Metal", pictname: "metal-mug-enamel.jpg"},
        {name: "Silicone cup", volume: 300, material: "Silicone", pictname: "silicone-cup-violet.jpg"},
        // {name: "Small coffe cup", volume: 75, material: "Porcelain", pictname: "small-coffe-75ml.jpg"},
        // {name: "Stainless steel cup.jpg", volume: 200, material: "Metal", pictname: "stainless-steel-drinking-cup.jpg"},
    ]
    
    localStorage.clear() //Очищуємо LocalStorage
    
    //Додаємо нові елементи в LocalStorage
    for (let i=0; i<startArray.length; i++) {   
        let row = startArray[i]
        let rowSt = JSON.stringify(row)
        localStorage.setItem(`${i}`, rowSt)
    }

    location.reload();  //Перезавантажуємо вікно
}