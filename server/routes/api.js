var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contact', (req, res, next) => {
  const {
    subject,
    firstname,
    lastname,
    email,
    phone,
    language,
    message,
    company
  } = req.body;
  console.log(req.body)

  res.mailer.send('email', {
      to: 'sordier.andrew@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
      subject, // REQUIRED.
      firstname,
      lastname,
      email,
      phone,
      language,
      message,
      company // All additional properties are also passed to the template as local variables.
    }, function (err) {
      if (err) {
        // handle error
        console.log(err);
        res.json({status:false});
        return;
      }
      res.json({status:true});
})
});

module.exports = router;
