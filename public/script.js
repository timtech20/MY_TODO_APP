import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, FacebookAuthProvider, TwitterAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoYc2Uqe0rywPdzOhJytjMpCOXHJQhDiI",
  authDomain: "mytodoapp-5e8a8.firebaseapp.com",
  databaseURL: "https://mytodoapp-5e8a8-default-rtdb.firebaseio.com",
  projectId: "mytodoapp-5e8a8",
  storageBucket: "mytodoapp-5e8a8.appspot.com",
  messagingSenderId: "810814520509",
  appId: "1:810814520509:web:3e9ac758a37e3583178bd4"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerTwo = new FacebookAuthProvider();
const providerThree = new TwitterAuthProvider();
const database = getDatabase(app);

 

const signInG = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = 'dashboard.html';
      document.getElementById('con').style = "display:grid;"

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(errorCode, errorMessage, error);
      document.getElementById('con').style = "display:none;"

    });
}

window.signInG = signInG

const signInF = () => {
  const auth = getAuth();
  signInWithRedirect(auth, providerTwo)
    .then((result) => {
      const user = result.user;
      console.log(user);
      window.location.href = 'dashboard.html';
      document.getElementById('con').style = "display:grid;"
    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.customData.email;

      const credential = FacebookAuthProvider.credentialFromError(error);
      document.getElementById('con').style = "display:none;"


    });
}
window.signInF = signInF

// const signInX = () => {
//   const auth = getAuth();
//   signInWithPopup(auth, providerThree)
//     .then((result) => {
//       const credential = TwitterAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const secret = credential.secret;
//       const user = result.user;
//       console.log(user);
//       window.location.href = 'dashboard.html';
//       document.getElementById('con').style = "display:grid;"

//     }).catch((error) => {

//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.customData.email;
//       const credential = TwitterAuthProvider.credentialFromError(error);

//       console.log(errorCode);
//       console.log(errorMessage);
//       console.log(email);
//       console.log(credential);
//     document.getElementById('con').style = "display:none;"

//     });
// }

// window.signInX = signInX

let LogInput = document.getElementById('LogInput')
let LogInput2 = document.getElementById('LogInput2')
const signIn = () => {
  let email = document.getElementById('email').value.trim()
  let password = document.getElementById('password').value.trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email == "") {
    LogInput.classList.add('inputB')
    document.getElementById("emailError").innerHTML = "Please fill out this field!"
  } else if (!emailRegex.test(email)) {
    LogInput.classList.add('inputB')
    document.getElementById("emailError").innerHTML = "Invalid email address"
  } else if (password == "") {
    LogInput2.classList.add('inputB')
    document.getElementById("passwordError").innerHTML = "Please fill out this field!"
  } else {
    document.getElementById('con').style = "display:grid;"
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // fetchAndDisplayUserData(user.uid)
        document.getElementById('throwError').innerHTML = ''
        document.getElementById('con').style = "display:none;"
        window.location.href = 'dashboard.html';

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        document.getElementById('throwError').innerHTML = 'Invalid Email or Password!'
        document.getElementById('con').style = "display:none;"
      });
  }
}
window.signIn = signIn


// let userId
const inputGroup = document.getElementById('inputGroup')
const inputGroup2 = document.getElementById('inputGroup2')
const inputGroup3 = document.getElementById('inputGroup3')
const inputGroup4 = document.getElementById('inputGroup4')
const inputGroup5 = document.getElementById('inputGroup5')
const signUpp = () => {
  let firstName = document.getElementById('firstName').value
  let lastName = document.getElementById('lastName').value
  let emailUp = document.getElementById('emailUp').value
  let passwordUp = document.getElementById('passwordUp').value.trim()
  let comPasswordUp = document.getElementById('comPasswordUp').value.trim()
  const upEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (firstName.trim() == "") {
    inputGroup.classList.add('inputB')
    document.getElementById("firstNameError").innerHTML = "Please fill out this field!"
  }

  else if (lastName.trim() == "") {
    inputGroup2.classList.add('inputB2')
    document.getElementById("lastNameError").innerHTML = "Please fill out this field!"
  }
  else if (emailUp.trim() == "") {
    inputGroup3.classList.add('inputB3')
    document.getElementById("emailUpError").innerHTML = "Please fill out this field!"

  }
  else if (!upEmailRegex.test(emailUp)) {
    inputGroup3.classList.add('inputB3')
    document.getElementById("emailUpError").innerHTML = "Invalid email address!"
  }
  else if (passwordUp.trim() == "") {
    inputGroup4.classList.add('inputB4')
    document.getElementById("passwordUpError").innerHTML = "Please fill out this field!"
  }
  else if (!passwordRegex.test(passwordUp)) {
    inputGroup4.classList.add('inputB4')
    document.getElementById("passwordUpError").innerHTML = "Wick password, Please make it strong!"
  }
  else if (comPasswordUp.trim() == "") {
    inputGroup5.classList.add('inputB5')
    document.getElementById("comPasswordUpError").innerHTML = "Please fill out this field!"
  }
  else if (comPasswordUp !== passwordUp) {
    inputGroup5.classList.add('inputB5')
    document.getElementById("comPasswordUpError").innerHTML = "The password doesn't match!"
  } else {
    document.getElementById('con').style = "display:grid;"
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailUp, passwordUp).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
        let userId = user.uid
        let userInfo = {
          firstName: firstName,
          lastName: lastName,
          email: emailUp,
          password: passwordUp
        }
        let dbRef = ref(database, `user_signUp_Info/${userId}`)
        set(dbRef, userInfo).then(() => {

          document.getElementById('firstName').value = ""
          document.getElementById('lastName').value = ""
          document.getElementById('emailUp').value = ""
          document.getElementById('passwordUp').value = ""
          document.getElementById('comPasswordUp').value = ""
          document.getElementById('con').style = "display:none;"
          document.getElementById("logForm").style = "display:flex;"
          document.getElementById("signUpForm").style = "display:none;"
          localStorage.setItem('userReload', 'signIn')
        })    
        
    


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        document.getElementById("emailUpError").innerHTML = "Email already in use or Invalid email address !"
        document.getElementById('con').style = "display:none;"
      });
  }
}
window.signUpp = signUpp


// const fetchAndDisplayUserData = (userId) => {
//   const dbRef = ref(database, `user_signUp_Info/${userId}`);
//   get(dbRef)
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         window.location.href = 'dashboard.html';
//       }
//       else {
//         document.getElementById('throwError').innerHTML = 'Invalid Email or Password!'
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
// };






