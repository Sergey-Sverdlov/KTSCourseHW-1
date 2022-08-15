const multiply = (number) => {
    if (typeof number !== 'number') {
        throw new Error("INVALID_ARGUMENT")
    }
    return function (x) {
        if (typeof x !== 'number') {
            throw new Error("INVALID_ARGUMENT")
        }
        return number * x
    }
};

export default multiply;
