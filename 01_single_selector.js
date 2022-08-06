// DOM : Document Object Model
// Selectors are DOM methods that allows us to access different elements and their properties

// document.getElementById()
// Select a single element by its id

// You can select an element and store it in a variable. can use variable to select the elements
const taskTitle = document.getElementById('task-title'); 

// access to different info from the elements
const taskId = taskTitle.id;

// console.log(taskId);

// How to change style by selectors
taskTitle.style.background='#333';
taskTitle.style.color='#fff';
taskTitle.style.padding='5px';
// taskTitle.style.display='none';

// how to change the content
taskTitle.textContent = 'Task list';
taskTitle.innerText = 'My Task';
taskTitle.innerHTML = '<span style="color:red">Task</span>';

// Query selector
// document.querySelector()
// Its help you to select an elements (only single element) by its (id, class, tagname)
// Select by id use = #
// Select by class use = .
// Select element use = no symbol
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'pink';

// css psudo selectors will help you to select any single element
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').style.color = 'green';
document.querySelector('li:nth-child(2)').textContent = 'Hello';