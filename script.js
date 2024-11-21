document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Credenciales predefinidas
  const validUsername = 'HAX';
  const validPassword = '1234';

  // Validación
  if (username === validUsername && password === validPassword) {
    // Aquí podrías redirigir o conectar a tu Firebase
    alert('Login successful!');
    console.log('Connected to Firebase!'); // Simula conexión a Firebase
    // Redirige o ejecuta lógica de tu base de datos aquí
  } else {
    document.getElementById('errorMessage').innerText = 'Invalid username or password.';
  }
});
// Importa y configura Firebase
// Asegúrate de incluir el SDK de Firebase en tu HTML si lo necesitas
const firebaseConfig = {
  apiKey: "AIzaSyCYxCpYjsTlU1yF7y1AINvk1ZMKHJ5FJ3s",
  authDomain: "asdasd-282ba.firebaseapp.com",
  databaseURL: "asdasd-282ba",
  projectId: "asdasd-282ba.firebasestorage.app",
  storageBucket: "1019315635808",
  messagingSenderId: "1:1019315635808:web:200f0736a71dacb6196505",
  appId: "G-GB6N7ERB7F"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
