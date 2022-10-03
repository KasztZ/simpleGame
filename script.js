const clickedTiles = []
const tableSize = 2

createPage()

game()

function createPage() {

    const section = document.createElement("section")
    section.className = "section"
    document.body.appendChild(section)
    for (let index = 1; index <= tableSize; index++) {
        let newDiv = document.createElement("div")
        newDiv.className = "wrapper"
        section.appendChild(newDiv)
        for (let timer = 1; timer <= tableSize; timer++) {
            let squares = document.createElement("div")
            squares.className= "tile"
            newDiv.appendChild(squares)
        }
    }
}

function game() {
    const allTiles = document.querySelectorAll(".tile")
    console.log(allTiles)
    allTiles.addEventListener("click", function (e) {
        if(!e.target.classList.contains("tile")) return
        e.target.classList.add('selected')
        clickedTiles.push(e.target)
        if (clickedTiles.length >= tableSize*tableSize) {
            const interval = setInterval(() => {
                const tile = clickedTiles.shift()
                tile.classList.remove("selected")
                if (clickedTiles.length === 0) {
                    clearInterval(interval)
                }
            }, 500)
        }
    })
}