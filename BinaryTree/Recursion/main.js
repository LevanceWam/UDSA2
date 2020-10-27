console.log(factorial(4));
console.log(factorial2(4));

function factorial(n){
    let factorial = 1;

    for(let i = n; i>1; i--){
        factorial *= i;
    }

    return factorial;
}

function factorial2(n){
    if (n == 0) return 1;
    return n * factorial(n-1);
}