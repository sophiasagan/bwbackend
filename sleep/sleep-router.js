const router = require('express').Router();

const Users = require('../users/users-model.js');
const db = require('./sleep-model.js');
const restrict = require('../middleware/restrict');

// router.get('/sleep', (req,res) => {
//     db.find()
//         .then(data => {
//             res.status(200).json(data)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({message: 'unable to get all sleep data'})
//         })
// })

// router.get('/', restrict, (req, res) => {



//     db.getAll()
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({
//                 error: "Unable to get all sleep logs"
//             })
//         })

// })

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
            res.status(201).json(updatedData);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.delete('/:id', restrict, (req, res) => {
    const id = req.params.id;

    db.removeSleepData(id)
        .then(del => {
            res.status(200).json({ message: 'data deleted' });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

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

router.get('/:id/logs/score', restrict, (req, res) => {
    // console.log(req.decodedToken.subject)
    const id = req.params.id
    
    db.getSleepScore(id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: "Unable to get sleep score"
            })
        })
})


// const put = async (req, res) => {

//     // console.log(req.body)
//     const sleep_id = req.params.id
//     const user_id = req.decodedToken.subject
//     const result = await db.findBy({ user_id, id: sleep_id }).first()

//     if (!result) {
//         return res.status(404).json("Unauthorized Item");
//     }

//     const pendingItem = { ...result, ...req.body }
//     // console.log(pendingItem)
//     const duration = db.getDuration(pendingItem)
//     const score = db.getScore(pendingItem)

//     const newItem = {
//         ...pendingItem,
//         user_id,
//         duration,
//         score,
//     }

//     const updatedItem = await db.update(result.id, newItem)
//     if (updatedItem) {
//         res.status(200).json(updatedItem)
//     } else {
//         res.status(500).json('Update Failed')
//     }
// }




// const remove = (req, res) => {
//     // console.log(req.decodedToken.subject)
//     const user_id = req.decodedToken.subject
//     db.findBy({ user_id, id: req.params.id })
//         .then(results => {
//             // console.log(results)
//             if (results[0]) {
//                 db.remove(req.params.id)
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