var figlet = require('figlet')




const print = function (string) {
    return figlet.textSync(string);
}


module.exports = {
    print
};