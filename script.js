// Open Login Modal
function openLogin() {
    document.getElementById('login-modal').style.display = 'block';
  }
  
  // Close Login Modal
  function closeLogin() {
    document.getElementById('login-modal').style.display = 'none';
  }
  
  // Open Signup Modal
  function openSignup() {
    document.getElementById('signup-modal').style.display = 'block';
  }
  
  // Close Signup Modal
  function closeSignup() {
    document.getElementById('signup-modal').style.display = 'none';
  }
  
  // Explore Button Action
  function explore() {
    alert('Explore feature coming soon!');
  }
  
  // Handle Login Form Submission
  document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login functionality coming soon!');
  });
  
  // Handle Signup Form Submission
  document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Signup functionality coming soon!');
  });