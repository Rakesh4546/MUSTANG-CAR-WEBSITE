function changeBackground(model) {
  const imageMap = {
    gt: 'gt.jpg',
    mach1: 'mach1.jpg',
    shelby: 'shelby.jpg'
  };
  document.body.style.backgroundImage = `url('${imageMap[model]}')`;
}

window.onload = function() {
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === 'admin' && password === 'mustang123') {
      document.getElementById('login-message').style.color = 'green';
      document.getElementById('login-message').textContent = 'Login successful!';
    } else {
      document.getElementById('login-message').style.color = 'red';
      document.getElementById('login-message').textContent = 'Invalid credentials. Try again.';
    }
  });
};
