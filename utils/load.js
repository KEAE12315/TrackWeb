const fs = require('fs')


function loadRaw(datasetPath = '/home/keae/flotation/dataset/Geolife Trajectories 1.3/Data/001/Trajectory/', step = 2) {
    var data = []
    var trackID = 1
    var index = 0
    for (fp of fs.readdirSync(datasetPath)) {
        // console.log('reading file: ' + datasetPath + fp)
        var file = fs.readFileSync(datasetPath + fp).toString()
        var lines = file.split('\n').slice(6)
            .filter(val => val != '')
            .filter((val, index) => index % step == 0)

        for (let line of lines) {
            line = line.replace(/[\r]/, '').split(',')
            data.push({
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

    return data
}

function getData(filePath = 'results/result.json') {
    var data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    return data
}

function setData(data, filePath = 'results/result.json') {
    fs.writeFile(filePath, JSON.stringify(data, null, "\t"), err => {
        if (err) {
            console.error(err)
            return false
        }
    })
}

module.exports = { loadRaw, getData, setData }