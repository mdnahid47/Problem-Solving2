// 1. ES6 Destructuring

// Problem: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.


// ans===============

// const person = {
//     name: 'Alice',
//     age: 30
//   };
  
//   // Destructuring with variable assignment
//   const { name, age } = person;
  
//   console.log(name); // Output: Alice
//   console.log(age);  // Output: 30
  
// 2. ES6 Module

// Problem: Create a module that exports a function to calculate the area of a circle and import it into another file.

// // Function to calculate circle area
// function calculateArea(radius) {
//     if (typeof radius !== 'number' || radius < 0) {
//       throw new Error('Invalid radius: Radius must be a positive number.');
//     }
//     return Math.PI * radius * radius;
//   }
  
//   // Export the function using export default
//   export default calculateArea;

// 3. ES6 Classes
// Problem: Create a class Rectangle with properties width and height and a method to calculate the area.


// class Rectangle {
//     constructor(width, height) {
//       // Validate input for positive width and height
//       if (typeof width !== 'number' || width <= 0) {
//         throw new Error('Invalid width: Width must be a positive number.');
//       }
//       if (typeof height !== 'number' || height <= 0) {
//         throw new Error('Invalid height: Height must be a positive number.');
//       }
  
//       this.width = width;
//       this.height = height;
//     }
  
//     calculateArea() {
//       return this.width * this.height;
//     }
//   }
//   const rectangle1 = new Rectangle(5, 3);
//   const area = rectangle1.calculateArea();
//   console.log('Area of the rectangle:', area); // Output: Area of the rectangle: 15
    

// 4. Getter and Setter in ES6
// Problem: Create a class Person with a getter and setter for the fullName property.

// class Person {
//     constructor(firstName, lastName) {
//       this._firstName = firstName;
//       this._lastName = lastName;
//     }
  
//     get fullName() {
//       return `${this._firstName} ${this._lastName}`;
//     }
  
//     set fullName(fullName) {
//       const parts = fullName.split(' ');
//       if (parts.length !== 2) {
//         throw new Error('Invalid full name: Must contain a first and last name separated by a space.');
//       }
//       this._firstName = parts[0];
//       this._lastName = parts[1];
//     }
//   }

  
//   const person1 = new Person('Alice', 'Smith');
// console.log(person1.fullName); // Output: Alice Smith

// try {
//   person1.fullName = 'Bob'; // Throws an error
// } catch (error) {
//   console.error(error.message); // Output: Invalid full name: Must contain a first and last name separated by a space.
// }

// person1.fullName = 'Charlie Brown';
// console.log(person1.fullName); // Output: Charlie Brown



// 5. Class Expressions
// Problem: Create a class expression for a Circle with a method to calculate the circumference.


// const Circle = class {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     getCircumference() {
//         return 2 * Math.PI * this.radius;
//     }
// };

// // Example usage:
// const myCircle = new Circle(5);
// console.log(`Circumference of the circle: ${myCircle.getCircumference()}`);

// 6. JavaScript Computed Properties
// Problem: Create an object with computed property names based on variables.


// let name = 'fullName';
// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get name {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// let person = new Person('John', 'Doe');
// console.log(person.fullName); // Output: John Doe


// 7. Inheritance
// Problem: Create a base class Animal and a derived class Dog that inherits from Animal.

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with speed ${this.speed}.`);
//     }

//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still.`);
//     }
// }

// class Dog extends Animal {
//     // Additional methods specific to Dog can be added here
//     bark() {
//         console.log(`${this.name} barks!`);
//     }
// }

// const myDog = new Dog("Buddy");
// myDog.run(10); // Output: Buddy runs with speed 10.
// myDog.bark(); // Output: Buddy barks!


// 8. New Target Operators
// Problem: Use new.target to create an abstract class Shape that cannot be instantiated directly.

// class Shape {
//     constructor() {
//         if (new.target === Shape) {
//             throw new Error('Cannot instantiate Shape directly!');
//         }
//         // Other common initialization logic for shapes
//     }

//     // Define abstract methods (to be overridden by subclasses)
//     // For example:
//     // abstractMethod() {
//     //     throw new Error('Abstract method must be implemented.');
//     // }
// }

// // Example of a concrete subclass
// class Square extends Shape {
//     constructor(sideLength) {
//         super();
//         this.sideLength = sideLength;
//     }
// }

// // Attempting to create an instance of Shape will throw an error
// // const invalidShape = new Shape(); // Throws an error

// // Creating an instance of Square works as expected
// const square = new Square(5);
// console.log(square.sideLength); // Output: 5


// 9. Static Methods
// Problem: Create a class MathUtil with a static method square to calculate the square of a number.

// class MathUtil {
//     static square(number) {
//         return number * number;
//     }
// }

// console.log(MathUtil.square(5)); // Outputs: 25


// 10. Symbol
// Problem: Create an object with a symbol as a property key and demonstrate accessing it.

// // Create a symbol
// const mySymbol = Symbol('my unique symbol');

// // Create an object with the symbol as a property key
// const myObject = {
//   [mySymbol]: 'Hello from the symbol property!'
// };

// // Access the value using the symbol
// console.log(myObject[mySymbol]); // Output: "Hello from the symbol property!"



