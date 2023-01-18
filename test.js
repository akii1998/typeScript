// let num:number=12;
// console.log(num)
// const nun:string='23'
// console.log(nun)
/*
Object
*/
// type objType={name:string,age:string}
// let person:objType={
//     name:'akash',
//     age:'22',
// }
// console.log(person.name)
// console.log(person.age)
// let user:objType={
//     name:'Vishal',
//     age:'20'
// }
// console.log(user.name)
// console.log(user.age)
/*
Array
Collection of value is called array
*/
// let arr:string[] =['javascript','typescript','php'];
// arr[2]=1234
// arr[2]='Gupta'
// let arr2:any[]=[232,'asa','rtr',true]
// let arr3=[4,5,6,'aaa','eree',true];
// arr3.push(4)
// arr3.push('akaag');
// arr3.push(true);
// console.log(arr3)
/*
Tuple
*/
// let tuple:[string,string,number,number,boolean?]=['akash','akash',12,23]
// tuple.push(true);
// console.log(tuple)
/*
Enum type
*/
// enum Role{
//     AKASH,GUPTA,BAJAJ
// }
// console.log(Role)
// console.log(Role.BAJAJ)
/*
Any -no restriction take place  when we have get a api data so we  want to collect multiple datatype  so we take any

*/
// let data : string|number|boolean=10;
// let data2:any="34343"
// let dara:any[]=[2,3,4,"akash",true]
/*
union
*/
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    return x.toString() + y.toString();
}
console.log(add(10, 20));
console.log(add("10", "20"));
