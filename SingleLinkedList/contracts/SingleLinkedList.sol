// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

contract SingleLinkedList {
    struct Node {
        uint256 data;
        uint256 next;
    }

    Node[] public nodes;
    uint256 private head;

    constructor() {
        nodes.push(Node(0, 0)); // Initialize with a dummy node
        head = 0;
    }

    function append (uint256 _data) public {
      nodes.push(Node(_data, 0));
      uint256 current = head;
      while (nodes[current].next != 0) {
        current = nodes[current].next;
      }
      nodes[current].next = nodes.length - 1;
    }

    function get(uint256 index) public view returns(uint256) {
      require(index < nodes.length, "Index out of bounds");
      return nodes[index].data;
    }

    function remove(uint256 index) public {
      require(index < nodes.length, "Index out of bounds");
      uint256 current = head;
      while (index > 0) {
        current = nodes[current].next;
        index--;
      }
      nodes[current].next = nodes[nodes[current].next].next;
    }
}