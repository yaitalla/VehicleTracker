const R = require('ramda');
const { timeout, VEHICLES_IDS } = require('./misc');
const xmlParser = require('./xmlParser');
let trackingData = {};

const recursEngine = io => async (vId, vData, vIndex) => {
    if (vIndex === vData.length) {
        await timeout(3000);
        await recursEngine(io)(vId, vData, 0);
        return;
    }
    trackingData = Object.assign(trackingData, {
        [vId]: {
            position: vData[vIndex]['$'],
            id: vId
        }
    });
    io.emit('updateLocation', trackingData)
    const stackOverflowSecuritySleepTime =  Math.random() * (5000 - 500) + 500;
    await timeout(stackOverflowSecuritySleepTime);
    await recursEngine(io)(vId, vData, vIndex + 1)
}

const startEngine = async io => {
    const loopTransmitter = recursEngine(io);
    VEHICLES_IDS.forEach(async vId => {
        const vehicleData = R.path(
            ["gpx", "wpt"],
            await xmlParser(`/gpx/${vId}.gpx`)
        );
        loopTransmitter(vId, vehicleData, 0)
    });
}

module.exports = {
    startEngine
}