// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // We are returning an array ex. h1.className
  // element.classList gives an array of the element's classes

  let result = [];
  //   for (var k = 0; k < document.body.classList.length; k++) {
  //     if (document.body.classList[k] === className) {
  //     result.push(document.getElementsByTagName("BODY")[0])
  //   }
  // }
  var ele = document.body;
  var recursiveThis = function(ele) {
    //if doc.body has classList and className contains classList 
    if (ele.classList && ele.classList.contains(className)) {
      result.push(ele);
    } 
    //if doc.body has childNodes
    if (ele.childNodes !== []) {
      for (var i = 0; i < ele.childNodes.length; i++) {
        recursiveThis(ele.childNodes[i]);
      }
    }
  };
  recursiveThis(ele);
  return result;




  // var result = [];
  // var elements = document.body;
  // var classes = elements.classList; 
  // for (var i = 0; i < classes.length; i++) {
  //   if (classes[i] === className) {
  //     result.push(elements); 
  //   }
  // } 
  // var child = elements.childNodes;
 
  // for (var j = 0; j < child.length; j++) {
  //   for (var k = 0; k < child[j].classList.length; k++) {
  //     if (child[j].classList[k] === className) {
  //       result.push(child[j])
  //     }
  //   }
  // }






};
console.log(getElementsByClassName('targetClassName'));

