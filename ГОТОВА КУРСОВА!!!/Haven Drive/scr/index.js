// Задання вихідних параметрів (title, [x], content) конфігурації модального вікна
const modal = $.modal({
    title: 'Router options',
    closable: true,
    content: `
        <div class="modal-form">
            <label for="name">Router name:</label><br>
            <input type="text" id="name" name="name" class="modal-form-field" placeholder="Input router name..."/><br><br>
            <label for="volume">Router price:</label><br>
            <input type="number" id="volume" name="volume" step ="500" min="100" max="3000" class="modal-form-field" placeholder="Input router price (₴) between 0 & 3000"/><br><br>
            <label for="material">WAN:</label><br>
            <input type="text" id="material" name="name" class="modal-form-field" placeholder="Input yes/no "/><br><br>
            <label for="LAN">LAN:</label><br>
            <input type="text" id="connector" name="name" class="modal-form-field" placeholder="Input yes/no..."/><br><br>
            <label for="Standart">Standart:</label><br>
            <input type="text" id="formfactor" name="name" class="modal-form-field" placeholder="Input standart..."/><br><br>
            <label for="rotationalspeed">Router speed:</label><br>
            <input type="text" id="rotationalspeed" name="name" class="modal-form-field" placeholder="Input router speed..."/><br><br>
                
                
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



// Вибірка всіх "Capacity" та обчислення "Total capacity"
function countTotalVolume(){
    let volArr = document.getElementsByClassName("element-volume")
    let totalVolume = 0
    for (let i=0; i<volArr.length; i++) {
        totalVolume+= Number(volArr[i].outerText)
    }
    document.getElementById("countresult").innerHTML = `Total price:  <b>${totalVolume} ₴   </b>`
}



countbtn.addEventListener('click', countTotalVolume)






