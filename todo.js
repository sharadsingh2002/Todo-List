let input = document.querySelector("#input");
let btn = document.querySelector("#btn")
let addtext = document.querySelector(".addtext")

btn.addEventListener('click', () => {

    if (input.value == "") {
        alert("please Enter a task")
    } else {
        let newelement = document.createElement("ul")
        newelement.innerHTML = `${input.value} <i class="fa-solid fa-delete-left"></i> `;
        addtext.prepend(newelement);
        input.value = "";


        let icon = document.querySelector("i")
        icon.addEventListener("click", () => {
            newelement.remove();
        })
    }
})