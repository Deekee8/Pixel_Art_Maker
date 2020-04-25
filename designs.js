const color = document.querySelector('#colorPicker');// Select color input
const height = document.querySelector('#inputHeight').value;// Select size input
const width = document.querySelector('#inputWidth').value;
const size = document.querySelector('#sizePicker');
const grid = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = document.querySelector('#inputHeight').value;
    const width = document.querySelector('#inputWidth').value;
    makeGrid(height, width);
});

function makeGrid(height, width) {
    for (var r = 0; r < height; r++) {
        let row = grid.insertRow(r);
        for (var c = 0; c < width; c++) {
            const cell = row.insertCell(c)
            cell.addEventListener('click', function() {
                cell.style.backgroundColor = color.value;
            })
        }
    }
   
}

