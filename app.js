const express = require("express")
const app = express()
app.use(express.static("static"))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var server = app.listen(5000, function () {
    console.log('Listening on port %d', server.address().port);
});


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html")
})

app.post('/', function (req, res) {
    console.log(req.body.type)
})

app.get('/data', function (req, res) {
    const fs = require('fs')
    const datasetPath = '/home/keae/flotation/dataset/Geolife Trajectories 1.3/Data/001/Trajectory/'
    // const filePath = '/home/keae/flotation/dataset/Geolife Trajectories 1.3/Data/001/Trajectory/20081023055305.plt'

    var result = []
    var trackID = 1
    var index = 0
    for (fp of fs.readdirSync(datasetPath)) {
        // console.log('reading file: ' + datasetPath + fp)
        var file = fs.readFileSync(datasetPath + fp).toString()
        var lines = file.split('\n').slice(6)
            .filter(val => val != '')
            .filter((val, index) => index % 12 == 0)

        for (let line of lines) {
            line = line.replace(/[\r]/, '').split(',')
            result.push({
                'index': index,
                'lat': Number.parseFloat(line[0]),
                'lng': Number.parseFloat(line[1]),
                'datatime': line[5] + ',' + line[6],
                'trackID': trackID,
                'type': ''
            })
            index = index + 1
        }
        trackID = trackID + 1
    }

    res.send(result)
})