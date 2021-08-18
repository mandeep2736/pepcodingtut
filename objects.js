let obj = 
{
    1 : "hello1",
    2 : "hello1" 
}
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// i is same as key we can write i as well as key here
// for(let i in obj)
// {
//     console.log(i);
// }

for(let i = 0; i < Object.keys(obj).length; i++)
{
    console.log(obj[Object.keys(obj)[i]]);
}