const argsList = process.argv;
const nums = argsList.slice(2,argsList.length);
var sum=0;
var addition = nums.forEach((i)=>{
    sum+=Number(i);
    return sum;
});
console.log(sum); 