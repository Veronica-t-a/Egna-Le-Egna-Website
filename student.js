// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAeQiCv6nmWERz4-JJODNTFSc66_Z8ioWE",
    authDomain: "ele-students.firebaseapp.com",
    databaseURL: "https://ele-students.firebaseio.com",
    projectId: "ele-students",
    storageBucket: "ele-students.appspot.com",
    messagingSenderId: "851096417702",
    appId: "1:851096417702:web:1517a356b4247c30e1cb67"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
let contactInfo = firebase.database().ref("infos");

// Listen for form submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
    let name = document.querySelector(".name").value;
    let company = document.querySelector(".work").value;
    let grade = document.querySelector(".grade").value;
    let email = document.querySelector(".email").value;
    let phone = document.querySelector(".phone").value;
    let message = document.querySelector(".message").value;
 
  // Save message
  saveMessage(name, company, grade, email, phone, message);
    
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
function saveMessage(name, company, grade, email, phone, message){
  let newContactInfo = contactInfo.push();
  newContactInfo.set({
    name: name,
    company:company,
    grade:grade,
    email:email,
    phone:phone,
    message:message
  });
}