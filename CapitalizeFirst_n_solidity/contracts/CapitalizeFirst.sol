// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

contract CapitalizeFirst {
    function capitalizeFirst(string[] memory arr) public pure returns (string[] memory) {
        // Create a new array to store the capitalized strings
        string[] memory capitalizedStrings = new string[](arr.length);
        
        for (uint256 i = 0; i < arr.length; i++) {
            // Get the current string
            string memory currentString = arr[i];
            
            // Check if the string is not empty
            if (bytes(currentString).length > 0) {
                // Convert the string to bytes for individual character manipulation
                bytes memory stringBytes = bytes(currentString);
                
                // Check if the first character's ASCII value is within the range of lowercase letters
                if (stringBytes[0] >= bytes1(uint8(97)) && stringBytes[0] <= bytes1(uint8(122))) {

                    // Convert the first character to its corresponding uppercase ASCII value
                    stringBytes[0] = bytes1(uint8(stringBytes[0]) - 32);
                }
                // Convert the modified bytes back to a string and assign it to the array
                capitalizedStrings[i] = string(stringBytes);
            } else {
                // If the string is empty, assign it as it is to the array
                capitalizedStrings[i] = currentString;
            }
        }
        // Return the array of capitalized strings
        return capitalizedStrings;
    }
}
