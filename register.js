document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    const nameInput = document.getElementById('register-name');
    const emailInput = document.getElementById('register-email');
    const passwordInput = document.getElementById('register-password');
    const showPasswordCheckbox = document.getElementById('show-password');
  
    // Toggle password visibility
    showPasswordCheckbox.addEventListener('change', function () {
      passwordInput.type = this.checked ? 'text' : 'password';
    });
  
    // Form submission
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!name || !email || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
      }
  
      if (!validateEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
      }
  
      // Simulate registration
      showMessage('Registering your account...', 'info');
  
      setTimeout(() => {
        showMessage('Registration successful! Redirecting...', 'success');
        setTimeout(() => {
          window.location.href = 'index.html'; // ✅ Redirect to homepage
        }, 1000);
      }, 1500);
    });
  
    // Email validation
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    // Message display
    function showMessage(message, type = 'info') {
      const existing = document.querySelector('.message');
      if (existing) existing.remove();
  
      const messageEl = document.createElement('div');
      messageEl.className = `message message-${type}`;
      messageEl.textContent = message;
      document.body.appendChild(messageEl);
  
      setTimeout(() => {
        messageEl.classList.add('fade-out');
        setTimeout(() => messageEl.remove(), 300);
      }, 3000);
    }
  });
  // Handle dynamic redirect for "Sign In"
const signInLink = document.querySelector('p a');
signInLink.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link behavior
  window.location.href = 'loginskill.html'; // Redirect to login page
});
  
    