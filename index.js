const ROWS = 16
const COLUMNS = 16

const bodyEl = document.querySelector('body')
const rootEl = document.querySelector('#root')
const sliderEl = document.querySelector('#slider')
const resetButtonEl = document.querySelector('#reset')
const rainbowInputEl = document.querySelector('#rainbow')
const squareDivs = document.querySelector('.square')
const color = 'black'


function generateGrid(rows, columns) {
    let gridEl = document.createElement('div')
    gridEl.setAttribute('id', 'grid')
    gridEl.style.gridTemplateColumns = `${rows} ${columns} 1fr 1fr`
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            let id = row * ROWS + col
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

function main() {
    bodyEl.addEventListener('mouseover', event => {
        if (event.target === squareDivs) {
            let squareDiv = document.querySelector(`#${event.target.id}`)
            if (rainbowInputEl.checked) {
                squareDiv.style.backgroundColor = `rgb(${random255()},${random255()},${random255()}, 1)`
            } else {
                squareDiv.style.backgroundColor = 'black'
            }
        }
    })
    let grid = generateGrid(ROWS, COLUMNS)
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
}

main()