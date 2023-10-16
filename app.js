const email = document.getElementById('EMAIL');
const subbutton = document.getElementById('subbutton');
const subscribedDiv = document.getElementById('subscribed');
const dismissButton = document.getElementById('dismissButton');
const container = document.getElementById('container');

subbutton.addEventListener('click', function (e) {
  e.preventDefault();

  const emailValue = email.value.trim(); // Trim any leading/trailing white spaces

  if (emailValue === '') {
    email.style.backgroundColor = '#ffe8e6';
    email.placeholder = 'example@example.com';
    email.classList.add('red-placeholder');
  } else if (!emailValue.includes('@')) {
    // If the email does not contain the '@' sign, display an error message
    email.style.backgroundColor = '#ffe8e6';
    email.value = ''; // Clear the input field
    email.placeholder = 'example@example.com';
    email.classList.add('red-placeholder');
  } else {
    subscribedDiv.style.display = 'block';
    container.style.display = 'none';
  }
});

dismissButton.addEventListener('click', function () {
  subscribedDiv.style.display = 'none';
  container.style.display = 'block';
  email.placeholder = 'example@example.com';
});
