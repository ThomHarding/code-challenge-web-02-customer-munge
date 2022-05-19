/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', 'Hello Mattie Mungane' etc]
*/
export function greetUsers(customers) {
    
    console.log(customers);
     // just map over them to make a greeting
    const greeting = customers.map(customer => 'Hello ' + customer.first_name + ' ' + customer.last_name + '!');
    return greeting;
}

/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', etc]
*/

export function greetUsersOverAge60(customers) {
    
    console.log(customers);
    const over60 = customers.filter(customer => customer.age > 60);
    return greetUsers(over60);
        // first, filter over the user to get the ones over 60
        // then map over them to make a greeting
}


/* 
Output: 
4532
*/

export function addAllAges(customers) {
    return customers
        .reduce((acc, customer) => {
            if(acc[0]) {
                acc[0] += customer.age;
            } else {
                acc[0] = customer.age;
            }
            return acc;
        }, {});
    // reduce through the customers to make a sum
}

/* 
Output: 
4.5
*/

export function getAverageCoolFactor(customers) {
    const coolFactors = customers.map(customer => customer.cool_factor);
    // map through to make an array of cool factors
    const coolSum = coolFactors.reduce((acc, customer) => {
        if(acc) {
            acc += customer;
        } else {
            acc = customer;
        }
        return acc;
    }, {});
    // then reduce through that array to get a sum
    return Math.floor(coolSum / customers.length);
    // then divide by the total number of customers
}

/* 
Output: 
{
    female: 42,
    male: 39,
    nonbinary: 8,
    etc . . .
}
*/

export function getTotalOfEachGender(customers) {
    return customers
        .reduce((acc, customer) => {
            if(acc[customer.gender]) {
                acc[customer.gender]++;
            } else {
                acc[customer.gender] = 1;
            }
            return acc;
        }, {});
}

/* 
Output: 
 {
    female: 3,
    male: 2,
    nonbinary: 1,
    etc . . .
 }
*/

export function getGenderBreakdownOfFordOwners(customers) {
    return true;
}

/* 
Output: 
{
    ford: {
        female: 3,
        male: 6,
        nonbinary: 0,
    },
    mercedes:  {
        female: 5,
        male: 4,
        nonbinary: 1,
    },
    etc . . .
}
*/

export function getGenderBreakdownOfEachCar(customers) {
    return true;
}

/* 
Output: 
{
    ford: [3, 5, 4, 4, 7, 5],
    mercedes: [8, 5, 6, 8, 3, 9],
    honda: [2, 4, 4, 3, 7, 1],
    etc. . .
}
*/


export function getAllCoolFactorsOfEachCar(customers) {
    return true;
}

/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////


/* 
Output: 
{
    ford: 5.4
    mercedes:  8.5
    honda: 2.3
}
*/

export function getAverageCoolFactorOfEachCar(customers) {
    return true;
}


/* 
Output: 
// break the customers into age demographic blocks. 
// For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 55,
    20: 38,
    30: 12,
    40: 31,
    50: 62,
    60: 93,
    70: 45,
    80: 32,
    90: 11,
}
*/

export function makeAgeBrackets(customers) {
    return true;
}

/* 
Output: 
// break the customers into age blocks. 
// For example, this lists out every cool factor for users aged between 1 and 10, then every cool factor for users aged between 21 and 30, etc
{
    10: [3, 5, 4, 4, 7, 5],
    20: [8, 5, 6, 8, 3, 9],
    30: [1, 8, 4, 1, 9, 2],
    40: [2, 4, 4, 3, 7, 1],
    etc . . .
}
*/

export function getCoolFactorsByAgeBracket(customers) {
    return true;
}


/* 
Output: 
// break the customers into age demographic blocks, and give the average cool factor for every age block. 
// For example, below, the average cool factor for users aged between 31-40 is 9.5.

{
    10: 5.6,
    20: 3.1
    30: 7.8,
    40: 9.5,
    etc . . .
}
*/

export function getAverageCoolFactorByAgeBracket(customers) {
    return true;
}

