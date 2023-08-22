let greet = ()=>{
    console.log("Hello")
}

const add = (a:number, b:number, c?:number|string)=>{
    console.log(a+b);
}

const minus = (a:number, b:number) => {
    return a-b;
}

let result = minus(10, 5);

let calc: (a : number, b : number, c : string) => number;

calc = (numOne: number, numTwo: number, action : string): number => {
    if (action === 'add'){
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
}

