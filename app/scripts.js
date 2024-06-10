// scripts.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email-input').value;
    var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScMAZTmZDjFS4kMWUKYePKXJwIZwStUWiJED_kYBxgrXbDe7g/formResponse';
    var formData = new FormData();
    formData.append('entry.206854154', email); // Use your actual entry ID here

    fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(function(response) {
        alert('Thank you for getting in touch!');
        document.getElementById('contact-form').reset();
    }).catch(function(error) {
        alert('There was an error. Please try again.');
    });
});
