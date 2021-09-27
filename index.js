const DEFAULT_ROWS = 16
const DEFAULT_COLUMNS = 16

const rootEl = document.querySelector('#root')
const sliderEl = document.querySelector('#slider')
const resetButtonEl = document.querySelector('#reset')
const rainbowInputEl = document.querySelector('#rainbow')
const squareDivs = document.querySelector('.square')

function generateGrid(rows, columns) {
    let gridEl = document.createElement('div')
    gridEl.setAttribute('id', 'grid')
    gridEl.style.gridTemplateColumns = `${rows} ${columns} 1fr 1fr`
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            let id = row * DEFAULT_ROWS + col
            let squareDiv = document.createElement('div')
            squareDiv.setAttribute('class', 'square')
            squareDiv.setAttribute('id', `${id}`)
            squareDiv.style.gridRow = `${row + 1}`
            squareDiv.style.gridColumn = `${col + 1}`
            gridEl.appendChild(squareDiv)
        }
    }
    return gridEl
} 

function random255() {
    return Math.floor(Math.random() * 256)
}

let grid = generateGrid(DEFAULT_ROWS, DEFAULT_COLUMNS)
rootEl.appendChild(grid)
resetButtonEl.addEventListener('click', function() {
    // delete all contents in root element
    while (rootEl.firstChild) {
        rootEl.removeChild(rootEl.firstChild)
    }
    // generate new grid with updated parameters
    let resolution = sliderEl.value
    grid = generateGrid(resolution, resolution)
    rootEl.appendChild(grid)
})
rootEl.addEventListener('mouseover', e => {
    if (e.target.classList.contains('square')) {
        if (rainbowInputEl.checked) {
            e.target.style.background = `rgb(${random255()},${random255()},${random255()}, 1)`
        } else {
            e.target.style.background = 'black';
        }
    }
})

