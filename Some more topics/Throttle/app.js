
function throttle(fn,delay){
    let lastCall = 0;
    return function(...args){
        const now = Date.now();
        if(now-lastCall < delay){
            return;
        }
        lastCall = now;
    return fn(...args);
    }
}

function sendMsg(msg){
    console.log(`Sending message ${msg}`);
}

const sendMsgWithThrottle = throttle(sendMsg,2);

sendMsgWithThrottle('hi');
sendMsgWithThrottle('hi my name is');
sendMsgWithThrottle('hi my name is Prince');
sendMsgWithThrottle('hi my name is Prince, Welcome to the world')