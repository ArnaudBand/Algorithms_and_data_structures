// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;


contract DoublyLinkedList {
  struct Node {
    uint256 data;
    uint256 next;
    uint256 prev;
  }

  uint256 head;
  uint256 tail;
  uint256 size;
  mapping(uint256 => Node) nodes;

  constructor() {
    head = 0;
    tail = 0;
    size = 0;
    nodes[head].next = tail;
  }

  function append(uint256 _data) public {
    nodes[tail].data = _data;
    nodes[tail].next = size + 1;
    nodes[size + 1].prev = tail;
    tail = size + 1;
    size++;
  }

  function getAtIndex(uint256 _index) public view returns (uint256) {
    require(_index <= size, "Index out of bounds");
    uint256 current = head;
    for (uint256 i = 0; i <= _index; i++) {
      current = nodes[current].next;
    }
    return nodes[current].data;
  }

  function getLength() public view returns (uint256) {
    return size;
  }

  function remove(uint256 _index) public {
    require(_index <= size, "Index out of bounds");
    uint256 current = head;
    for (uint256 i = 0; i <= _index; i++) {
      current = nodes[current].next;
    }
    nodes[nodes[current].prev].next = nodes[current].next;
    nodes[nodes[current].next].prev = nodes[current].prev;
    delete nodes[current];
    size--;
  }
}