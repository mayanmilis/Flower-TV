const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')

//Item Model
const Mail = require('../../models/Mail');


// @rout    POST api/items
// @desc    Create A Item
// @access  Public

router.post('/', (req,res) =>{   
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: 'flowertv.tests@gmail.com', // generated ethereal user
            pass: 'flower123456' // generated ethereal password
          }
        });
      
        // setup email data with unicode symbols
        let mailOptions = {
          from: 'Flower-TV System', // sender address
          to: "flowertv.tests@gmail.com", // list of receivers
          subject: `New User Request From ${req.body.firstName + ' ' + req.body.lastName}`, // Subject line
          html: `<p>You have a new user request</p>
                <h3>User Details</h3>
                <ul>
                    <li>First Name: ${req.body.firstName}</li>
                    <li>Last Name: ${req.body.lastName}</li>
                    <li>Phone Number: ${req.body.phoneNumber}</li>
                    <li>Email: ${req.body.email}</li>
                </ul>
                <p>To see all users requests:</p>
                <a href="http://localhost:3000/userslist">click here</a>
          `
        };
      
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
         });
});


module.exports = router;