var express = require('express');
var multer = require('multer');
var app = express();
var upload = multer({ dest: 'uploads/' });

app.set('port', (process.env.PORT || 5000));


app.get('/', function (req, res) {
	res.sendFile(__dirname+'/index.html');
	//res.send('Hello World');
});


app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file);
  res.send("Size is:"+req.file.size);
})
app.get('/*', function (req, res) {
	res.sendFile(__dirname+'/index.html');
	//res.send('Hello World');
});

var server = app.listen(app.get('port'), function () {
var host = 'localhost'
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
});