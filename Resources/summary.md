# Comprehensive Overview

## Introduction to TypeScript with CLI Tools and Git

**TypeScript**: A programming language that builds on JavaScript by adding static type definitions. It helps catch errors early through a type system and improves the development experience.
- *Compile Time*: The phase in program development where source code is translated into executable code.

**CLI Tools**: Command Line Interface tools allow you to interact with your computer and development tools through text commands.

**Git**: A version control system that helps track changes in your code over time, making it easier to collaborate with others and manage project history.

---

## Types, Variables & Our Initial Commit
**Variables**: Containers for storing data values. In TypeScript, you can define variables with specific types.
_Why use it?_: Variables store data that can be used and manipulated throughout your code.

**Types**: Define the kind of data you can use. For example, `string`, `number`, `boolean`.
```typescript
let name: string = 'John'; // 'name' is a string variable
let age: number = 30; // 'age' is a number variable
let isStudent: boolean = true; // 'isStudent' is a boolean variable
```
_Why use it?_: Types help catch errors early and provide better documentation for your code.

## Functions and Interfaces

### Functions
Functions: Blocks of code that perform a specific task. They can take parameters and return values.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
let sum: number = add(5, 3); // 'sum' is 8


