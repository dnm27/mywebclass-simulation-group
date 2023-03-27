const loginForm = document.querySelector('form');
const loginButton = document.querySelector('#login-btn');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  // Perform login validation here
});