class SmartCalculator {
    constructor(initialValue) {
        // your implementation
        this.value = initialValue;
        this.arr = [this.value];
        //console.log(this.arr);

    }


    add(number) {
        // your implementation
        this.arr.push('+', number);
        return this;

    }

    subtract(number) {
        // your implementation
        this.arr.push('-', number);
        return this;
    }

    multiply(number) {
        // your implementation
        this.arr.push('*', number);
        return this;
    }

    devide(number) {
        // your implementation
        this.arr.push('/', number);
        return this;
    }

    pow(number) {
        // your implementation
        this.arr.push('^', number);
        return this;
    }

    valueOf() {
        return this.calculate();
    }



    calculate(){
        //console.log(this.arr);
        //This is Power
        var temp = 0; var i = this.arr.length-2;
        while (i >=0 )
        {
            if (this.arr[i+1]==='^')
            {
                temp = Math.pow(this.arr[i], this.arr[i+2]);
                this.arr.splice(i, 3, temp);
                i--;
            }
            i--;
        }
        //This is Multiplication
        var i=0;
        while (i<this.arr.length)
        {
            if (this.arr[i+1]==='*')
            {
                temp = this.arr[i]*this.arr[i+2];
                this.arr.splice(i, 3, temp);
                i--;
            }
            i++;
        }

        //This is division
        var i =0;
        while (i<this.arr.length)
        {
            if (this.arr[i+1]==="/")
            {
                temp = this.arr[i]/this.arr[i+2];
                this.arr.splice(i, 3, temp);
                i--;
            }
            i++;
        }

        //Subtraction
        var i=0;
        while (i<this.arr.length)
        {
            if (this.arr[i+1]==='-')
            {
                temp = this.arr[i]-this.arr[i+2];
                this.arr.splice(i, 3, temp);
                i--;
            }
            i++;
        }

        //Addition
        var i=0;
        while (i<this.arr.length)
        {
            if (this.arr[i+1]==='+')
            {
                temp = this.arr[i]+this.arr[i+2];
                this.arr.splice(i, 3, temp);
                i--;
            }
            i++;
        }
        console.log(this.arr);

        return this.arr[0];






    }
}

module.exports = SmartCalculator;