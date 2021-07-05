'use strict';


function calAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let firstName = "Van"
        const output = `${firstName}, you are ${age} born in ${birthYear}`;
        console.log(output);
    }
    printAge();
    if (birthYear >= 1981 && birthYear <= 1996) {
        var str = `ten tao la ${firstName}`
        console.log(str);
    }
    str = `Bo Van la ${firstName}`;
    console.log(str);


}
const firstName = "trien";
calAge(1999);