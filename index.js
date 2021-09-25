const ROWS = 16
const COLUMNS = 16

const rootEl = document.querySelector('#root')
const resetButtonEl = document.querySelector('#reset')
const sliderEl = document.querySelector('#slider')

function generateGrid(rows, columns, color) {
    let gridEl = document.createElement('div')
    gridEl.setAttribute('id', 'grid')
    gridEl.style.gridTemplate = `${rows} ${columns} auto`
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            let id = row * ROWS + col
            let squareDiv = document.createElement('div')
            squareDiv.setAttribute('class', 'square')
            squareDiv.setAttribute('id', `${id}`)
            squareDiv.style.gridRow = `${row + 1}`
            squareDiv.style.gridColumn = `${col + 1}`
            squareButtonEl = document.createElement('button')
            squareButtonEl.setAttribute('class', 'hidden-btn')
            squareButtonEl.addEventListener('mouseover', function() {
                squareDiv.style.background = color
            })
            squareDiv.appendChild(squareButtonEl)
            gridEl.appendChild(squareDiv)
        }
    }
    return gridEl
} 

function main() {
    let grid = generateGrid(ROWS, COLUMNS, 'black')
    rootEl.appendChild(grid)
    resetButtonEl.addEventListener('click', function() {
        // delete all contents in root element
        while (rootEl.firstChild) {
            rootEl.removeChild(rootEl.firstChild)
        }
        // generate new grid with updated parameters
        let resolution = sliderEl.value
        grid = generateGrid(resolution, resolution, 'black')
        rootEl.appendChild(grid)
    })
}

main()