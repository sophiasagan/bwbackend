const router = require('express').Router();

const Users = require('../users/users-model.js');
const db = require('./sleep-model.js');
const restrict = require('../middleware/restrict');

router.post('/', restrict, (req, res) => {
    db.addSleepData(req.body)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});//working

//retrieve user name with sleep log array
router.get('/:id', restrict, (req, res) => {
    const id = req.params.id;

    Users.findById(id)
        .then(user => {
            db.getSleepDataByUser(id)
                .then(data => {
                    res.status(200).json({ ...user, data });
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        })
        .catch(err => {
            res.status(500).json(err);
        });
}); //working

router.put('/:id', restrict, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    db.updateSleepData(id, changes)
        .then(updatedData => {
            res.status(202).json(updatedData);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});//working

router.delete('/:id', restrict, (req, res) => {
    const id = req.params.id;

    db.removeSleepData(id)
        .then(del => {
            res.status(200).json({ message: 'data deleted' });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});//working

//retrieves sleep log array only - no user information
router.get('/:id/logs', restrict, (req, res) => {
    const id = req.params.id

    db.getSleepDataByUser(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: "Unable to get sleep logs"
            })
        })
});
//working

router.get('/:id/logs/duration', restrict, (req, res) => {
    const id = req.params.id
    const duration = req.params.duration
    const date = req.params.date

    db.getDuration(id)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: "Unable to get sleep logs"
        })
    })
})

module.exports = router;