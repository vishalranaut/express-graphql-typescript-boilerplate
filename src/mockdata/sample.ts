export interface Sample {
  id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
}

export const samples: Sample[] = [
  {
    id: "1",
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Red",
    mileage: 15000,
    price: 20000,
  },
  {
    id: "2",
    make: "Honda",
    model: "Civic",
    year: 2019,
    color: "Blue",
    mileage: 30000,
    price: 18000,
  },
  {
    id: "3",
    make: "Ford",
    model: "Mustang",
    year: 2018,
    color: "Black",
    mileage: 25000,
    price: 25000,
  },
  {
    id: "4",
    make: "Chevrolet",
    model: "Impala",
    year: 2021,
    color: "White",
    mileage: 10000,
    price: 22000,
  },
  {
    id: "5",
    make: "BMW",
    model: "X5",
    year: 2022,
    color: "Gray",
    mileage: 5000,
    price: 45000,
  },
  {
    id: "6",
    make: "Audi",
    model: "A4",
    year: 2021,
    color: "Silver",
    mileage: 12000,
    price: 30000,
  },
  {
    id: "7",
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2020,
    color: "Black",
    mileage: 18000,
    price: 35000,
  },
  {
    id: "8",
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    color: "White",
    mileage: 2000,
    price: 55000,
  },
];
