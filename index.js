// Navigation in DOM 

let parentele = document.getElementById("parent");
console.log(parentele); // here we get total div parent element
console.log(parentele.firstChild);
console.log(parentele.lastChild) ; //here we get empty content as first child and last child also, it means this properties gives the content only and there is difference, to access the actual first child have to another properties.
console.log(parentele.children); // here will get the elements in array
console.log(parentele.childNodes);//here will get the content and elements in array


console.log(parentele.children[1]); // by access array of index we can choose the element.
console.log(parentele.children[3]);  // by accessing the array of index is not good practice. the easy way is by using id.

console.log(parentele.childElementCount);

let element2 = document.getElementById('title');
console.log(element2.nextSibling);
console.log(element2.nextElementSibling);
console.log(element2.previousSibling);
console.log(element2.previousElementSibling);
console.log(element2.textContent);
console.log(element2.parentElement);

heading.style.color = 'yellow';
heading.style.backgroundColor = 'lightgreen';
heading.style.fontSize = '100px';
heading.style.fontStyle = 'italic';

console.log(parentele.previousSibling);
console.log(parentele.previousElementSibling);
console.log(parentele.nextSibling);
console.log(parentele.nextElementSibling);


