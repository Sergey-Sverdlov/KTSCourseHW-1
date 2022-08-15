const sum = (...args) => {
    if (args.length < 2) {
        throw new Error("INVALID_ARGUMENTS_COUNT");
    }
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            throw new Error("INVALID_ARGUMENT");
        }
    }
    let s = 0;
    for (let i = 0; i < args.length; i++) {
        s += args[i]
    }
    return s;
};

export default sum;
