// Задання вихідних параметрів (title, [x], content) конфігурації модалки 
const modal = $.modal({
    title: ' options',
    closable: true,
    content: `
      <div class="modal-form">
  <label for="name">Назва роутера:</label><br>
  <input type="text" id="name" name="name" class="modal-form-field" placeholder="Введіть назву роутера..."/><br><br>

  <label for="portsLAN">Підтримка LAN:</label><br>
  <input type="text" id="portsLAN" name="portsLAN" class="modal-form-field" placeholder="Підтримка LAN"/><br><br>

  <label for="portsWAN">Підтримка WAN:</label><br>
  <input type="text" id="portsWAN" name="portsWAN" placeholder="Пітдримка WAN" class="modal-form-field"><br><br>

  <label for="montage">Швидкість роутера:</label><br>
  <input type="text" id="Швидкість роутера" name="Швидкість роутера" placeholder="Швидкість роутера" class="modal-form-field"><br><br>
   

  <label for="type">Робота у двох діапазонах:</label><br>
  <select class="modal-form-field" name="type" id="type">
    <option value="Так">Так</option>
    <option value="Ні">Ні</option>
  </select>
  <br><br>

  <div id="img-prev-section">
    <img id="imgprev" src="">
  </div>

  <label for="file" id="label-select-img">Select image file:</label><br>
  <input type="file" id="imgfile" name="imgfile"><br><br>

  <button id="submitbtn" class="blue-button" onclick="myFunction()">Click me</button>
</div>

    `,
    width: '500px'
})



