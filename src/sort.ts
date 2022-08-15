const sort = (str) => {
    if (typeof str !== 'string') {
        throw new Error("INVALID_ARGUMENT")
    }
    str = str.toLowerCase();
    let array = str.split(' ');
    for (let i = 0; i < array.length; i++) {
        let array_word = array[i].split('');
        array_word.sort();
        array[i] = array_word.join('');
    }
    array.sort((el1, el2) => el1.length >= el2.length ? 1 : -1)
    return array.join(' ')
};

export default sort;
