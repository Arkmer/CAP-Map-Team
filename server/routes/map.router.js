const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/all', (req, res) => {
    pool.query('SELECT * FROM map ORDER BY id DESC;')
        .then(function (result) {
            res.send(result.rows);
        }).catch(function (error) {
            res.sendStatus(500);
        })
});

router.get('/artifact/:id', (req, res) => {
    let id = req.params.id;
    pool.query('SELECT * FROM map JOIN map_artifact_join on map.id = map_artifact_join.location_id JOIN artifact on artifact.id = map_artifact_join.artifact_id WHERE map.id = $1;',
        [id]).then(function (result) {
            res.send(result.rows);
        }).catch(function (error) {
            res.sendStatus(500);
        })
});

router.delete('/join/delete/:id', (req, res) => {
    if (req.isAuthenticated()) {
        let id = req.params.id;
        pool.query('DELETE FROM map_artifact_join where id = $1;', [id])
            .then(function (result) {
                res.send(result.rows);
            }).catch(function (error) {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

router.post('/join/insert', (req, res) => {
    if (req.isAuthenticated()) {
        pool.query('INSERT INTO map_artifact_join (artifact_id, location_id, main_photo) VALUES ($1, $2, $3);',
            [req.body.artifact_id, req.body.location_id, req.body.main_photo], (err, result) => {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
    } else {
        res.sendStatus(403);
    }
});

router.post('/post', (req, res) => {
    if (req.isAuthenticated()) {
        let location = req.body;
        pool.query('INSERT INTO map (location_name, lat, long, reveal_type) VALUES ($1, $2, $3, $4) returning id, location_name;', [location.location_name, location.lat, location.long, location.reveal_type])
            .then(function (result) {
                res.send(result.rows);
            }).catch(function (error) {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

router.delete('/delete/:id', (req, res) => {
    if (req.isAuthenticated()) {
        let id = req.params.id;
        pool.query('DELETE FROM map_artifact_join where location_id = $1;', [id])
        pool.query('DELETE FROM map where id = $1;', [id])
            .then((result) => {
                res.sendStatus(204);
            }).catch((error) => {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

router.put('/edit', (req, res) => {
    if (req.isAuthenticated()) {
        let loc = req.body;
        pool.query('UPDATE map SET location_name = $1, lat = $2, long = $3, reveal_type = $4 WHERE id = $5;', [loc.location_name, loc.lat, loc.long, loc.reveal_type, loc.id])
            .then((result) => {
                res.sendStatus(201);
            }).catch((error) => {
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

router.get('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        let id = req.params.id;
        pool.query('SELECT * FROM map where id =$1', [id])
            .then((result) => {
                res.send(result.rows);
            }).catch((error) => {
                console.log(error);

                res.sendStatus(500);
            })
    }
})

router.get('/getLocationName/:id', (req, res) => {
    let id = req.params.id;
    pool.query('SELECT * from map WHERE id = $1', [id])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})

module.exports = router;