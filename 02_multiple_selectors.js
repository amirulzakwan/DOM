// document.getElementsByClassName()

// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[1]);
// items[2].style.color = 'red';
// items[1].textContent = 'Hello from selectors';

// document.getElementsByTagName()
let lis = document.getElementsByTagName('li');
// console.log(lis);
// lis[1].style.color = 'pink';
// lis[4].textContent = 'Hello';

// How to convert HTML collection to an array
const lisArr = Array.from(lis);
console.log(lisArr);

// document.querySelectorAll()
// return a node list
// Node list can be treated like an array (loops/methods), converting is not require

const items = document.querySelectorAll('ul.collection li.collection-item');

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background = '#ccc';
});

for(let i = 0 ; i < liEven.length ; i++){
    liEven[i].style.background = '#f4f4f4';
};

console.log(items);