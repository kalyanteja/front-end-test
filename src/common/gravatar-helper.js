const md5 = require('md5');

const getImageHashByEmail = (email) => {
    return email
        ? md5(email)
        : '00000000000000000000000000000000'; //default image hash
};

exports.ImageHashByEmail = getImageHashByEmail;