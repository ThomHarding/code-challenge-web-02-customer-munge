// IMPORT MODULES under test here:
import { 
    addAllAges,
    getAverageCoolFactor,
    getTotalOfEachGender,
    greetUsers,
    greetUsersOverAge60,
} from '../functions.js';
import customers from './data.js';

const { test, skip } = QUnit;

skip('greetUsers', (expect) => {
    const expected = true;

    const actual = greetUsers(customers);

    expect.equal(actual, expected);
});


skip('greetUsersOverAge60', (expect) => {
    const expected = [
        'Hello Suzi Summerson!',
        'Hello Boot Penton!',
        'Hello Cacilia Caramuscia!',
        'Hello Cristal Oakman!',
        'Hello Kenny Kepe!',
        'Hello Dimitri Ochiltree!',
        "Hello Ilaire O'Codihie!",
        'Hello Anatol Gulley!',
        'Hello Salomone Merkle!',
        'Hello Alta Sulter!',
        'Hello Alexandros Cornell!',
        'Hello Thorn McMeekin!',
        'Hello Esmaria Moukes!',
        'Hello Munroe Walthall!',
        'Hello Tannie Sedman!'
    ];

    const actual = greetUsersOverAge60(customers);

    expect.deepEqual(actual, expected);
});

skip('addAllAges', (expect) => {
    const expected = 2048;

    const actual = addAllAges(customers)[0];

    expect.equal(actual, expected);
});


skip('getAverageCoolFactor', (expect) => {
    const expected = 5;

    const actual = getAverageCoolFactor(customers);

    expect.equal(actual, expected);
});

skip('getTotalOfEachGender', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

skip('getGenderBreakdownOfFordOwners', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

skip('getGenderBreakdownOfEachCar', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

skip('getAllCoolFactorsOfEachCar', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

skip('getAverageCoolFactorOfEachCar', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

skip('getAverageCoolFactor', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

skip('getAverageCoolFactor', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

skip('getCoolFactorsByAgeBracket', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

skip('getAverageCoolFactorByAgeBracket', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});
