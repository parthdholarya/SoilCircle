// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC_Ba657n6BGKDl_KYUOUFf09omlY2z7JQ",
  authDomain: "soilcircle-10921.firebaseapp.com",
  projectId: "soilcircle-10921",
  storageBucket: "soilcircle-10921.appspot.com",
  messagingSenderId: "1075060541688",
  appId: "1:1075060541688:web:be8431d0a6567a605c130d",
  measurementId: "G-98MBVF1KQF"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

function setLoading(button, loading) {
  button.disabled = loading;
  button.textContent = loading ? "Loading..." : button.id === "loginBtn" ? "Login" : "Sign Up";
}

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("message");

  setLoading(loginBtn, true);
  msg.textContent = "";

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      msg.style.color = "green";
      msg.textContent = "Login successful!";
      setTimeout(() => window.location.href = "home.html", 1000);
    })
    .catch(error => {
      msg.style.color = "red";
      msg.textContent = error.message;
    })
    .finally(() => setLoading(loginBtn, false));
}

function signup() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("message");

  setLoading(signupBtn, true);
  msg.textContent = "";

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      msg.style.color = "green";
      msg.textContent = "Signup successful!";
    })
    .catch(error => {
      msg.style.color = "red";
      msg.textContent = error.message;
    })
    .finally(() => setLoading(signupBtn, false));
}
