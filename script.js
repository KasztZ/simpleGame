const clickedTiles = []
const tableSize = 3

// for > for para criar o grid

document.addEventListener("click", function (e) {
    if(!e.target.classList.contains("tile")) return

    e.target.classList.add('selected')
    clickedTiles.push(e.target)

    if (clickedTiles.length >= 9) {
        debugger
        const interval = setInterval(() => {
            const tile = clickedTiles.shift()
            tile.classList.remove("selected")
            if (clickedTiles.lenght === 0) {
                clearInterval(interval)
            }
        }, 500)
    }
})













/*
const table = document.querySelector(".table")
let squareColored = []
const square = [document.querySelector(".square")]
console.log(table)

table.addEventListener('click', () => {
    squareColored.push(square)
    this.classList.add("selected")
    
})*/