class Queue { 
    constructor() { 
        this.que = []
        this.front = -1;
        this.rear = -1;
    }
    
    enqueue(val) { 
        if (this.front == -1&&this.rear ==-1){
            this.front=0;
            this.rear=0
          this.que[this.front] = val;
        } else {
          this.que[this.rear] = val;
        }
        this.rear++
    }
    dequeue() { 
        if (this.que.isEmpty) {
            return
        } else if (this.front == this.rear) {
            this.front = this.rear = -1
        } else { 
            this.front++
            // this.que.splice(0,1)
        }
    }
    front1() { 
        if (this.front == -1) {
            return null
        } else { 
            return this.que[this.front]
        }
    }

    isEmpty() { 
        if ((this.front == -1) && (this.rear == -1)) {
            return true
        } else { 
            return false
        }
    }
}

// ! [123] [12]
//? step1: empty q1 into q2
//? step2: add element in q1
//? step3: empty q2 into q1
class Stack { 
    constructor() { 
        this.Q1 = new Queue()
        this.Q2 = new Queue()
    }

    push(val) { 
        //! step 1: empty q1 to q2
        while (!this.Q1.isEmpty()) { 
            let a = this.Q1.front1()
            this.Q1.dequeue()
            this.Q2.enqueue(a)
        }
        //! step2: push value in q1
        this.Q1.enqueue(val)
        //! step#: push back all q2 in q1
         while (!this.Q2.isEmpty()) { 
            let a = this.Q2.front1()
            this.Q2.dequeue()
            this.Q1.enqueue(a)
        }
    }
    pop() { 
        this.Q1.dequeue()
    }
    top() { 
        this.Q1.front1()
    }
    empty() { 
        return this.Q1.isEmpty() && this.Q2.isEmpty()
    }
}
