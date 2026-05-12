let person = {
    name: "Sudarshan"
};

console.log(Object.getOwnPropertyDescriptor(person, "name"));

/*
Output:
{
  value: "Sudarshan",
  writable: true,
  enumerable: true,
  configurable: true
}
  */