const fs = require('fs')
const datasetPath = '/home/keae/flotation/dataset/Geolife Trajectories 1.3/Data/001/Trajectory/'
const resultsPath = 'results/result.json'

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
            'datetime': line[5] + ',' + line[6],
            'trackID': trackID,
            'type': 'none'
        })
        index = index + 1
    }
    trackID = trackID + 1
}

fs.writeFile(resultsPath, JSON.stringify(result), err => {
    if (err) {
        console.error(err)
        return
    }
})