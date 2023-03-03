// Write your solution in this file!

/* Assignment:
To start, assign an employee variable to an Object containing name and streetAddress keys; you can use whatever values you like. 
Use literal syntax to create your Object. Various updates will be applied to this variable (destructively and non-destructively) in this lab.

Once you've initialized the employee Object, you'll need to create the following four functions:

updateEmployeeWithKeyAndValue(): this function should take in three arguments: an employee Object, a key and a value. This function should not mutate the employee;
    it should return a new Object that has an updated value for the key passed in. Hint: use the spread operator!

destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.

deleteFromEmployeeByKey(): this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. 
    This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. 
    Hint: use the spread operator!

destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
*/

const employee = {
    name: "Insert Name Here",
    streetAddress: "Insert Address Here"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}