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


    function insert(uint256 index, uint256 _data) public {
      require(index < nodes.length, "Index out of bounds");
      nodes.push(Node(_data, 0));
      uint256 current = head;
      while (index > 0) {
        current = nodes[current].next;
        index--;
      }
      nodes[nodes.length - 1].next = nodes[current].next;
      nodes[current].next = nodes.length - 1;
    }

    function traversal() public view returns(uint256[] memory) {
      uint256[] memory result = new uint256[](nodes.length - 1);
      uint256 current = head;
      uint256 index = 0;
      while (nodes[current].next != 0) {
        current = nodes[current].next;
        result[index] = nodes[current].data;
        index++;
      }
      return result;
    }

    function search(uint256 _data) public view returns(uint256) {
      uint256 current = head;
      while (nodes[current].next != 0) {
        current = nodes[current].next;
        if (nodes[current].data == _data) {
          return current;
        }
      }
      return 0;
    }
}