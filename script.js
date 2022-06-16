'use strict';

const camelCase = function (name) {
    const [firstName, lastName] = name.split('_');
    return firstName + lastName.slice(0, 1).toUpperCase() + lastName.slice(1);
}
console.log(camelCase('pushpendra_kushvaha'));
console.log(camelCase('aaa_j'));