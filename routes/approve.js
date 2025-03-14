const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('approve', { title: 'Approve Reservation' });
});

module.exports = router;
