let btwn = document.querySelector('button');
let inputs = document.querySelectorAll('.inp'); // Select all inputs with class .inp
let int = document.querySelectorAll('.in');
// Loop through each input and log its value


let valu="";
// Add click event listener to the button
btwn.addEventListener('click', function() {
    valu=Math.random() * 100;// Log a random number between 0 and 100
    int.forEach(function(input) {
        input.value = valu.toFixed(1)+"%"; // Set the value of each input field
    });
 
});