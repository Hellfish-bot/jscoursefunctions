// Function to get input from users and display it after submit a form

function submitFeedback() {

    // Variables

    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experince = document.getElementById('userExperince').value;

    // to display thank you message when the user submits the form

        alert('Thank you for share your feeback');
    
    // Display user feedback on webpage
    
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperince').innerHTML = experince;

    // To make this part visible after the button click

    document.getElementById('userInfo').style.display = 'block';
}

// Variable named submitButton. This line of code fetches the HTML element with the ID 'submitBtn' using its unique identifier ('getElementById') and assigns it to the variable 'submitButton'

const submitButton=document.getElementById('submitBtn');

// Assigns the function submitFeedback to execute when the onclick event occurs on the HTML element

submitButton.onclick = submitFeedback;

// Implement key press to submit feedback, to ensure that if the user presses the 'Enter' key, the feedback form should submit

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });