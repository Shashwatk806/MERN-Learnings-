
//throttling
function throttle(fn,delay){
    let lastCall = 0;
    return function(...args){
        const now = Date.now();
        if(now - lastCall < delay){
            return;
        }
        lastCall = now;
        return fn(...args);
    }
}

function sendMsg(msg){
    console.log(`sending messsage ${msg}`);
}

const sendMsgWithThrottle = throttle(sendMsg,200);

// sendMsgWithThrottle('hi');
// sendMsgWithThrottle('hi my name');
// sendMsgWithThrottle('hi my name is khan')

sendMsgWithThrottle('hi',0);
sendMsgWithThrottle('hi my name is',100);
sendMsgWithThrottle('hi my name is Prince',300);
sendMsgWithThrottle('hi my name is Prince, Welcome to the world',500)