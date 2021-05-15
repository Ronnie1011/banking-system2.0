const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app= express();
app.use(express. static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());


var moneytransfer = [
   {
      
      Name: "qwer",
      Account_No: "1234567",
      Transfer_Amount: "234",
      Payment_Method: "neft"
   }
]


app.get('/', function(req, res)
{    
   return res.render('1', {title: "Homepage"});
});

app.get('/About', function(req, res)
{    
   return res.render('About', {title: "About Us"});
});

app.get('/contact', function(req, res)
{    
   return res.render('contact', {title: "contact Us"});
});

app.get('/acct', function(req, res)
{    
   return res.render('acct', {title: "List of customers"});
});

app.get('/money', function(req, res)
{    
   return res.render('money',{
      money_transfer: moneytransfer 
  });
  });

app.post('/money-transfer',function(req, res){
   moneytransfer.push(req.body);
    res.redirect('back');
});  


app.listen(port, function(err){
    if (err) { console.log('error in running the server', err);}
    console.log('My express server is running on port:', port);

}); 