const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./auth-model.js');
const secrets = require('../api/secrets.js');

require('dotenv').config();



// endpoint begin with /auth

router.post('/register', validateUserInfo, (req, res) => {
    let user = req.body;

    const { password, username, lastname, firstname } = user

    if(!user || !password || !username || !lastname || !firstname)  {
        res.status(400).json({error: 'Every Field Must Be Entered'});
        return
      }

    const rounds = process.env.HASH_ROUNDS || 14;

    const hash = bcrypt.hashSync(user.password, rounds);

    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error.message })
        });
}); //working

router.post('/login', validateUserInfo, (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ message: `Welcome ${user.username}`, token });
            } else {
                res.status(401).json({ message: 'Invalid username or password' })
            }
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error.message })
        })
})

//Generate Token
function generateToken(user) {
    const payload = {
        userId: user.id,
        username: user.username,
    };
    const secret = secrets.jwtSecret;
    const options = {
        expiresIn: "2h",
    };
    return jwt.sign(payload, secret, options);
};

//Custom Middleware

function validateUserInfo(req, res, next) {
    if (!req.body.username || !req.body.password) {
      res.status(400).json({ message: 'Username & password fields are required.' });
    } else {
      next();
    }
  }

module.exports = router;