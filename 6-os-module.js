const { log } = require('console');
const os = require('os');

// info about current user
const user = os.userInfo();

// return system uptime in seconds
const upTime = os.uptime();

console.log(`the system has been up since ${upTime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
    platForm : os.platform(),
    architechture: os.arch()
}

console.log('an object about operating system props', currentOS);
