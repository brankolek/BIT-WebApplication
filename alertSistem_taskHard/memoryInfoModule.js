var os = require('os');



let freeRam = () => {
    let ram = Math.floor(os.freemem() / (1024 * 1024));
    console.log(ram)
    return ram;

}

const freeRamChecker = (freeRam) => {

    setInterval(freeRam, 1000)

}


const registerForAlerts = (freeRamChecker, handle) => {

    let free = freeRamChecker(freeRam);
    if (free > 1000) {

        handle(free);
    }




}


registerForAlerts(freeRamChecker);

module.exports = {
    freeRamChecker,
    registerForAlerts
}