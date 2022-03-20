class Stack {
    constructor() { 
        this.arr = []
        this.top = -1
    }
    push(x) { 
        if (this.top == -1) {
            this.arr[0] = x
        } else { 
            this.arr[this.top+1] =x
        }
        this.top++
    }
    pop() { 
        this.arr.splice(-1)
         this.top--
    }
    top1() { 
        return this.top>-1 ? this.arr[this.top] : -1;
    }
    empty() { 
        return this.arr.length ==0
    }
    print() { 
        return this.arr
    }
}
//! s1[432] s2[]
// ! step 1: push value ? s1.isEmty : direct push in s1 : pop all element s1 to s2 and then push into s1
// ! step 2: after pushing vlue in S1 then reback and push all element in s1 from s2

//? step 1: empty s1 to s2
//? step2: add new elem in s1
//? step3: empty s2 to s1

class Queue { 
    constructor() { 
         this.S1 = new Stack()
        this.S2 = new Stack()
    }
    enqueue(val) {  
        //! step1: push s1 in s2
        while (!this.S1.empty()) { 
            let a = this.S1.top1()
            this.S1.pop()
            this.S2.push(a)
        }
        //!step2: push value in s1
        this.S1.push(val)
        //! step: push back s2 to s1
        while (!this.S2.empty()) { 
            let a = this.S2.top1()
            this.S2.pop()
            this.S1.push(a)
        }
    }
    dequeue() { 
        this.S1.pop()
    }
    isEmpty() { 
        return this.S1.empty()
    }
    front() { 
        return this.S1.top1()
    }
}

let a = new Queue();
a.enqueue(14)
a.enqueue(24)
a.enqueue(35)
a.dequeue()
a.dequeue();
console.log(a.front())
console.log(a)