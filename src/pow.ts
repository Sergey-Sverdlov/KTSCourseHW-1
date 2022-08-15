function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}

const my_pow = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("INVALID_ARGUMENT")
    }
    if (b == 0 && a !== 0) {
        return 1
    }

    if (b === 0 && a === 0) {
        return Infinity;
    }

    let result = 1;
    if (b > 0) {
        for (let i = 0; i < b; i++) {
            result *= a;
        }
    }
    else {
        b = -b;
        for (let i = 0; i < b; i++) {
            result *= a;
        }
        result = 1/ result;
    }
    return result;
};

let pow = curry(my_pow);


export default pow;
