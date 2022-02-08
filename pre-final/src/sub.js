const argsList = process.argv;
const nums = argsList.slice(2,argsList.length);
var sub=0;
var addition = nums.forEach((i)=>{
    sub-=Number(i);
    return sub;
});
console.log(sub); 