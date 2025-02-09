// SPDX-License-Identifier: UNLICENSED

pragma solidity >= 0.8.28 <0.9.0;

contract phcancer{
    int256 private counter = 0;

    function getphcancer() public view returns (int256) {
        return counter;
    }

    function increment() public {
        counter++;
    }

    function decrement() public {
        counter--;
    }
}
