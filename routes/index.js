var express = require('express');
var router = express.Router();

// Sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini message board', messages });
});

// Render new message form
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Mini message board' });
});

// Add message to list
router.post('/new', function(req, res, next) {
  messages.push({ ...req.body, added: new Date() });
  return res.redirect('/');
});

module.exports = router;
