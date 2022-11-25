// let now = Date.now();

// let birthDate = new Date("12-22-2006");

// console.log((now - birthDate) / 100 / 60 / 60 / 24);
// console.log((now - birthDate) / 100 / 60 / 60 );
// console.log((now - birthDate) / 100 / 60 );
// console.log((now - birthDate) / 100 );
// console.log((now - birthDate));


let year = +prompt("Tug'ilgan Yilingizni Kiriting!")
let month = +prompt("Tug'ilgan Oyingizni Kiriting!")
let date = +prompt("Tug'ilgan Kuningizni Kiriting!")

let thisYear = new Date().getFullYear()
let thisMonth = new Date().getMonth()
let thisDate = new Date().getDate()
// let thisHours = new Date().getHours()


console.log(thisYear);
console.log(thisMonth + 1);
console.log(thisDate);
// console.log(thisHours);

console.log(`Siz ${thisYear - year} yil. ${thisMonth - month} oy. ${thisDate - date} kun yashagansiz.`);
console.log(`Siz ${year - thisYear} yil, ${month - thisMonth} oy. ${date - thisDate} kun yashamagansiz.`);