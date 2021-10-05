const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 40000;


app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'100mb'
}));

app.use(cors());

app.all('*',function(req,res,next){
    res.header('Access-Control-Allowed-Origin','*');
    res.header('Access-Control-Allowed-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allowed-Headers','Content-Type');
    next();
});

//GET

app.get('/Date', function(request, response){
    let dateproof = new Date().toString()
    response.send(dateproof)
});

app.get('/FullNname',function(req,res){
     res.send('Lesly Montserrat Hernández López')
});

app.get('/CityLive',function(req,res){
    res.send('Garcia Nuevo Leon')
});

app.get('/School',function(req,res){
    res.send('Universidad Tecnológica de Santa Catarina')
});


//POST

app.post('/Sum',function(req, res){
    let nom = req.body
    let sum = nom.num1 + nom.num2
    
    sum = sum.toString()
    console.log(sum)
    res.send('The sum is: ' + sum)
});

app.post('/Mult',function(req,res){
    let number = req.body
    let mult = number.num1 * number.num2 * number.num3
    
    mult = mult.toString()
    console.log(mult)
    res.send('The multiplication is: ' + mult)
});

app.post('/AreaSquare',function(req,res){
    let cube = req.body
    let base = cube.side1
    let height = cube.side2 
    let area = cube.side1 * cube.side2
    
    area = area.toString()
    console.log(area)
    res.send('The area of the square is: ' + area)
});

app.post('/AreaTriangle',function(req,res){
    let triangle = req.body
    let base = triangle.base
    let height = triangle.height
    let area = triangle.base * triangle.height / 2
    
    area = area.toString()
    console.log(area)
    res.send('The area of the triangle is: ' + area)
});


app.listen(port,function(){
    console.log('MY APP IS RUNNUNG AT THE PORT' + port);
})