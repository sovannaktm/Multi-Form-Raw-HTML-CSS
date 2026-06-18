// Get the Next Step button
const nextStepBtn = document.querySelector('.next-step-btn');

// Add click event listener to the button
nextStepBtn.addEventListener('click', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Get form values
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const phoneInput = document.getElementById('phone').value;
    
    // Basic validation
    if (nameInput.trim() === '' || emailInput.trim() === '' || phoneInput.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // Display the submission message
    alert('Thanks for your dontation, 100$ will be charged from you ABA Account within next 1 mn😍');
});
