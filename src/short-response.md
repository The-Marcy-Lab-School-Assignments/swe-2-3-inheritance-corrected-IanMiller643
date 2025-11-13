# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

In your own words, define what **inheritance** is in object-oriented programming. Then, explain what benefits it provides to developers who use it. Consider what problem it solves — what would be harder or messier without inheritance?

## Response 1

**Inheritance** in **object-oriented programming** is when one *class* inherits the **methods** and **properties** of another class using the `extends` keyword. It allows developers create a special type of a certain class without having to rewrite the same code of the parent class more than once. Without inheritance, you would have multiple versions of the same class that have only slightly different properties and methods causing the developer to have to spend more time creating them.

## Prompt 2

Consider these classes:

```js
class Animal {
  eat() { return "eating"; }
}

class Dog extends Animal {
  bark() { return "woof"; }
}

class Puppy extends Dog {
  play() { return "playing"; }
}

const rex = new Puppy();
```

Explain what happens when `rex.eat()` is invoked. In your answer, describe the role of **inheritance** and the **prototype chain**.

## Response 2

When `rex.eat()` is **invoked**, JavaScript checks if that **method** is found within the **scope** of the `Puppy` **class**. Since it's not there, it goes up the **protoype chain** to find which class within the chain holds that method. The `eat()` method isn't found within the `Dog` Class either, so it checks the `Animal` class where  the `eat()` method is finally found.

Look at these classes:

```js
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getDetails() {
    return `${this.name} earns $${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
     // YOUR CODE HERE
    super(name, salary)
    this.department = department;
   }
   getDetails() {
     // YOUR CODE HERE - should include both the Employee details 
     // AND the department info
     return `${super.getDetails()}. Department: ${this.department}`;
   }
}

```

Complete the `Manager` class by filling in the `constructor` and `getDetails` methods. Explain why you need to use `super` in each method and what would happen if you didn't use it.

## Response 3
Within the `constructor` **function** in the `Manager` class, you need to use `super` in order to get the **properties** of the parent class `Employee`. Without the `super` keyword, you would get a `ReferenceError` since `constructor` won't be able to access the parent class' properties. The `getDetails()` method within the `Manager` class needs to use `super` to get the value of the `getDetails()` method from the parent class and add the department info to the end of it. Without super, you would have to rewrite code to get the same result.