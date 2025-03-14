const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('request', { title: 'Request Reservation' });
});

module.exports = router;
