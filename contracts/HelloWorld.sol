pragma solidity ^0.4.24;

contract HelloWorld {
    address owner;
    string value;
    
    constructor() public {
        owner = msg.sender;
        value = "Hello World!";
    }
    
    function getValue () public view returns (string) {
        return value;
    }
    
    function setValue (string str) public {
        value = str;
    }

}