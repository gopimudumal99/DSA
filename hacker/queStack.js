class StackQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  push(B) {

    this.s1.arr.push(B);
  }
  

  pop() {
    // code here
    if (this.s2.arr.length === 0) {
      if (this.s1.arr.length === 0) {
        return -1;
      } else {
        while (this.s1.arr.length !== 0) {
          let x = this.s1.arr.pop();
          this.s2.arr.push(x);
        }
      }
    }
    let y = this.s2.arr.pop();
    return y;
  }
}
