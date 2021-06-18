// array
const jonasArray = [
    'jonas',
    'schmedtmann',
    2037 - 1999,
    'teacher', ['Micheal', 'Peter', 'Steven'],
];

// object
const jonas = {
    firstName: 'jonas',
    lastName: 'schmedtmann',
    age: 2037 - 1999,
    job: 'teacher',
    friend: ['Micheal', 'Peter', 'Steven'],
};

/* có hai cách để lấy properties từ một object
 lấy bằng cách dùng dấu chấm và ghi tên thuộc tính cần lấy của một object
*/
console.log(jonas.firstName);

// lấy prop bằng cách "bracket notation"
console.log(jonas['firstName']);

// sư khác nhau giữa hai cách 
const keyName = "Name";
console.log(jonas['first' + keyName]);
console.log(jonas['last' + keyName]);

// lấy thuộc tính bằng cách chấm thì không thể dùng expression được

// thêm prop vào object 
// dot notation
jonas.location = "29 Ngo Gia Tự"
    // braket notation
jonas['fb'] = "Nguyễn Triển"

console.log(jonas);