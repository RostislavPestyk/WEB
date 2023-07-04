
 // Масив startArray містить початкові дані, які будуть збережені в localStorage
function prepare(){
    let startArray = [
        {name: "ASUS RT-AC1200 V2", volume: 1500, material: "yes",connector:"yes",formfactor:"802.12a",rotationalspeed:"1300",pictname: "ASUS RT-AC1200 V2.jpg"},
        {name: "ASUS RT-AX53U", volume: 3000, material: "yes",connector:"yes",formfactor:"805.11c",rotationalspeed:"867",pictname: "ASUS RT-AX53U.jpg"},
        {name: "MERCUSYS AC12G", volume: 1400, material: "yes",connector:"yes",formfactor:"852.11b",rotationalspeed:"200",pictname: "MERCUSYS AC12G.jpg"},
        {name: "MERCUSYS MR30G", volume: 900, material: "yes",connector:"yes",formfactor:"602.11a",rotationalspeed:"780",pictname: "MERCUSYS MR30G.jpg"},
        {name: "TP-Link Archer C64", volume: 1000, material: "yes",connector:"yes",formfactor:"582.11b",rotationalspeed:"900",pictname: "TP-Link Archer C64.jpg"},
        {name: "TP-Link Archer C80", volume: 2200, material: "yes",connector:"yes",formfactor:"700.12a",rotationalspeed:"400",pictname: "TP-Link Archer C80.jpg"},
        {name: "XIAOMI Mi WiFi Router 4C Global", volume: 1000, material: "yes",connector:"yes",formfactor:"702.11c",rotationalspeed:"720",pictname: "XIAOMI Mi WiFi Router 4C Global.jpg"},
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