pragma solidity ^0.8.27

contract Inbox{
    string public message;

    function Inbox(string initialMessage) public {
        message = initialMessage
    }

    function setMessage(string newMessage){
        message = newMessage
    }
}