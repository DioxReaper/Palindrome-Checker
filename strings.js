function processWords() {
            const input = document.getElementById("inputWords").value.trim();
            const resultsList = document.getElementById("resultsList");
            
            resultsList.innerHTML = ""; // removes previous output / new list
        
                        if (!input) {
                                alert("Please enter some words to check.");
                 return;
              }
                    const words = input.split(/[\s]+/); // allows for spaces in the text
                
                    for (let i = 0; i < words.length; i++) {
                    const word = words[i].trim();
                    if (word.length === 0) continue; // Skip empty entries

                    // this will refer everything to lower case so it can function properly
                    const normalizedWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
                    // this reverses to check the word to ensure it is a plaindrome
                    const reversedWord = normalizedWord.split("").reverse().join("");
                
                    const resultItem = document.createElement("li"); // the result put into a variable to produce outcome on page
                    // the outputs based on what the loop finds to be a palindrome or not
                    resultItem.textContent = `"${word}" is ${normalizedWord === reversedWord ? "a palindrome" : "not a palindrome"}.`;
                    resultItem.className = normalizedWord === reversedWord ? "correct" : "incorrect";
                    resultsList.appendChild(resultItem);
                    }
  }
  