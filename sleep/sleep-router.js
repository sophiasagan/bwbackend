const router = require('express').Router();

const Users = require('../users/users-model.js');
const SleepDb = require('./sleep-model.js');
const restrict = require('../middleware/restrict');

router.post('/', restrict, (req, res) => {
    SleepDb.addSleepData(req.body)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/:id', restrict, (req, res) => {
    const id = req.params.id;

    Users.findById(id)
        .then(user => {
            SleepDb.getSleepDataByUser(id)
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

    SleepDb.updateSleepData(id, changes)
        .then(updatedData => {
            res.status(201).json(updatedData);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.delete('/:id', restrict, (req, res) => {
    const id = req.params.id;

    SleepDb.removeSleepData(id)
        .then(del => {
            res.status(200).json({ message: 'data deleted' });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

const post = (req, res) => {
    // console.log(req.decodedToken.subject)
    const user_id = req.decodedToken.subject
    const sleepEntry = req.body
    const duration = SleepDb.getDuration(sleepEntry)
    const score = SleepDb.getScore(sleepEntry)
    SleepDb.add({
        ...sleepEntry,
        duration,
        user_id,
        score
    })
        .then(results => {
            return res.status(201).json(results);
        })
        .catch(err => res.send(err));
}

const put = async (req, res) => {

    // console.log(req.body)
    const sleep_id = req.params.id
    const user_id = req.decodedToken.subject
    const result = await SleepDb.findBy({ user_id, id: sleep_id }).first()

    if (!result) {
        return res.status(404).json("Unauthorized Item");
    }

    const pendingItem = { ...result, ...req.body }
    // console.log(pendingItem)
    const duration = SleepDb.getDuration(pendingItem)
    const score = SleepDb.getScore(pendingItem)

    const newItem = {
        ...pendingItem,
        user_id,
        duration,
        score,
    }

    const updatedItem = await SleepDb.update(result.id, newItem)
    if (updatedItem) {
        res.status(200).json(updatedItem)
    } else {
        res.status(500).json('Update Failed')
    }
}




// const remove = (req, res) => {
//     // console.log(req.decodedToken.subject)
//     const user_id = req.decodedToken.subject
//     SleepDb.findBy({ user_id, id: req.params.id })
//         .then(results => {
//             // console.log(results)
//             if (results[0]) {
//                 SleepDb.remove(req.params.id)
//                     .then(success => success == 1 ? res.status(200).json(success) : res.status(404).json({ err: 'please try again' }))
//                     .catch(err => res.status(500).json(err))
//             }
//             else {
//                 return res.status(404).json("Unauthorized Item");
//             }
//         })
//         .catch(err => res.send(err));
// }


module.exports = router;