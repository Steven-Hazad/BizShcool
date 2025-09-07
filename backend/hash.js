// hash.js
const bcrypt = require('bcryptjs');

const password = 'password'; // replace with your password
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Hashed password:', hash);
    }
});
