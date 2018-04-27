const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/get', (req, res) => {
    pool.query(`SELECT * FROM events order by date;`)
        .then(function (result) {
            res.send(result.rows);
        }).catch(function (error) {
            res.sendStatus(500);
        })
});

router.put('/edit', (req, res) => {
    if (req.isAuthenticated()) {
        let event = req.body;
        pool.query(`UPDATE events SET title = $1, date = $2, time = $3, description = $4, notes = $5, category = $6, photo_url = $7, age_group = $8, price = $9 WHERE id = $10;`,
            [event.title, event.date, event.time, event.description, event.notes, event.category, event.photo_url, event.age_group, event.price, event.id])
            .then(function (result) {
                res.sendStatus(201);
            }).catch(function (error) {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

router.delete('/delete/:id', (req, res) => {
    if (req.isAuthenticated()) {
        pool.query(`DELETE FROM events where id = $1;`, [req.params.id])
            .then(function (result) {
                res.sendStatus(201);
            }).catch(function (error) {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

router.post('/post', (req, res) => {
    if (req.isAuthenticated()) {
        const event = req.body;
        pool.query('INSERT INTO events (title, date, time, description, notes, category, photo_url, age_group, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);',
            [event.title, event.date, event.time, event.description, event.notes, event.category, event.photo_url, event.age_group, event.price])
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