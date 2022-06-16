// const arr = [2, 3, 4, 5]
// let res = 0
// for (let i = 0; i < arr.length; i++) {
//     res+=arr[i]
    
// }
// console.log(res);


// for (let i = 0; i <= 15; i++) {
//     if(i%2 === 0) {
//         console.log(`${i} is even`);
//     } else if (i%2 === 1) {
//         console.log(`${i} is add`);
//     }
    
// }



// function randArray(k) {
//     let arr = []
//     for (let i = 0; i < k; i++) {
//         arr.push(Math.floor(Math.random()*500))
        
//     }
//     return arr
// }

// console.log(randArray(4));



// function findUnique(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!res.includes(arr[i])) {
//             res.push(arr[i])
//         } else {
//             return false
//         }
        
//     }
//     return true
    
// }


// console.log(findUnique([1, 2, 3, 5]));


function myarr(arr, count) {
    if (count === null) {
        console.log(arr.pop());
    } else {
       console.log(arr.slice(-count));
    }
}

console.log(myarr([3, 4, 10, -5],2));   





function learnJavaScript() {
    const friends = [
      { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
      { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
      { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
      { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
      { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
      { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
    ]
    let passports = friends.map(friend => friend.passport + ' ')
    return passports
  }