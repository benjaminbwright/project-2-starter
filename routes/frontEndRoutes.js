const router = require('express').Router();

router.use('/', (req, res) => {
  res.send('this is the home page');
});

module.exports = router;
