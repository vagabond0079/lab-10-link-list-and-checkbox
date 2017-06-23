'use strict';

const expect = require('expect');
const SLL = require('../lib/SLL.js');

describe('linked list constructor and appendNode', () => {
  it('should return a new child node appended to the end', (done) => {
    let testHead = new SLL(1);
    let testNode = new SLL(2);
    testHead.appendNode(testNode);

    expect(testHead.next).toExist();
    expect(testHead.next.value).toEqual(2);
    done();
  });
  it('should return a linked list of three nodes', (done) => {
    let testHead = new SLL(1);
    let testNode1 = new SLL(2);
    let testNode2 = new SLL(3);
    testHead.appendNode(testNode1);
    testHead.appendNode(testNode2);
    expect(testHead.next.next).toExist();
    expect(testHead.next.next.value).toEqual(3);
    done();
  });
});

describe('forEach method', () => {
  it('should return a mutated linked list', (done) => {
    let testHead = new SLL(1);
    let testNode1 = new SLL(2);
    let testNode2 = new SLL(3);
    testHead.appendNode(testNode1);
    testHead.appendNode(testNode2);
    testHead.forEach((node) => {
      node.value = node.value*2;
    });
    expect(testHead.value).toEqual(2);
    expect(testHead.next.value).toEqual(4);
    expect(testHead.next.next.value).toEqual(6);
    done();
  });
});
