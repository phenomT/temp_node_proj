// GLOBAL VARIABLES

// __dirname is used to access path to current directory
// __filename is used to access path up to the file name
// require : function to use modules (Common JS)
// module : information about current module (file)
// process : info about env where the program is being executed
// set interval and setTimeout are global functions also
console.log(__dirname,__filename);

setInterval(() => {
    console.log("i show every one second");
    
}, 1000);

