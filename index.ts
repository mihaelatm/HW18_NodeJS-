///==============Task1=======================

type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: "Alice Smith",
  permissions: ["read", "write", "delete"],
  email: "alice.smith@example.com",
};

console.log(adminUser);

///==============Task2=======================

interface Engine {
  type: string;
  horsepower: number;
}

interface Car {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
}

function carInfo(car: Car): void {
  console.log(
    `Make: ${car.make},
        Model: ${car.model},
        Engine Type: ${car.engine.type},
        Horsepower: ${car.engine.horsepower}, 
        `
  );

  if (car.year) {
    console.log(`Year: $car.year`);
  } else {
    console.log(`Year: Not provided`);
  }
}

const myCar: Car = {
  make: "Toyota",
  model: "Camry",
  engine: {
    type: "Gasoline",
    horsepower: 200,
  },
  year: 2022,
};

carInfo(myCar);

///==============Task3=======================

interface Product {
  name: string;
  price: number;
  discount: number;
}

interface CalculateDiscount {
  (product: Product, discount: number): number;
}
const calculateDiscount: CalculateDiscount = (product, discount) => {
  return product.price - (product.price * discount) / 100;
};

const product: Product = {
  name: "Laptop",
  price: 1000,
  discount: 20,
};

const discount = 20;

const newPrice = calculateDiscount(product, discount);

console.log(`New price for ${product.name}: $${newPrice}`);

///==============Task4=======================

interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { name: "John", salary: 50000 },
  { name: "Jane", salary: 60000 },
  { name: "Mike", salary: 55000 },
];

function getSalary(employees: Employee[]): number[] {
  return employees.map((employee) => employee.salary);
}

const salaries = getSalary(employees);
console.log(salaries);
