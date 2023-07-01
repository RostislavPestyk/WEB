// Задання вихідних параметрів (title, [x], content) конфігурації модалки 
const modal = $.modal({
    title: 'Cup options',
    closable: true,
    content: `
        <div class="modal-form">
            <label for="name">Модель:</label><br>
            <input type="text" id="name" name="name" class="modal-form-field" placeholder="Модель"/><br>
            
            <label for="volume">Cтандарт:</label><br>
            <input type="text" id="standart" class="modal-form-field" placeholder="Стандарт"/><br>

            <label for="material">Робота у двох діапазонах</label><br>
           <input type="text" placeholder="Так/Ні" id="yes-no"> <br> 

            <label for="material">LAN</label><br>
           <input type="text" placeholder="Підтримка LAN" id="lan"> <br> 

           <label for="material">WAN</label><br>
           <input type="text" placeholder="Підтримка WAN" id="wan"><br>

           <label for="material">Швидкість</label><br>
           <input type="text" placeholder="Максимальна швидкість" id="speed">

 
            </select><br><br>
            <div id= "img-prev-section">
                <img id="imgprev" src="" >
            </div>   
                <label for="file" id="label-select-img">Select image file:</label><br>
                <input type="file" id="imgfile" name="imgfile"><br><br>
            
            <button id="submitbtn" class="blue-button" onclick="myFunction()">Click me</button>
        </div> 
    `,
    width: '500px'
})

// Вибірка всіх "Volume" та обчислення "Total volume"
function countTotalVolume() {
    let volArr = document.getElementsByClassName("element-volume")
    let totalVolume = 0
    for (let i = 0; i < volArr.length; i++) {
        totalVolume += Number(volArr[i].outerText)
    }
    document.getElementById("countresult").innerHTML = `Total volume:  <b>${totalVolume} ml</b>`
}



countbtn.addEventListener('click', countTotalVolume)






