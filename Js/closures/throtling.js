let th = 0
let thp = document.getElementById("th-p")
const makeApiCallonThrottle = () => { 
    th++
    let divth = document.createElement("h3")
    divth.innerText = `api call by throttle ${th}`;
    thp.appendChild(divth)
}

const throttle = (fn,wait) => { 
    let last = 0
    return (...args) => { 
        let now = new Date().getTime()
        if (now - last < wait) { 
            return
        }
        last = now
        fn(...args)
    }
}

let btn = document.getElementById("th-btn")
btn.addEventListener("click",throttle(makeApiCallonThrottle,1000))
