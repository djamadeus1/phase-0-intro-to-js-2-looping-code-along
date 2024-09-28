// Function to create thank you messages
function writeCards(names, event) {
    // Create a new array to hold the messages
    let messages = [];
    
    // Loop through the names array
    for (let i = 0; i < names.length; i++) {
        // Create a custom message using string interpolation
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        
        // Add the message to the messages array
        messages.push(message);
    }
  
    // Return the new array containing all messages
    return messages;
}

// Function to count down from a given number
function countDown(number) {
    // Loop from the number down to 0
    for (let i = number; i >= 0; i--) {
        console.log(i); // Log the current number
    }
}

// Example usage of writeCards
let thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(thankYouMessages);

// Call countDown to see it in action
countDown(5); // This will log numbers from 5 to 0