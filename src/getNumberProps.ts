const getNumberProps = (obj) => {
    if (!(Object.prototype.toString.call(obj) === "[object Object]")) {
        throw new Error("INVALID_ARGUMENT");
    }
    let array : any[] = []
    getProp(obj);
    function getProp(o) {
        for (let prop in o) {
            if (typeof (o[prop]) === 'object') {
                getProp(o[prop])
            }
            else {
                if (typeof o[prop] == 'number') {
                    array.push(prop)
                }
            }
        }
    }
    array.sort();
    return array;
};

export default getNumberProps;
