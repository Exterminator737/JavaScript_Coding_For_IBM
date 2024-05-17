
let count = 0;

//Increases the number of followers everytime the count button is clicked.
function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}


 function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
 }

 // Checks count value and triggers a specific alert when a milestone (10 or 20) is reached
 function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }