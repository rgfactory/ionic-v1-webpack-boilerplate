
(() => {
    let oldLogFn = console.log; //Save the original console.log function

    console.log = function log() { //override the console.log function
        if (DEBUG) {
            return oldLogFn.apply(this, arguments); //call the original console.log function
        }
    }
})();