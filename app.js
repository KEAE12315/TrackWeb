const express = require("express")
const app = express()
app.use(express.static("static"))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var server = app.listen(5000, function () {
    console.log('Listening on port %d', server.address().port);
});


const resultsPath = 'results/result.json'
const fs = require('fs')


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html")
})

app.post('/mark/point', function (req, res) {
    var data = JSON.parse(fs.readFileSync(resultsPath, 'utf8'))
    var index = req.body.index
    var response = {}

    if (data[index].type != 'none') {
        response.code = 201
        response.msg = 'warning: type of point(' + index.toString() + ') from ' + data[index].type + ' to ' + req.body.type
    } else if (req.body.type == 'none') {
        response.code = 201
        response.msg = "warning: you don't mark the point(" + index.toString() + ')'
    } else {
        response.code = 200
        response.msg = 'success: updata point(' + index.toString() + ') to ' + req.body.type
    }

    data[index].type = req.body.type
    fs.writeFile(resultsPath, JSON.stringify(data), err => {
        if (err) {
            console.error(err)
            return
        }
    })

    res.send(response)
})

app.get('/data', function (req, res) {
    res.send(JSON.parse(fs.readFileSync(resultsPath, 'utf8')))
})