//Task1
console.log(document.querySelectorAll("h2"));
document.querySelectorAll("h2")[1].innerText = "DOM method description";

//Task2
console.log(document.querySelectorAll('[href*="/ua/"]'));

//Task 3

const list = document.querySelector("ul");
const thirdLi = document.getElementById("third");
const li = document.createElement("li");
const nullLi = document.createElement("li");
const secondLi = document.createElement("li");
const fourthLi = document.createElement("li");

nullLi.innerHTML = 0;
nullLi.setAttribute("id", "null");
list.prepend(nullLi);

secondLi.innerHTML = 2;
thirdLi.replaceWith(secondLi);
secondLi.setAttribute("id", "second");

thirdLi.innerHTML = 3;
thirdLi.setAttribute("id", "third");
list.append(thirdLi);

fourthLi.innerHTML = 4;
fourthLi.setAttribute("id", "fourth");
list.append(fourthLi);

//Task 4

const header = document.querySelector(".task_4 > h1");

const link = document.createElement("a");

link.setAttribute("href", "https://dom.spec.whatwg.org/");

link.setAttribute("id", link);

header.before(link);
link.prepend(header);
