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
