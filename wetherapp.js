function showForm(formType) {
  document.getElementById("signup-form").style.display = formType === "signup" ? "block" : "none";
  document.getElementById("signin-form").style.display = formType === "signin" ? "block" : "none";
}

// Тіркелу процесі
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirm').value;

  if (password !== confirmPassword) {
    alert("Парольдер сәйкес емес!");
    return;
  }

  // Деректерді сақтау
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);
  localStorage.setItem('loggedIn', 'true');

  window.location.href = 'wetherapp2.html';
});

// Кіру процесі
document.getElementById('signinForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('signinEmail').value;
  const password = document.getElementById('signinPassword').value;

  const storedEmail = localStorage.getItem('userEmail');
  const storedPassword = localStorage.getItem('userPassword');

  if (email === storedEmail && password === storedPassword) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'wetherapp2.html';
  } else {
    alert("Қате email немесе пароль!");
  }
});
// form submit кезінде
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const user = {
  email: email,
  password: password
};

localStorage.setItem("user", JSON.stringify(user));
window.location.href = "wetherapp2.html";
// Тіркелгенде немесе кіргенде қолданушыны сақтау
localStorage.setItem("currentUser", JSON.stringify({ username: username }));
