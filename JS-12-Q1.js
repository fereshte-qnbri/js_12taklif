//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:

function displayWords() {
    const words = ["Action", "Potential", "Signals"];
    words.forEach(word => console.log(word));
  }
  
  displayWords();