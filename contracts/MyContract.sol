// contracts/MyContract.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    uint256 public a;
    uint256 public b;

    constructor(uint256 _a, uint256 _b) {
        a = _a;
        b = _b;
    }

    function sum() public view returns (uint256) {
        return a + b;
    }
}
