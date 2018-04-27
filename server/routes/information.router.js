const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/get', (req, res) => {
    pool.query(`SELECT * FROM information ORDER BY id;`)
        .then(function (result) {
            res.send(result.rows);
        }).catch(function (error) {
            res.sendStatus(500);
        })
})

router.post('/post', (req, res) => {
    if (req.isAuthenticated()) {
        const guideline = req.body;
        pool.query("INSERT INTO information (description, category) VALUES ($1, 'guideline');",
            [guideline.description])
            .then(function (result) {
                res.sendStatus(201);
            }).catch(function (error) {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
})

router.put('/edit/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const guideline = req.body;
        pool.query('UPDATE information SET description = $1, category = $2 WHERE id = $3;',
            [guideline.description, guideline.category, guideline.id])
            .then(function (result) {
                res.sendStatus(201);
            }).catch(function (error) {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
})

router.delete('/delete/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const id = req.params
        pool.query(`delete from information where id = $1;`, [req.params.id])
            .then(function (result) {
                res.sendStatus(201);
            }).catch(function (error) {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;