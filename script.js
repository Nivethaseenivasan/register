function validateForm() {
    // Get the form elements
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    
    // Basic validation
    if (firstname === "" || lastname === "" || email === "" || contact === "") {
        alert('All fields are required.');
        return false; // Prevent form submission
    }
    
    // Display the completion message
    document.getElementById('message').innerText = 'Registration complete';
    
    return false; // Prevent form submission for demo purposes
}
