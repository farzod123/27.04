// /* Циклы */

// let arr = [1,2,3,4,5,6]

// /*    for of   */
// // for(let num of  arr) {
// //     console.log(`I love you  ${num} time`);
// // }

// /*   for   */
// for(let i = 1; i <= 100; i++) {
//     console.log(`I love you ${i} time`);
// }

/* calculator */
// let n = +prompt('Which number ?')
// for(let i = 1; i <= 10; i++) {
//     document.write(`${n} * ${i} = ${n * i} <br/>`);
// }




// let arr = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut au`tem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",
//         "completed": true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,

//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
// ]
// let a = {
//     count: 0,
//     arr: []
// }

// let b = {
//     count: 0,
//     arr: []
// }

// for(let item of arr) {
//     if (item.completed === true) {
//         a.count++
//         a.arr.push(item)
//     } else {
//         b.count++
//         b.arr.push(item)
//     }
// } 
// console.log(a,b);


// for(let i = 0; i < arr.length; i++) {
//     let item = arr[i]
//     if (item.completed === true) {
//         a.count++
//         a.arr.push(item)
//     } else {
//         b.count++
//         b.arr.push(item)
//     }
// }
// console.log(a,b);


/* dz */

let alphabet = "ABSDEFGHIJKLMNOPQRSTYVWZ";
let alphabet_arr = []

for(let i = alphabet.length -1; i >= 0; i-- ) {
    alphabet_arr.push(alphabet[i])
}
console.log(alphabet_arr);


// let arr = alphabet.split('').reverse().join('');
// console.log(arr);


