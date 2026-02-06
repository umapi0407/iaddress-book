function signup() {
  const user = {
    name: name.value,
    email: email.value,
    password: password.value
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful");
  window.location.href = "login.html";
}

function login() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.email === email.value && user.password === password.value) {
    window.location.href = "index.html";
  } else {
    alert("Invalid login");
  }
}

function logout() {
  localStorage.removeItem("user");
  alert("Logged out successfully");
  window.location.href = "login.html";
}
