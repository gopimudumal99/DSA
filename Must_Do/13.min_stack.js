class Stack { 
    constructor() { 
        this.stack = []
        this.minstack = []
        this.min = Infinity
    }
    push(x) { 
        this.stack.push(x)
        if (x <= this.min) { 
            this.min = x
            this.minstack.push(this.min)
        }
    }
    pop() { 
        if (this.stack.length !== 0) { 
            let temp = this.stack.pop()
            if (temp == this.min) { 
                this.minstack.pop()
            }
            if (this.minstack.length == 0) {
                this.min = Infinity
            } else { 
                this.min = this.minstack[this.minstack.length-1]
            }
        }
    }
    getMin() { 
        if (this.minstack.length !== 0) {
            console.log(this.min)
        } else { 
            console.log(-1)
        }
    }
}

let a = new Stack()
a.push(2)
a.push(3);
a.push(4);
a.push(1);
a.pop()
a.pop()
a.getMin()