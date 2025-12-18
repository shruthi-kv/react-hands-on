// let numbers = [1,3,4,5,6,2];

// let res = numbers.reduce((acc,curr)=>{return acc+curr},2);
// console.log(res)


let food = new Promise((resolve,reject)=>{
    try{
        setTimeout(()=>{
            resolve('Hello')
        },1000)

    }catch(err){
        reject('Error Ocurred!')
    }
})

food.then((data)=>{
    console.log(data)
}).catch((err)=> console.log(err))





