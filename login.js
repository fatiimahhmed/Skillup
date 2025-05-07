document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const loginForm = document.getElementById('login-form');
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    const showPasswordCheckbox = document.getElementById('show-password');
    const headerElement = document.querySelector('header');
  
    // Header scroll effect
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        headerElement.classList.add('scrolled');
      } else {
        headerElement.classList.remove('scrolled');
      }
    });
  
    // Show/hide password toggle
    showPasswordCheckbox.addEventListener('change', function() {
      loginPassword.type = this.checked ? 'text' : 'password';
    });
  
    // Login form submission
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = loginEmail.value.trim();
      const password = loginPassword.value.trim();
  
      // Validate inputs
      if (!email || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
      }
  
      if (!validateEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
      }
  
      // Simulate login processing
      showMessage('Logging in...', 'info');
      
      // In a real app, you would send this to your backend:
      // loginUser(email, password);
      
      // For demo - simulate successful login after 1.5 seconds
      setTimeout(() => {
        showMessage('Login successful! Redirecting...', 'success');
        setTimeout(() => {
          window.location.href = 'index.html'; // Redirect to home page
        }, 1000);
      }, 1500);
    });
  
    // Email validation function
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    // Show message function
    function showMessage(message, type = 'info') {
      // Remove existing messages
      const existing = document.querySelector('.message');
      if (existing) existing.remove();
  
      // Create message element
      const messageEl = document.createElement('div');
      messageEl.className = `message message-${type}`;
      messageEl.textContent = message;
      document.body.appendChild(messageEl);
  
      // Auto-remove after 3 seconds
      setTimeout(() => {
        messageEl.classList.add('fade-out');
        setTimeout(() => messageEl.remove(), 300);
      }, 3000);
    }
  });