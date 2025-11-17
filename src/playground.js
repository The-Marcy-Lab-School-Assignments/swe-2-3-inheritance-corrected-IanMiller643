console.log('Put your code here!');
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

const bill = new Manager('Bill', 100000, 'Clothing');
console.log(bill.getDetails());
