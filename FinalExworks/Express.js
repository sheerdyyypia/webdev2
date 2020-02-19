const express = require('express')
const app = express()
app.set('views', process.argv[3]);
app.set('view engine', 'pug');
app.get('/home', function(req, res) { 
//res.end('Hello World!')
res.render('index', {date: new Date().toDateString()})
})
//app.listen(3000)
//app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.listen(process.argv[2])
//let x = process.arg[3]