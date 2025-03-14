const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('deny', { title: 'Deny Reservation' });
});

module.exports = router;
