
// let persons = [
//     {firstName : "Abhinav ", secondNAme : "B Manoj", Age : 22},
//     {firstName : "rahul ", secondNAme : "N p", Age : 27},
//     {firstName : "jeevan ", secondNAme : " joji", Age : 22},
//     {firstName : "rohit", secondNAme : "k", Age : 24}
// ]

// let fullName = persons.map(x => x.firstName + x.secondNAme)

// console.log(fullName);

// let output = persons.reduce((acc, curr)=>{
//     if(acc[curr.Age]){
//         acc[curr.Age] = ++acc[curr.Age]
//     }else{
//         acc[curr.Age] = 1;
//     }
//     return acc;
// },{})

// console.log(output);ṇ

// let agebelow27 = persons.filter((x)=> x.Age < 27).map((x) => x.firstName + " " + x.secondNAme)
// console.log(agebelow27);

// let x = [1,2,4,5,6,6]

// const sum = x.reduce((acc,curr)=>{
//     return acc+curr;
// },0)

// console.log(sum);

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter

function areaOrperimeter (l,m){
    if(l === m){
        return l*m;
    }
    else{
        return 2 * (l + m)
    }
}


console.log(areaOrperimeter(6,10));