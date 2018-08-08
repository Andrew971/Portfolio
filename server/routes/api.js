var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express',subject:'my node-js app' });
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
      to: 'contact@andrewsordier.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
      replyTo:email,
      bcc:'sordier.andrew@gmail.com',
      subject, // REQUIRED.
      firstname,
      lastname,
      email,
      phone,
      language,
      message,
      company // All additional properties are also passed to the template as local variables.
    }, (err) => {
      if (err) {
        // handle error
        console.log(err );
        res.json({status:false});
        return;
      }
      console.log('succes')
      res.json({status:true});
})


});

module.exports = router;
