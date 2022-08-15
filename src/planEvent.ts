const planEvent =  (...args) => {
    if (typeof args[0] !== 'function' || typeof args[1] !== 'number') {
        throw new Error("INVALID_ARGUMENT")
    }
    let f = args[0];
    let time = args[1];
    if (time <= 0) {
        return  new Promise(resolve => {
            setTimeout(() => {
                let result = f();
                resolve(result);
            }, 0)
        })
    }
    return  new Promise(resolve => {
        setTimeout(() => {
            let result = f();
            resolve(result);
        }, time)
    })
}

export default planEvent;
