const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/*', (req, res) => {
  res.render('index', { title: 'Utopian Connect' });
});

module.exports = router;
