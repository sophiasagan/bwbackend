const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id', verifyUser, (req, res) => {
  const id = req.params.id;

  Users.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// router.put('/:id', verifyUser, (req, res) => {
//     const id = req.params.id;
    // const changes = req.body;

  //   Users.update(id, changes)
  //     .then(updatedUser => {
  //       res.status(201).json(updatedUser);
  //     })
  //     .catch(err => {
  //       res.status(500).json(err);
  //     });
  // });
  // let changes = req.body;

  // const { password, username, lastname, firstname } = changes

  // if(!user || !password || !username || !lastname || !firstname)  {
  //     res.status(400).json({error: 'Every Field Must Be Entered'});
  //     return
  //   }

  // const rounds = process.env.HASH_ROUNDS || 14;

  // const hash = bcrypt.hashSync(user.password, rounds);

  // user.password = hash;

  // Users.update(id, changes)
  //     .then(saved => {
  //         res.status(201).json(saved);
  //     })
  //     .catch(error => {
  //         res.status(500).json({ errorMessage: error.message })
  //     });
//});




//   if (
//     !req.body 
//   ) {
//     res.status(406).json({
//       error: true,
//       user: {},
//       message: 'Please include all required fields and try again.',
//       numUpdated: 0
//     });
//   }
//   try {
//     // Hash password comparisons
//     const hash = bcrypt.hashSync(req.body.password, 14);
//     req.body.password = hash;

//     const updatedUser = await Users.update(req.params.id, req.body);
//     if (updatedUser) {
//       const user = await Users.findBy(id)
//         .where({
//           username: req.body.username
//         })
//         .first();
//       res.status(200).json({
//         error: false,
//         message: 'Your profile was updated successfully.',
//         numUpdated: updatedUser,
//         user: {
//           id: user.id,
//           username: user.username,
//           firstName: user.firstName,
//           lastName: user.lastName,
//           created_at: user.created_at,
//           updated_at: user.updated_at
//         }
//       });
//     } else {
//       res.status(404).json({
//         error: true,
//         user: {},
//         message: 'Your profile could not be updated.',
//         numUpdated: 0
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       error: true,
//       user: {},
//       message: 'There was an error processing your request.',
//       numUpdated: 0
//     });
//   }
// });
 //WIP


router.delete('/:id', verifyUser, (req, res) => {
  const id = req.params.id;

  Users.remove(id)
    .then(deletedUser => {
      const unit = deletedUser > 1 ? 'records' : 'record';
      res.status(200).json({ message: `${deletedUser} ${unit} deleted.` });
    })
    .catch(err => {
      res.status(500).json(err);
    });
}); //working


//Custom Middleware

function verifyUser(req, res, next) {
  const id = req.params.id;

  Users.findById(id)
    .then(item => {
      if (item) {
        req.item = item;
        next();
      } else {
        res.status(404).json({ message: 'User Not Found.' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

module.exports = router;