// Created persons object
const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}

// For loop to view keys
for(const person in persons) {
    console.log(`${person}`);
}
