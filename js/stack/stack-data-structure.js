class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if(this.stackControl.length >= this.MAX_SIZE) {
      return false
    } else if (this.stackControl.length < this.MAX_SIZE) {
      return true
    }
  }

  isEmpty() {
    if(this.stackControl.length === 0) {
      return true
    } else {
      return false
    }
  }

  push(item) {
    this.canPush()
    if(false) {
      throw new Error('STACK_OVERFLOW')
    } else { 
      this.stackControl.push(item)
      return this.stackControl; 
    }
  }

  pop() {
    this.isEmpty()
    if(true) {
      this.stackControl.pop();
    } else {
      throw new Error('STACK_UNDERFLOW')
    }
    // ... your code goes here
  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
