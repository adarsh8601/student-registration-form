document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const studentName = document.getElementById('studentName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const course = document.getElementById('course').value;
    const terms = document.getElementById('terms').checked;

    if (!studentName || !email || !dob || !gender || !address || !course || !terms) {
        isValid = false;
        alert('Please fill out all fields and agree to the terms.');
    } else if (!emailPattern.test(email)) {
        isValid = false;
        alert('Please enter a valid email address.');
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can add code to submit the form data to the server
    }
});

document.getElementById('profilePicture').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imagePreview = document.getElementById('imagePreview');
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Profile Picture">`;
        }
        reader.readAsDataURL(file);
    }
});



const progressBar = document.createElement('div');
progressBar.classList.add('progress-indicator');
progressBar.innerHTML = '<div class="progress-bar"></div>';
document.body.appendChild(progressBar);

const updateProgress = () => {
    const formElements = document.querySelectorAll('#registrationForm input, #registrationForm select, #registrationForm textarea');
    let filledElements = 0;
    formElements.forEach(element => {
        if (element.value) filledElements++;
    });
    const progress = (filledElements / formElements.length) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
};

document.querySelectorAll('#registrationForm input, #registrationForm select, #registrationForm textarea').forEach(element => {
    element.addEventListener('input', updateProgress);
});
