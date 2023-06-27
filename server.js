var express = require('express');
var cookieParser = require('cookie-parser')


const app = express();
const port = 8080;

//Cookie Attributes
var opts = {
    maxAge: 60000,
    httpOnly: true,
    sameSite: 'strict',
};

app.use(express.json())
app.use(cookieParser())

app.get('/login/:name', (req, res) => {
   
    res.cookie('name', req.params.name)
    res.send()
})

app.get('/hello', (req, res) => {

console.log(`Name: `,req.cookies.name)
res.send(`Welcome ` + req.cookies.name +'!')

})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))