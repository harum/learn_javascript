/*
  * DOM NODES
  */

let node1 = document.getElementById('node1');

let node2 = document.getElementById('node2');
console.log('--------------------------------');
console.log('getElementById', node2);
console.log("getElementsByClassName('meal')", document.getElementsByClassName('meal'));
console.log("getElementsByClassName('meal eastern')", document.getElementsByClassName('meal eastern'));
console.log("getElementsByClassName('meal,eastern')", document.getElementsByClassName('meal,eastern'));

console.log('children', node2.children); // return collection
console.log('firstElementChild', node2.firstElementChild); // return node
console.log('lastElementChild', node2.lastElementChild); // return node
console.log('previousElementSibling', node2.previousElementSibling); // return node
console.log('nextElementSibling', node2.nextElementSibling); // return node
console.log('.length', node2.children.length);
console.log('.item(0)', node2.children.item(0));
console.log('[0]', node2.children[0]);
console.log(".namedItem('bread')", node2.children.namedItem('bread'));
console.log("['bread']", node2.children['bread']);

console.log(".isConnected", node2.isConnected);
console.log(".ownerDocument", node2.ownerDocument);
console.log(".getRootNode()", node2.getRootNode());
console.log(".parentNode", node2.parentNode);
console.log(".parentElement", node2.parentElement);
console.log(".hasChildNodes()", node2.hasChildNodes());
console.log(".childNodes", node2.childNodes);
console.log(".firstChild", node2.firstChild);
console.log(".lastChild", node2.lastChild);
console.log(".previousSibling", node2.previousSibling);
console.log(".nextSibling", node2.nextSibling);
console.log('--------------------------------');

let node3 = document.getElementById('node3');
node2.prepend(node3.firstElementChild) //insert/move nodes before first child
node2.append(node3.firstElementChild) //insert/move nodes after last child

node3.append(document.querySelector('.meal'))

let animals = document.querySelectorAll('.animal');
for(let i = 0; i < animals.length; i += 1) {
  node3.append(animals[i]);
}

let animal = animals[0].cloneNode(deep = true);
node3.append(animal);

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
p1.before(p2); // insert nodes just before node
p3.after(p1); // insert nodes just after node
p2.replaceWith(p4, p3); // replace node with nodes (and delete node)
p4.remove(); // removes node
p3.textContent = 'this is my paragraph';
