const datasetPath = 'dataset/Geolife Trajectories 1.3/Data/001/Trajectory/'
const resultsPath = 'results/result.json'

const load = require('./load.js')

data = load.loadRaw(datasetPath, 2)
load.setData(data, resultsPath)
console.log(data.length)