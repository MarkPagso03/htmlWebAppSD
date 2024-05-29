// Function to show or hide the user list
document.getElementById('user-list-icon').addEventListener('click', function() {
    var userListContainer = document.getElementById('userListContainer');
    if (userListContainer.style.display === 'none' || userListContainer.style.display === '') {
        userListContainer.style.display = 'block';
    } else {
        userListContainer.style.display = 'none';
    }
});

document.getElementById('signup-list-icon').addEventListener('click', function() {
    var signupListContainer = document.getElementById('signupListContainer');
    if (signupListContainer.style.display === 'none' || signupListContainer.style.display === '') {
        signupListContainer.style.display = 'block';
    } else {
        signupListContainer.style.display = 'none';
    }
});
// Function to show the sign-up list
function showSignUpList() {
    // Get the sign-up list container element
    var signUpListContainer = document.getElementById("signUpListContainer");

    // Show the sign-up list container
    signUpListContainer.style.display = "block";

    // Clear any existing content inside the sign-up list container
    signUpListContainer.innerHTML = "";

    // Create a div for the sign-up list content
    var signUpListContent = document.createElement("div");
    signUpListContent.classList.add("signup-list-content");

    // Create rows and columns for the sign-up list content
    for (var i = 0; i < 7; i++) { // Adjusted to 7 rows
        var row = document.createElement("div"); // Create a new div for each row
        row.classList.add("signup-list-row");

        for (var j = 0; j < 6; j++) {
            var cell = document.createElement("div"); // Create a new div for each cell
            cell.classList.add("signup-list-cell");
            cell.textContent = ""; // Set the cell content to empty
            row.appendChild(cell); // Append the cell to the row
        }

        signUpListContent.appendChild(row); // Append the row to the sign-up list content
    }

    // Append the sign-up list content to the sign-up list container
    signUpListContainer.appendChild(signUpListContent);
}

// JavaScript to handle the display of the sign-up list
document.getElementById("signuplistbtn").addEventListener("click", function() {
    showSignUpList(); // Call the showSignUpList function
});
