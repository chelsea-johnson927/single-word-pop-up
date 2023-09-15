/*bouncing word for header*/       
var targetedWord = "build"; 
var animatedWord = [];  

// Wrap every letter in a span
 for (let i = 0; i < targetedWord.length; i++) {
    
    var letter = targetedWord.charAt(i);    

    animatedWord.push('<span class="letter">' + letter + '</span>' );
 
}

if(animatedWord.length >= 0){


var html = document.getElementById("tagline").innerHTML;   
var newHtml = html.replace(targetedWord, '<span id="tagline-animated-text">' + animatedWord.join('')  + '</span>'); 
document.getElementById("tagline").innerHTML = newHtml;
} 

console.log(animatedWord);

var children = document.querySelectorAll('span > .letter');   


children.forEach((node, index) => { 

    node.style.animationDelay = `${index * 0.3}s`;
});