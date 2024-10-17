Here are some sample questions based on beginner data types in Solidity. These questions can help reinforce your understanding of various data types and how to use them in smart contracts.

### Questions on Beginner Data Types in Solidity

#### 1. **Unsigned Integers (uint)**
- **Question**: Write a contract that has an unsigned integer variable named `count`. Create a function `increment` that increases `count` by 1 each time it is called. What would happen if `count` is at its maximum value and `increment` is called?
  
  **Expected Concepts**:
  - Using `uint` and understanding overflow behavior.

#### 2. **Booleans**
- **Question**: Create a contract that manages a simple voting mechanism. It should have a boolean state variable `isVotingOpen`. Write functions `openVoting()` and `closeVoting()` to update the value of `isVotingOpen`. How would you prevent voting when it is closed?
  
  **Expected Concepts**:
  - Using boolean variables to control flow in functions.

#### 3. **Addresses**
- **Question**: Design a contract that stores an address of the contract owner. Create a function `setOwner` that takes an address as an argument and sets it as the owner. Write a function `getOwner` that returns the owner’s address. How would you restrict certain functions to only be callable by the owner?
  
  **Expected Concepts**:
  - Storing and managing addresses, access control.

#### 4. **Enums**
- **Question**: Write a contract with an enum called `OrderStatus` that can have values `Pending`, `Shipped`, and `Delivered`. Create a function `updateOrderStatus` that takes an `OrderStatus` value and updates the status of an order. What are the advantages of using enums over integers for state management?
  
  **Expected Concepts**:
  - Understanding how to define and use enums.

#### 5. **Structs**
- **Question**: Create a struct called `Product` that has properties `name` (string), `price` (uint), and `inStock` (bool). Write a function to create a new product and another function to retrieve its details. How can you use this struct to manage a product inventory?
  
  **Expected Concepts**:
  - Defining and using structs for complex data types.

#### 6. **Arrays**
- **Question**: Write a contract that has a dynamic array of `uint` called `numbers`. Create functions to add a number to the array and retrieve the total count of numbers stored. How would you implement a function that returns the sum of all numbers in the array?
  
  **Expected Concepts**:
  - Using arrays to store multiple values.

#### 7. **Mapping**
- **Question**: Implement a contract that uses a mapping to associate addresses with balances. Write functions to deposit and withdraw funds. How can you prevent an address from withdrawing more than it has deposited?
  
  **Expected Concepts**:
  - Using mappings for key-value storage.

### Sample Contract Code for One Question

Here’s an example of a smart contract based on the first question about unsigned integers:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Counter {
    uint256 public count;

    function increment() public {
        require(count < type(uint256).max, "Count has reached the maximum value");
        count += 1;
    }
}
```