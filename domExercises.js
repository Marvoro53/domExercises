//Not secure. Vulnerable to XSS attacks. Content injection.
// 1. Change the greeting from "Hello, There!" to "Hello, World!".
document.getElementById('greeting').innerHTML = 'Hello, World!';


// 2. Set the background color of each `<li>` to `yellow`.
var LiTags = document.querySelectorAll('#essentials li');

LiTags.forEach(function(x) {
    x.style.backgroundColor = 'yellow';
  });


// 3. Create an image tag, set its `src` attribute to `http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif`, and append the to the `#greeting` div.
var myImage= 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
var image = new Image();
image.src = myImage;
document.getElementById('greeting').appendChild(image);

var img= document.createElement('img');
img.src= "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"
// 4. Create and add a ul element to the end of the body with a class of "todo-items" 
// 5. Go through the array `['make coffee','eat donut','change diapers','drive to work']` and create an li element for each item e.g. `<li>make coffee</li>`
let list = ['Make Coffee', 'Eat Donut', 'Change Diapers', 'Drive To Work'];

// 6. Add each newly created li element to your ul of class "todo-items"
list.forEach((todo)=> {
  let li = document.createElement('li');
  li.innerText = todo;

  document.getElementById('todoItems').appendChild(li);
});
console.log(todoItems);


// ## Part Two:

// Afterwards: 

// 4. Add the class of `selected` to an `<li>` when it is clicked. Remove it from any other `li`s as well. 

var selector, elems, makeActive;
selector = "li";
elems = document.getElementsByTagName(selector);

makeActive = function (e) {
    for (var i = 0; i < elems.length; i++){
        elems[i].classList.remove('selected');
      }
    e.target.classList.add('selected');
};

for (var i = 0; i < elems.length; i++){
    elems[i].addEventListener('mousedown', makeActive);
}

// 5. Change the image to be the most recently clicked food item.

// 6. When the gray div is moused over, it's removed from the DOM.
function mouseOver() {
  ghosting.remove();

}


// 7. When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
function doubleWidth() {
  resize.style.width="400px";
}

function normalWidth() {
  resize.style.width="200px";
}

// 8. When the reset button is clicked - remove the `selected` class from each `<li>` and change the image to `panic.jpeg`.


// 9. When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"

document.onkeydown = function(numbers) {
  switch (numbers.keyCode) {
      case 48:
          alert('I HATE NUMBERZZZ!');
          break;
      case 49:
          alert('I HATE NUMBERZZZ!');
          break;
      case 50:
          alert('I HATE NUMBERZZZ!');
          break;
      case 51:
          alert('I HATE NUMBERZZZ!');
          break;
      case 52:
          alert('I HATE NUMBERZZZ!');
          break;
      case 53:
          alert('I HATE NUMBERZZZ!');
          break;
      case 54:
          alert('I HATE NUMBERZZZ!');
          break;
      case 55:
          alert('I HATE NUMBERZZZ!');
          break;
      case 56:
          alert('I HATE NUMBERZZZ!');
          break;
      case 57:
          alert('I HATE NUMBERZZZ!');
          break;
  }
};
