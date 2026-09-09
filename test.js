let tab = [4,5,3,2,6,4,9]
tab.splice(2,1)
const tickets = [
    {nom:"Ahmed",age:20},
    {nom:"Hamza",age:22},
    {nom:"Ahmed",age:34},
]
// let tck = tickets.find((e)=>e.age === 22)
// tickets.splice(tickets.indexOf(tck),1)

let tk = tickets.filter((e)=> e.nom == "Ahmed")
console.log(tk)
console.log(tickets)
// console.log(tab)