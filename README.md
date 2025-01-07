# TypeScript Type Error: 'string | undefined' is not assignable to type 'string'

This repository demonstrates a common TypeScript type error and its solution.  The error arises when a function is expected to return a string, but the actual return value might be undefined. This often happens when dealing with optional parameters or asynchronous operations that might fail.

## The Bug

The `combineStrings` function attempts to concatenate two strings. However, if either string is undefined, the concatenation will result in a type of 'string | undefined', causing a type error because the function is declared to return a string.

## The Solution

The solution involves using the nullish coalescing operator (`??`) to provide a default value (empty string in this case) if either string is undefined.  This ensures the function always returns a string, resolving the type error.

## How to run the code

1. Clone the repository
2. Run `tsc bug.ts` to compile the buggy code and observe the error.
3. Run `tsc bugSolution.ts` to compile the fixed code. 
