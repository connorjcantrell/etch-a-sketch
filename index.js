const ROWS = 16
const COLUMNS = 16

const rootEl = document.querySelector('#root')

function generateArtboard(rows, columns) {
    let artboardEl = document.createElement('div')
    artboardEl.setAttribute('id', 'artboard')
    artboardEl.style.display = 'artboard'
    artboardEl.style.artboardTemplate = `${ROWS} ${COLUMNS} auto`
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            let id = row * ROWS + col
            let squareDiv = document.createElement('div')
            squareDiv.setAttribute('class', 'square')
            squareDiv.setAttribute('id', `${id}`)
            squareDiv.style.artboardRow = `${row + 1}`
            squareDiv.style.artboardColumn = `${col + 1}`
            buttonEl = document.createElement('button')
            buttonEl.addEventListener('mouseover', function() {
                squareDiv.style.background = 'black'
            })
            squareDiv.appendChild(buttonEl)
            artboardEl.appendChild(squareDiv)
        }
    }
    return artboardEl
} 

function main() {
    let artboard = generateArtboard(ROWS, COLUMNS)
    rootEl.appendChild(artboard)
}

main()