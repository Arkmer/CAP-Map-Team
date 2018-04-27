const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/all', (req, res) => {
    pool.query(`SELECT * FROM artifact ORDER BY id;`)
        .then(function (result) {
            res.send(result.rows);
        }).catch(function (error) {
            res.sendStatus(500);
        })
})

router.get('/sculpture', (req, res) => {
    pool.query(`SELECT * FROM artifact WHERE type = 'sculpture' ORDER BY id DESC;`)
        .then(function (result) {
            res.send(result.rows);
        }).catch(function (error) {
            res.sendStatus(500);
        })
})

router.get('/media', (req, res) => {
    pool.query(`SELECT * FROM artifact WHERE (type = 'photo') OR (type = 'video') ORDER BY id DESC;`)
        .then(function (result) {
            res.send(result.rows);
        }).catch(function (error) {
            res.sendStatus(500);
        })
})

router.get('/writing', (req, res) => {
    pool.query(`SELECT * FROM artifact WHERE (type = 'writing') ORDER BY id DESC;`)
        .then(function (result) {
            res.send(result.rows);
        }).catch(function (error) {
            res.sendStatus(500);
        })
})

router.get('/poem', (req, res) => {
    pool.query(`SELECT * FROM artifact WHERE (type = 'poem') ORDER BY id DESC;`)
        .then(function (result) {
            res.send(result.rows);
        }).catch(function (error) {
            res.sendStatus(500);
        })
})

router.get('/anecdote', (req, res) => {
    pool.query(`SELECT * FROM artifact WHERE (type = 'anecdote') ORDER BY id DESC;`)
        .then(function (result) {
            res.send(result.rows);
        }).catch(function (error) {
            res.sendStatus(500);
        })
})

router.get('/single/:id', (req, res) => {
    let id = req.params.id;
    pool.query('SELECT * FROM artifact WHERE id = $1;', [id])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            res.sendStatus(500);
        })
})

router.put('/edit', (req, res) => {
    if (req.isAuthenticated()) {
        let art = req.body;
        pool.query('UPDATE artifact SET type = $1, year = $2, material = $3, artist_name = $4, title = $5, description = $6, extended_description = $7, media_url = $8, view_count = $9 WHERE id = $10;',
            [art.type, art.year, art.material, art.artist_name, art.title, art.description, art.extended_description, art.media_url, art.view_count, art.id])
            .then((result) => {
                res.sendStatus(201);
            }).catch((error) => {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
})

router.delete('/join/delete/:artifactid/:locationid', (req, res) => {
    if (req.isAuthenticated()) {
        let artifact_id = req.params.artifactid;
        let location_id = req.params.locationid;
        pool.query('DELETE FROM map_artifact_join WHERE artifact_id = $1 and location_id = $2;', [artifact_id, location_id])
            .then((result) => {
                res.sendStatus(204);
            }).catch((error) => {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
})

router.post('/save', (req, res) => {
    if (req.isAuthenticated()) {
        let obj = req.body;
        pool.query('INSERT INTO artifact (type, year, material, artist_name, title, description, extended_description, media_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id;',
            [obj.type, obj.year, obj.material, obj.artist_name, obj.title, obj.description, obj.extended_description, obj.media_url])
            .then(function (result) {
                res.send(result.rows);
            }).catch(function (error) {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
})

router.delete('/delete/:id', (req, res) => {
    if (req.isAuthenticated()) {
        let id = req.params.id;
        pool.query('DELETE FROM map_artifact_join where artifact_id = $1;', [id])
        pool.query('DELETE FROM artifact where id = $1;', [id])
            .then((result) => {
                res.sendStatus(204);
            }).catch((error) => {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
})

module.exports = router;