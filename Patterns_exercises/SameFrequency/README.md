### Same Frequency

Write a function called sameFrequency that takes in two positive integers and returns true if they contain the same frequency of digits. Otherwise, it should return false.

```
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false
```

Hint: You can use the frequency counter pattern to count the frequency of digits in each number, and then compare the resulting objects to see if they have the same keys (digits) and values (frequencies).