let arr=[1,2,3,4,5];
function applyOperation(numbers,operation){
    let ans=[];
    for(let n of numbers){
        ans.push(operation(n));
    }
    return ans;
}
function double(n){
    return n*2;
}
function square(n){
    return n*n;
}
console.log(applyOperation(arr,double));
console.log(applyOperation(arr,square));