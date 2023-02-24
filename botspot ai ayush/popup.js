// Handle the login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
  
    // Make a GET request to JSONPlaceholder to check if the credentials are valid
    fetch('https://jsonplaceholder.typicode.com/users?username=' + username + '&email=' + username + '&phone=' + username)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0 && data[0].username == username && data[0].email == username && data[0].phone == username) {
        alert('Login successful');
      } else {
        alert('Invalid username or password');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while trying to log in');
    });
  });
  
  // Handle the signup form submission
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('signup-username').value;
    var password = document.getElementById('signup-password').value;
  
    // Make a POST request to JSONPlaceholder to create a new user
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: username,
        phone: username,
        password: password,
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.id) {
        alert('Signup successful');
      } else {
        alert('An error occurred while trying to sign up');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while trying to sign up');
    });
  });
  