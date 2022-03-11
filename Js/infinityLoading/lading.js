let div = document.querySelector(".div-box")

// div.addEventListener("scroll", () => { 
//     console.log("scroll")
// })

function getData() {
    let c = 0
    while (c <= 25) {
let h3 = document.createElement("p");
    h3.classList.add("h3-box");
    h3.innerText = `MASAI SCHOOL ${c}`;
    c++;
    div.appendChild(h3);
 }
}
getData(div);

// for window window.innerHeight
// for element like div is div.clientHeight
let h31 = document.querySelector(".h3-box")
div.addEventListener('scroll', () => {
    if (div.scrollTop + div.clientHeight >= div.scrollHeight - 1) {
        getData(div);
    }
})
