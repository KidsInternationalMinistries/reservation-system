const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('list', { title: 'List Reservations' });
});

module.exports = router;
