// const a: number = 10;
// const b: number = 20;
// const permit: boolean = true;
// const str: string = "Resault is ";
// const sum: number = a + b;
// if (permit) {
//   console.log(str + sum);
// } else {
//   console.log("Not resault");
// }
type TPerson = {
  id: number;
  name: string;
  age: number;
  status?: boolean;
};

const person: TPerson = {
  id: 1,
  name: "Thai",
  age: 14,
};

const persons: TPerson[] = [
  { id: 1, name: "Thai 0", age: 16, status: false },
  { id: 2, name: "Thai 1", age: 17, status: true },
  { id: 3, name: "Thai 2", age: 19, status: false },
];

console.log(person.name);
