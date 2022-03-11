class Stack { 
    constructor() { 
        this.arr = []
        this.top = -1
    }

    push(a) { 
        this.arr.push(a)
        this.top++
    }
    pop() { 
        this.arr.pop()
        this.top--
    }
    front() { 
        return this.arr[this.top]
    }
    empty() { 
        if (this.top != -1) {
            return false
        } else { 
            return true
        }
    }
    print() { 
        console.log(this.arr)
    }
}

let s = new Stack()
s.push(1)
console.log(s.empty())
s.print()