// "In JavaScript, a debounce function makes sure that your code is only triggered once per user input"


let dbBtn = document.getElementById("db-btn")
let ndbBtn = document.getElementById("ndb-btn");
let p = document.getElementById("db-p")
let np = document.getElementById("ndb-p");
let c = 0
let nc = 0
const makeApiCall = () => {
    c++
   let text = document.createElement("h3")
   text.innerText = `api is called ${c}`
   p.appendChild(text)
} 

const debounce = (fun, delay) => { 
    let id
    return function () { 
       id && clearTimeout(id)
     id = setTimeout(() => { 
            fun()
        },delay)
    }
}


dbBtn.addEventListener("click", debounce(makeApiCall,1000))


const nmakeApiCall = () => {
    nc++;
    let div = document.createElement("h3");
    div.innerText = `api is called ${nc}`;
    np.appendChild(div);
}; 

ndbBtn.addEventListener("click", nmakeApiCall)