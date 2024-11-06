document.addEventListener('DOMContentLoaded', function () {
  // Hide/show password
  const passwordEye = document.querySelector('.js-password-eye'),
        passwordField = document.querySelector('.js-password');

  if (passwordEye) {
    passwordEye.addEventListener('click', function () {
      if(this.classList.contains('active')) {
        this.classList.remove('active')
        passwordField.type = 'password'
      } else {
        this.classList.add('active')
        passwordField.type = 'text'
      }
    });
  }
});
