const express = require('express');
const encryptLib = require('../modules/encryption');
const Person = require('../models/Person');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', (req, res)=>{
  // check if logged in
  if(req.isAuthenticated()){
    res.send(req.user);
  }else{
    res.sendStatus(403);
  }
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next)=>{
  if(req.isAuthenticated()){
    const username = req.body.username;
    const password = encryptLib.encryptPassword(req.body.password);
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    var saveUser = {
      username: req.body.username,
      password: encryptLib.encryptPassword(req.body.password),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
    };
    pool.query('INSERT INTO users (username, password, first_name, last_name, email) VALUES ($1, $2, $3, $4, $5) RETURNING id;',
      [saveUser.username, saveUser.password, saveUser.first_name, saveUser.last_name, saveUser.email], (err, result) => {
        if(err){
          res.sendStatus(500);
        }else{
          res.sendStatus(201);
        }
      })
    }else{
        res.sendStatus(403);
    }
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res)=>{
  res.sendStatus(200);
});

// clear all server session information about this user
router.get('/logout', (req, res)=>{
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.get('/guest/all', (req, res)=>{
  pool.query('SELECT * FROM guest_users;')
  .then(function(result){
    res.send(result.rows);
  }).catch(function(error){
    res.sendStatus(500);
  })
});

router.get('/admin/all', (req, res)=>{
  if(req.isAuthenticated()){
    pool.query('SELECT * FROM users ORDER BY id;')
    .then(function(result){
      res.send(result.rows);
    }).catch(function(error){
      res.sendStatus(500);
    })
  }else{
      res.sendStatus(403);
  }
});

router.delete('/guest/delete/:id', (req, res)=>{
  if(req.isAuthenticated()){
    let id = req.params.id;
    pool.query('DELETE FROM guest_users WHERE id = $1;', [id])
    .then(function(result){
      res.send(result.rows);
    }).catch(function(error){
      res.sendStatus(500);
    })
  }else{
      res.sendStatus(403);
  }
});

router.post('/guest', (req, res)=>{
  pool.query('INSERT INTO guest_users (name, email) VALUES ($1, $2);', [req.body.name, req.body.email])
  .then(function(result){
    res.sendStatus(201);
  }).catch(function(error){
    res.sendStatus(500);
  })
})

router.delete('/admin/delete/:id', (req, res)=>{
  if(req.isAuthenticated()){
    let id = req.params.id;
    pool.query('DELETE FROM users WHERE id = $1;', [id])
    .then(function(result){
      res.send(result.rows);
    }).catch(function(error){
      res.sendStatus(500);
    })
  }else{
      res.sendStatus(403);
  }
})

module.exports = router;