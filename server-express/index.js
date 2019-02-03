var express = require('express');
var axios = require('axios');
var cors = require('cors')
var bodyParser = require('body-parser');
var jwt = require('jwt-simple');
var secret = 'itspb';
var baseurl = "https://swapi.co/api";
var app = express();
// Create application/x-www-form-urlencoded parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.get('/', function (req, res) {
    res.send('Hello World');
})

app.post('/getUserDetails', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    axios.get(baseurl + '/people?search=' + username)
        .then(function (response) {
            if (response.data.count) {
                if (response.data.results[0].birth_year === password) {
                    var token = jwt.encode({ username, password }, secret);
                    res.json({
                        "tokenData": token,
                        username:username,
                        success: true
                    })

                }
                else {
                    res.json({
                        success: false
                    })

                }
            }
            else {
                res.json({
                    success: false
                })

            }
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error);
            res.json({ "error": "1" })
        });
})


app.get("/getPlanets", function (req, res) {

    axios.get(baseurl + "/planets").then((resData) => {
        // console.log(i)
        res.json(resData.data.results)
    }).catch((error) => {
        res.json({ error })
    })


})


app.post("/getplanetsByName", function (req, res) {

    var search = req.body.name;

    axios.get(baseurl + "/planets?search=" + search).then((resData) => {
        // console.log(i)
        res.json(resData.data.results)
    }).catch((error) => {
        res.json({ error })
    })

})  

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log(" app listening at http://%s:%s", host, port)
})