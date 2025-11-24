let arr = [3,8,2,6,7,8,4,5,6,3,2];

function Dup(arr){
    let obj={};
    let res= [];
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            res.push(arr[i])
        }else{
            obj[arr[i]] = obj[arr[i]] + 1
        }
    }
    return res;
}
console.log(Dup(arr))