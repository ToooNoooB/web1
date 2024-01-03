// JavaScript to handle the login modal functionality
document.getElementById('loginBtn').addEventListener('click', function() {
  document.getElementById('loginModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('loginModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('loginModal')) {
    document.getElementById('loginModal').style.display = 'none';
  }
});


document.getElementById('signupBtn').addEventListener('click', function() {
  document.getElementById('signupModal').style.display = 'block';
});

document.querySelector('.closes').addEventListener('click', function() {
  document.getElementById('signupModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == document.getElementById('signupModal')) {
    document.getElementById('signupModal').style.display = 'none';
  }
});

