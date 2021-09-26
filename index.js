

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

// increment count
function increment() {
    count++
    countEl.textContent = count
}

// displaying previous entries
function save() {
    let countStr = `${count} - `
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}
