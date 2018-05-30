const {
    freeRamChecker,
    registerForAlerts
} = require("./memoryInfoModule")



let handle = (ram) => {
    console.log("FINAL")

}



registerForAlerts(freeRamChecker, handle)