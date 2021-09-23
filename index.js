const ROWS = 16
const COLUMNS = 16

const rootEl = document.querySelector('#root')

function generateGrid(rows, columns) {
    let gridEl = document.createElement('div')
    gridEl.setAttribute('id', 'grid')
    gridEl.style.gridTemplate = `${ROWS} ${COLUMNS} auto`
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            let id = row * ROWS + col
            let squareDiv = document.createElement('div')
            squareDiv.setAttribute('class', 'square')
            squareDiv.setAttribute('id', `${id}`)
            squareDiv.style.gridRow = `${row + 1}`
            squareDiv.style.gridColumn = `${col + 1}`
            buttonEl = document.createElement('button')
            buttonEl.addEventListener('mouseover', function() {
                squareDiv.style.background = 'black'
            })
            squareDiv.appendChild(buttonEl)
            gridEl.appendChild(squareDiv)
        }
    }
    return gridEl
} 

function main() {
    let grid = generateGrid(ROWS, COLUMNS)
    rootEl.appendChild(grid)
}

main()