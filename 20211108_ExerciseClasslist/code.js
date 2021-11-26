let p = document.querySelector("p")

document.querySelector("button").addEventListener("click", buttonPressed)


function buttonPressed() {
    p.classList.add("vivid")
}