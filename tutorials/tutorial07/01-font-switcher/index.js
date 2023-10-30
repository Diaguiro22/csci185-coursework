let sizeH1 = 40;
let sizeP = 20; 

function makeBigger() {
   sizeH1 = sizeH1 + 5;
   sizeP = sizeP + 5; 
   //alert('make bigger!');
   //target the h1 tag and set it to 4em;
   document.querySelector('h1').style.fontSize= sizeH1 + "px" ;
   document.querySelector('p').style.fontSize= sizeP + "px";
   // target the p tag and set it to 3em; 
};

function makeSmaller() {
   sizeH1 = sizeH1 - 5;
   sizeP = sizeP - 5; 
   //alert('make smaller!');
   // target the h1 tag and set it to 1em;
   document.querySelector('h1').style.fontSize= sizeH1 + "px";
   document.querySelector('p').style.fontSize= sizeP + "px";
   // target the p tag and set it to .7em;
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
