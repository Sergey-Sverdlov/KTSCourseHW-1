// @ts-nocheck
const patchArrays = () => {

    Array.prototype.count  = function () {
        return this.length
    }

    Array.prototype.insert  = function (index, element) {
        if (typeof index !== 'number') {
            throw new Error("INVALID_ARGUMENT")
        }
        if (index < 0) {
            this.splice(0, 0, element);
            return this;
        }

        else if (index >= this.length) {
            this.push(element)
            return this;
        }
        else {
            this.splice(index, 0, element);
            return this;
        }
    }

    Array.prototype.remove = function (element) {

        if (this.indexOf(element) === -1) {

            return this;
        }

        let index = this.indexOf(element);

        this.splice(index, 1);

        return this;
    }

};

export default patchArrays;