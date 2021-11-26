document.querySelector("button").addEventListener("click", addNote);
let div = document.querySelector("div");

function addNote() {

    div.classList.add("border");

    let name = document.getElementById("name").value;
    let note = document.querySelector("textarea").value;

    let today = new Date();
    let date = today.getDate() + "." + (today.getMonth()+1) + "." + today.getFullYear();

    document.getElementById("mark").innerHTML = date + " " + "(" + name + ")";
    document.getElementById("notes").innerHTML = "<br>" + note;

    if (important.checked) {
        // Vaihda reunaväri punaiseksi.
    }
}