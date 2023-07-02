
// Неважлива фенкція. Служить для полегшеного запуску процесу демонстрації проекту
function prepare(){
    let startArray = [
        {name: "Мережевий комутатор TP-LINK LS1005G", portsLAN: "5", portsWAN: "0"
        ,montage: "ㅤНі",type: "Некерований", pictname: "s1.jpg"},
        {name: "Мережевий комутатор MikroTik CRS328-24P-4S+RM", portsLAN:"24", portsWAN: "4"
        ,montage: "Так",type: "Керований L3(L2+)", pictname: "s2.png"},
        {name: "Мережевий комутатор ONV H3008", portsLAN:"8", portsWAN: "0"
        ,montage: " ㅤНі",type: "Некерований", pictname: "s3.png"},
        {name: "Мережевий комутатор MikroTik CSS106-5G-1S   ", portsLAN:"5", portsWAN: "1"
        ,montage: "Так",type: "Керований L2", pictname: "s4.jpg   "},
        {name: "Мережевий комутатор Dahua DH-PFS3218-16ET-135", portsLAN:"16", portsWAN: "4"
        ,montage: "Так",type: "Некерований", pictname: "s5.png"},
        {name: "Мережевий комутатор Mercusys MS105G", portsLAN:"5", portsWAN: "0"
        ,montage: "ㅤНі",type: "Некерований", pictname: "s6.jpg"},
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