'use strict';

module.exports = class SLL{
  constructor(value){
    this.value = value;
    this.next = null;
  }

  appendNode(node){
  //O(n)
    if(!(node instanceof SLL)){
      return null;
    }
    if(!this.next){
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  forEach(callback){
  //O(n)
    let current = this;
    while (current){
      callback(current, this);
      current = current.next;
    }
  }

  //BONUS TODO: implement findMiddleNode() as a method on the LL prototype

  findMiddleNode(){
  //O(n)
    let slow = this;
    let fast = this;
    while(fast.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  //TODO: complete the Linked List data structure by adding a remove(node) method

  //This does not remove the head node...
  //O(n)
  removeNode(value){
    let current = this;
    while(current.next.value !== value){
      current = current.next;
    }
    current.next = current.next.next;
  }

//TODO: implement reverse() as a method on the Linked List prototype; from your whiteboard exercise

//O(n)
  reverse(){
    let current = this;
    let previous = null;

    while(current){
      let save = current.next;
      current.next = previous;
      previous = current;
      current = save;
    }
    return previous;
  }

//BONUS TODO: implement findNthNode() as a method on the LL prototype

  findNthNode(n){
    let current = this;
    for(let i=0; i<n; i++){
      current = current.next;
    }
    return current;
  }
};

//TODO: write at least three tests for each method that you've written

//TODO: in comments above or within each function, note the Big-O runtime



Whiteboard Challenge:

SLL's.
