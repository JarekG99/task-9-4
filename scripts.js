// scripts.js

var h = prompt('Enter h');
drawTree(h);

function drawTree(p) {
  for (i=0; i<=p; i++) {
    var star ='';
    for(j=0; j<i; j++) {
      star +='*';
    }
    console.log(star);
  }
}
alert('The tree is ready - check console');
