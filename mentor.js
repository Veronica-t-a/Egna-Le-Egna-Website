 var firebaseConfig = {
    apiKey: "AIzaSyCdx66TiiZDH-x_qMNfQOWaLl4nIoB5Ib8",
    authDomain: "mentorship-1cb05.firebaseapp.com",
    databaseURL: "https://mentorship-1cb05.firebaseio.com",
    projectId: "mentorship-1cb05",
    storageBucket: "mentorship-1cb05.appspot.com",
    messagingSenderId: "883796393106",
    appId: "1:883796393106:web:a06b2653916f33621c7a4b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
// Reference messages collection
let contactInfo = firebase.database().ref("contacts");

// Listen for form submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
    let name = document.querySelector(".name").value;
    let company = document.querySelector(".work").value;
    let email = document.querySelector(".email").value;
    let phone = document.querySelector(".phone").value;
    let message = document.querySelector(".message").value;
 
  // Save message
  saveMessage(name, company, email, phone, message);
    
    // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
  
}


// Save message to firebase
function saveMessage(name, company, email, phone, message){
  let newContactInfo = contactInfo.push();
  newContactInfo.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}