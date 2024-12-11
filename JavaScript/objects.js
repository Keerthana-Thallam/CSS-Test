let car = {brand: "Toyota",model: "Corolla",year: 2022};
console.log("Brand:", car.brand);
console.log("Model:", car.model); 
console.log("Year:", car.year);

// 
let person = {};
person.name = "John";
person.age = 30;
person.occupation = "Engineer";
console.log("After adding properties:", person);
delete person.age;
console.log("After deleting 'age':", person);

// 
let book = {title: "To Kill a Mockingbird",author: "Harper Lee",year: 1960}
if ("author" in book) {
    console.log("The property 'author' exists in the book object.");
} else {
    console.log("The property 'author' does not exist in the book object.");
}

// 
let student = {name: "Mercy",age: 20,grade: "A"};
for (let key in student) {
    console.log(key + ": " + student[key]);
}

// 
function countProperties(obj) {
    return Object.keys(obj).length; 
}
let student1 = {name: "Mercy",age: 21,grade: "A+"};
console.log(countProperties(student1)); 
// 

// Create the calculator object
let calculator = {
    num1: 0,
    num2: 0,
    add: function() {
        return this.num1 + this.num2;
    },
    subtract: function() {
        return this.num1 - this.num2;
    }
};
calculator.num1 = 10; 
calculator.num2 = 5;  
console.log("Addition:", calculator.add());       
console.log("Subtraction:", calculator.subtract()); 

// 
let user = {name: "John",age: 30,role: "Admin"};
let clonedUser = Object.assign({}, user);
console.log(clonedUser);

// merging user informations
let userInfo1 = { name: "Alice", age: 25, city: "New York" };
let userInfo2 = { age: 30, city: "San Francisco", profession: "Engineer" };
let mergedUserInfo = Object.assign({}, userInfo1, userInfo2);
console.log(mergedUserInfo);

// generate dfault values
function createUser({ name = "Default Name", age = 18, city = "Unknown" } = {}) {
    return { name, age, city };
}
let user1 = createUser({ name: "Alice", age: 25 });
let user2 = createUser({ city: "New York" });
let user3 = createUser();

console.log(user1); 
console.log(user2); 
console.log(user3); 

// 
let company = {
    name: "TechCorp",
    location: "New York",
    departments: [
        {
            name: "Engineering",
            employees: [
                { id: 1, name: "Alice", role: "Software Engineer" },
                { id: 2, name: "Bob", role: "DevOps Engineer" }
            ]
        },
        {
            name: "HR",
            employees: [
                { id: 3, name: "Carol", role: "HR Manager" },
                { id: 4, name: "Dan", role: "Recruiter" }
            ]
        },
        {
            name: "Sales",
            employees: [
                { id: 5, name: "Eve", role: "Sales Manager" },
                { id: 6, name: "Frank", role: "Sales Executive" }
            ]
        }
    ]
};
console.log(company.name); 
console.log(company.departments[0].name); 
console.log(company.departments[0].employees[1].name);

// 
let fruitPrices = {apple: 1.2,banana: 0.5,orange: 0.8,grape: 2.0};
let keys = Object.keys(fruitPrices);
console.log("Keys:", keys); 
let values = Object.values(fruitPrices);
console.log("Values:", values); 

// 
function sortSalaries(salaries) {
    let sortedEntries = Object.entries(salaries);
    sortedEntries.sort((a, b) => a[1] - b[1]);
    let sortedSalaries = Object.fromEntries(sortedEntries);
    return sortedSalaries;
}
let salaries = {
    John: 4000,
    Alice: 6000,
    Bob: 3000,
    Carol: 5000
};

let sortedSalaries = sortSalaries(salaries);
console.log(sortedSalaries);
// object destrucuring

let username = {name: "Alice",age: 30,city: "New York"};
let { name, age, city } = username;
console.log(name); 
console.log(age);  
console.log(city);

// nested objects

let person1 = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: {
            code: "10001",
            area: "Manhattan"
        }
    },
    hobbies: ["Reading", "Traveling", "Gaming"]
};

let { name1, address: { city1, zipCode: { code } }, hobbies } = person1;

console.log(name1);      
console.log(city1);      
console.log(code);      
console.log(hobbies);   

// merge two objects

let userInf1 = { name: "Alice", age: 25 };
let userInf2 = { city: "New York", age: 30 };
let mergedUserInf = Object.assign({}, userInf1, userInf2);

console.log(mergedUserInf);

// 
let person2 = {name: "Ramesh",age: 30};
Object.freeze(person2);
person2.name = "Ram"; 
person2.city = "New York"; 
delete person2.age; 

console.log(person2);

// 
let person3 = {
    name: "Sagar",
    age: 20,
    city: "New York"
};
let entries = Object.entries(person3);
console.log(entries);

// function modifies
function incrementTeamValues(team, increment) {
    for (let key in team) {
        if (team.hasOwnProperty(key)) {
            team[key] += increment;
        }
    }
}
let team = {player1: 10,player2: 15,player3: 20};

console.log("Before increment:", team);
incrementTeamValues(team, 5);

console.log("After increment:", team);

// this keyword

let person4 = {
    name: "Mary",
    age: 22,
    greet: function() {
        console.log(Hello, my name is ${this.name} and I am ${this.age} years old.);
    }
};

person4.greet();

// find highest value object
let products = {productA: 100,productB: 200,productC: 150,productD: 250};

function findHighestValueKey(obj) {
    let maxKey = null;
    let maxValue = -Infinity; 
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            
            if (obj[key] > maxValue) {
                maxValue = obj[key];
                maxKey = key;
            }
        }
    }
    
    return maxKey;
}
let highestValueKey = findHighestValueKey(products);
console.log(highestValueKey);