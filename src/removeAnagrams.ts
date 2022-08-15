const removeAnagrams = (array) => {
    if (!Array.isArray(array)) {
        throw new Error("INVALID_ARGUMENT")
    }

    if (!array.every(el => typeof el === 'string')) {
        throw new Error("INVALID_ELEMENT_IN_ARRAY")
    }

    let copy_array = array.slice();

    for (let i = 0; i < copy_array.length; i++) {
        let array_word = copy_array[i].split('');
        array_word.sort();
        copy_array[i] = array_word.join('');
    }


    for (let i = 0; i < copy_array.length; i++) {
        let item = copy_array[i]
        for (let j = i + 1; j < copy_array.length; j++) {
            if (item === copy_array[j]) {
                copy_array[i] = '0';
                copy_array[j] = '0';
            }
        }
    }
    let array_result: string[] = [];

    for (let i = 0; i < copy_array.length; i++) {
        if (copy_array[i] !== '0') {
            array_result.push(array[i])
        }
    }
    return array_result;
};

export default removeAnagrams;
