const intersection = (...args) => {
    if (args.length !== 2) {
        throw new Error("INVALID_ARGUMENTS_COUNT")
    }
    let arr1 = args[0];
    let arr2 = args[1];
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error("INVALID_ARGUMENT")
    }
    if (!arr1.every(el => typeof el === 'number') || !arr2.every(el => typeof el === 'number')) {
        throw new Error("INVALID_ELEMENT_IN_ARRAY")
    }
    let array_result: number[] = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== -1 && array_result.indexOf(arr1[i]) === -1) {
            array_result.push(arr1[i]);
        }
    }
    return array_result;
};

export default intersection;
