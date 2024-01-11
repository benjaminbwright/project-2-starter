const router = require('express').Router();

// GET /api/todos - get all the todos
router.get('/', (req, res) => {
  res.json([
    {
      text: 'Buy Milk',
      complete: false,
    },
  ]);
});

module.exports = router;
