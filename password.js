const bcrypt = require('bcrypt');


const pwdEncription = (password) => {
    const hasheNdPWD = bcrypt.hash(password, 10)
    return hasheNdPWD
}


const enpwd = await pwdEncription(req.body.password);
