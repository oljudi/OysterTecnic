const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Im alive 😀😀' });
});

module.exports = router;
