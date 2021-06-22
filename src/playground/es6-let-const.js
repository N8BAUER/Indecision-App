// var nameVar = 'Nate';
// var nameVar = 'Mike';
// console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Sammy';

console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);
// Block scoping
const fullName = 'Nate Bauer';
let firstName;
if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log('firstName', firstName);
}
console.log('firstName', firstName);
