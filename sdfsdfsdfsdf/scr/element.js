// Функція для побудови елемента та розміщення його в DOM
function buildElementToPage(id, elem) {                               
    const element = document.createElement('div')
    element.classList.add('element')
    element.insertAdjacentHTML('afterbegin', `
    <div class="element-data">
        <img src="img/${elem.pictname}" class="element-img">
        <div class="element-name">${elem.name}</div>
        <p class="element-text">Volume: <span class="element-volume">${elem.standart}</span> ml</p> 
        <p class="element-text">Material: <span class="element-material">${elem.yes-no}</span></p> 
        <p class="element-text">Material: <span class="element-material">${elem.lan}</span></p> 
        <p class="element-text">Material: <span class="element-material">${elem.wan}</span></p> 
        <p class="element-text">Material: <span class="element-material">${elem.speed}</span></p> 
        
    </div>
    <div class="element-footer">
        <button class="blue-button" onclick="modifyModalToEdit(${id})">Edit</button><span> </span>
        <button class="red-button" onclick="removeElementFromStorage(${id})">Delete</button>
    </div>
    <p></p>
    `)
    document.getElementsByClassName("displayzone")[0].appendChild(element)
}







// Зміна параметрів модалки для СТВОРЕННЯ нового елементу
function modifyModalToCreate() {
    document.getElementsByClassName("modal-title")[0].innerText = "Create new cup"
    document.getElementById("submitbtn").setAttribute("onclick", `addElementToLocalStorage()`)
    document.getElementById("submitbtn").innerText = "Create"
    document.getElementById("img-prev-section").setAttribute("style", "display: none")
    document.getElementById("label-select-img").innerText = "Select image file:"
    //  Вікриваємо модалку
    modal.open()
}

// Зміна параметрів модалки для РЕДАГУВАННЯ поточного елементу
function modifyModalToEdit(id) {
    document.getElementsByClassName("modal-title")[0].innerText = "Edit cup"
    document.getElementById("submitbtn").innerText = "Update"
    document.getElementById("submitbtn").setAttribute("onclick", `editElementInLocalStorage(${id})`)
    //  Вибираємо елемент по ID з LS і парсимо в об'єкт
    let edElem = JSON.parse(localStorage.getItem(id))
    //  Встановлюємо значення полів форми
    document.getElementById("name").value = edElem.name;   
    document.getElementById("volume").value = edElem.volume;   
    document.getElementById("material").value = edElem.material;   
    document.getElementById("imgprev").setAttribute("src", `img/${edElem.pictname}`)
    document.getElementById("label-select-img").innerText = "You can choose another image file:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")
    // document.getElementById("imgfile").value = edElem.pictname; 
    //  Вікриваємо модалку
    modal.open()
}

//  Відображення в модалці зменшеної картинки
// function showPrewImg(){
//     let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
//     document.getElementById("imgprev").setAttribute("src", `img/${filename}`)
//     document.getElementById("label-select-img").innerText = "You can choose another image file:"
//     document.getElementById("img-prev-section").setAttribute("style", "display: block")
// }

// //Слухаємо, чи змінилося значення поля input type="file" (чи вибралася інша картинка)
// document.getElementById("imgfile").addEventListener("change", showPrewImg)


//Валідація введеного імені і об'єму чашки
// function validNameAndVolume(){
//     let valid = true;
//     let showMsg = '';
//     let formName = document.getElementById("name").value.trim();
//     let formVolume = document.getElementById("volume").value.trim();
    
//     if (!formName) {
//         showMsg = 'Cup name field is empty. INPUT CUPs NAME . '
//         valid = false;
//     }  
    
//     if (!formVolume) {
//         showMsg = showMsg + 'Cup volume field is empty. INPUT the CUP VOLUME. '
//         valid = false;
//     } else
//     if (+formVolume > 1000) {
//         showMsg = showMsg + 'Cup volume more than 1000. INPUT the CORRECT CUP VOLUME. '
//         valid = false;
//     } else
    
//     if (+formVolume < 10) {
//         showMsg = showMsg + 'Cup volume less than 10. INPUT the CORRECT CUP VOLUME. '
//         valid = false;
//     } 
    
//     if (valid) {return valid} else {alert (showMsg)}
   
// }
// function validImg() {
//     if (document.getElementById("imgfile").value) {return true} 
//     else {
//         alert ("The image for the cup was not selected. SELECT an IMAGE for the CUP. ")
//         return false} ;
// }

// Створення параметрів нового елемента та розміщення його в LS
// function addElementToLocalStorage(){
            
//     if (validNameAndVolume() && validImg()) {
//         //Шукаємо максимальне значення ID,  в LS не зайняте
//         let keyArr = [];
//         for(let i=0; i<localStorage.length; i++) {
//             let key = Number(localStorage.key(i)) ;
//             keyArr[i] = key
//         }
//         const freeKey = Math.max(...keyArr) + 1; 
//         //Забираємо значення з форми
//         let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
//         // Будуємо новий елемент
//         const newElement = {};
//         newElement.name =  document.getElementById("name").value;   
//         newElement.standart = document.getElementById("standart").value;   
//         newElement.yesNo = document.getElementById("yes-no").value;   
//         newElement.lan = document.getElementById("lan").value;   
//         newElement.wan = document.getElementById("wan").value;  
//         newElement.speed = document.getElementById("speed").value;   

//         newElement.pictname = filename;   
//         // Конвертуємо елемент в стрічку
//         let rowSt = JSON.stringify(newElement)
//         // Пакуємо елемент в LS
//         localStorage.setItem(`${freeKey}`, rowSt)
//         modal.close()
//         setTimeout(location.reload(), 1000)
//     }
// }
   
// Редагування параметрів елемента та розміщення його в LS
// function editElementInLocalStorage(id) {
//     if (validNameAndVolume()) {
//         let edElem = JSON.parse(localStorage.getItem(id))
//         edElem.name =  document.getElementById("name").value;   
//         edElem.volume = document.getElementById("volume").value;   
//         edElem.material = document.getElementById("material").value;   
//         if (document.getElementById("imgfile").value) {
//             let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
//             edElem.pictname = filename; 
//         }
//         // Конвертуємо елемент в стрічку
//         let rowSt = JSON.stringify(edElem)
//         // Пакуємо елемент в LS
//         localStorage.setItem(`${id}`, rowSt)
//         modal.close()
//         setTimeout(location.reload(), 1000) //Перезавантажуємо вікно
//     }
   
// }

// Видалення параметрів елемента з LS
function removeElementFromStorage(id){
    if (confirm("Are you sure you want to delete?")) {
        localStorage.removeItem(id)
        location.reload();          //Перезавантажуємо вікно
    }

} 

let keyNumbers = Object.keys(localStorage).length //Визначаємо кількість об'єктів LocalStorage

for (let k=0; k<keyNumbers; k++) {
    let keyName = localStorage.key(k)
    let row = JSON.parse(localStorage.getItem(keyName))
    buildElementToPage(keyName, row)
}

