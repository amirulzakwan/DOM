// traversing in the DOM (Document Object Model)
// How to move around (select) parent and child nodes

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = list;
val = listItem;

// Get child nodes
// It will provide us a nodelist of all child node
// text nodes are the line breaks
// in most cases we want the element child nodes

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// Types of node

// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// How we can get children element nodes
// it returns HTML collection so we can treat it like an array
// Except we can noot use array (loops, methods)
// to do so it  needs to be converted

val = list.children;
val = list.children[0];
val = list.children[0].textContent='Hello';

// How to get access to the children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);