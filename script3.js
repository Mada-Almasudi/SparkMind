

// Common validation for both login and signup forms
function validateForm(event, formType) {
    let isValid = true;
  
    // Error message elements
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const errorMessage = document.getElementById('errorMessage');
  
    // Clear previous error messages
    if (emailError) emailError.style.display = 'none';
    if (passwordError) passwordError.style.display = 'none';
    if (errorMessage) errorMessage.style.display = 'none';
  
    if (formType === 'login') {
      const email = document.getElementById('email');
      const password = document.getElementById('password');
  
      // Email and password validation
      if (email.value.trim() === "") {
        emailError.style.display = 'block';
        isValid = false;
      }
  
      if (password.value.trim() === "") {
        passwordError.style.display = 'block';
        isValid = false;
      }
    } else if (formType === 'signup') {
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirmPassword');
  
      // Password match validation for signup
      if (password.value !== confirmPassword.value) {
        event.preventDefault();
        errorMessage.style.display = 'block';
        isValid = false;
      }
    }
  
    return isValid;
  }
  
  // Login form submit event listener
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      if (!validateForm(e, 'login')) {
        e.preventDefault(); // Prevent form submission if invalid
      }
    });
  }
  
  // Signup form submit event listener
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      if (!validateForm(e, 'signup')) {
        e.preventDefault(); // Prevent form submission if invalid
      }
    });
  }
  