// Write your solution in this file!


let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway St'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
        let newObject = {...employee};
        
        newObject[key] = value;

        return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    let newObject = {...employee};
    newObject[key] = undefined;

    return newObject;
}

function destructivelyDeleteFromEmployeeByKey (employee, key){
    employee[key] = undefined;

    return employee;
}

