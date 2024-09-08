import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, FacebookAuthProvider, TwitterAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

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
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);


    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(errorCode, errorMessage, error);

    });
}

window.signInG = signInG

const signInF = () => {
  const auth = getAuth();
  signInWithRedirect(auth, providerTwo)
    .then((result) => {
      const user = result.user;
      console.log(user);

    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.customData.email;

      const credential = FacebookAuthProvider.credentialFromError(error);


    });
}
window.signInF = signInF

const signInX = () => {
  const auth = getAuth();
  signInWithPopup(auth, providerThree)
    .then((result) => {
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const secret = credential.secret;
      const user = result.user;
      console.log(user);

    }).catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = TwitterAuthProvider.credentialFromError(error);

      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
    });
}

window.signInX = signInX

let LogInput = document.getElementById('LogInput')
let LogInput2 = document.getElementById('LogInput2')
const signIn = () => {
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.trim() == "") {
    LogInput.classList.add('inputB')
    document.getElementById("emailError").innerHTML = "Please fill out this field!"
  } else if (password.trim() == "") {
    LogInput2.classList.add('inputB')
    document.getElementById("passwordError").innerHTML = "Please fill out this field!"
  } else if (!emailRegex.test(email)) {
    LogInput.classList.add('inputB')
    document.getElementById("emailError").innerHTML = "Invalid email address"
  }
  else {
    document.getElementById('con').style = "display:grid;"
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        document.getElementById('con').style = "display:none;"
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
document.getElementById('email').addEventListener('blur', () => {
  if (document.getElementById('email').value.trim() === "") {
    LogInput.classList.add('inputB')
    document.getElementById("emailError").innerHTML = "Please fill out this field!"
  } else {
    LogInput.classList.remove('inputB')
    document.getElementById("emailError").innerHTML = ""
  }
})
document.getElementById('password').addEventListener('blur', () => {
  if (document.getElementById('password').value.trim() === "") {
    LogInput2.classList.add('inputB')
    document.getElementById("passwordError").innerHTML = "Please fill out this field!"
  } else {
    LogInput2.classList.remove('inputB')
    document.getElementById("passwordError").innerHTML = ""
  }
})
document.getElementById('password').addEventListener('focus', () => {
  document.getElementById("passwordError").innerHTML = ""
  LogInput2.classList.remove('inputB')
})
document.getElementById('email').addEventListener('focus', () => {
  document.getElementById("emailError").innerHTML = ""
  document.getElementById('throwError').innerHTML = ''
  LogInput.classList.remove('inputB')
})
document.getElementById('email').addEventListener('input', () => {
  document.getElementById("emailError").innerHTML = ""
  LogInput.classList.remove('inputB')
})
document.getElementById('password').addEventListener('input', () => {
  document.getElementById("passwordError").innerHTML = ""
  LogInput2.classList.remove('inputB')
})


const inputGroup = document.getElementById('inputGroup')
const inputGroup2 = document.getElementById('inputGroup2')
const inputGroup3 = document.getElementById('inputGroup3')
const inputGroup4 = document.getElementById('inputGroup4')
const inputGroup5 = document.getElementById('inputGroup5')
const signUpp = () => {

  let firstName = document.getElementById('firstName').value
  let lastName = document.getElementById('lastName').value
  let emailUp = document.getElementById('emailUp').value
  let passwordUp = document.getElementById('passwordUp').value
  let comPasswordUp = document.getElementById('comPasswordUp').value
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
    document.getElementById("passwordUpError").innerHTML = "this password must be 8 characters long!"
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
    createUserWithEmailAndPassword(auth, emailUp, passwordUp)
      .then((userCredential) => {
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
        set(dbRef, userInfo)
        document.getElementById('firstName').value =""
        document.getElementById('lastName').value =""
        document.getElementById('emailUp').value =""
        document.getElementById('passwordUp').value =""
        document.getElementById('comPasswordUp').value=""
        document.getElementById('con').style = "display:none;"
        document.getElementById("logForm").style = "display:flex;"
        document.getElementById("signUpForm").style = "display:none;"
        localStorage.setItem('userReload', 'signIn')

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        document.getElementById("emailUpError").innerHTML = "email already in use!"
        document.getElementById('con').style = "display:none;"
      });
  }
}
window.signUpp = signUpp

document.getElementById('firstName').addEventListener('input', () => {
  inputGroup.classList.remove('inputB')
  document.getElementById("firstNameError").innerHTML = "";
});
document.getElementById('lastName').addEventListener('input', () => {
  inputGroup2.classList.remove('inputB2')
  document.getElementById("lastNameError").innerHTML = "";
});
document.getElementById('emailUp').addEventListener('input', () => {
  inputGroup3.classList.remove('inputB3')
  document.getElementById("emailUpError").innerHTML = "";
});
document.getElementById('passwordUp').addEventListener('input', () => {
  inputGroup4.classList.remove('inputB4')
  document.getElementById("passwordUpError").innerHTML = "";
});
document.getElementById('comPasswordUp').addEventListener('input', () => {
  inputGroup5.classList.remove('inputB5')
  document.getElementById("comPasswordUpError").innerHTML = "";
});
document.getElementById('firstName').addEventListener('blur', () => {
  if (document.getElementById('firstName').value.trim() === "") {
    inputGroup.classList.add('inputB')
    document.getElementById("firstNameError").innerHTML = "Please fill out this field!";
  }
});
document.getElementById('firstName').addEventListener('focus', () => {
  inputGroup.classList.remove('inputB')
  document.getElementById("firstNameError").innerHTML = "";
})

document.getElementById('lastName').addEventListener('blur', () => {
  if (document.getElementById('lastName').value.trim() === "") {
    inputGroup2.classList.add('inputB2')
    document.getElementById("lastNameError").innerHTML = "Please fill out this field!";
  }
});
document.getElementById('lastName').addEventListener('focus', () => {
  inputGroup2.classList.remove('inputB2')
  document.getElementById("lastNameError").innerHTML = "";
})

document.getElementById('emailUp').addEventListener('blur', () => {
  if (document.getElementById('emailUp').value.trim() === "") {
    inputGroup3.classList.add('inputB3')
    document.getElementById("emailUpError").innerHTML = "Please fill out this field!";
  }
});
document.getElementById('emailUp').addEventListener('focus', () => {
  inputGroup3.classList.remove('inputB3')
  document.getElementById("emailUpError").innerHTML = "";
})

document.getElementById('passwordUp').addEventListener('blur', () => {
  if (document.getElementById('passwordUp').value.trim() === "") {
    inputGroup4.classList.add('inputB4')
    document.getElementById("passwordUpError").innerHTML = "Please fill out this field!";

  }

});
document.getElementById('passwordUp').addEventListener('focus', () => {
  inputGroup4.classList.remove('inputB4')
  document.getElementById("passwordUpError").innerHTML = "";
})

const comPassword = document.getElementById('comPasswordUp')
comPassword.addEventListener('blur', function () {
  if (comPassword.value.trim() === "") {
    inputGroup5.classList.add('inputB5')
    document.getElementById("comPasswordUpError").innerHTML = "Please fill out this field!"
  } else {
    inputGroup5.classList.remove('inputB5')
    document.getElementById("comPasswordUpError").innerHTML = ""
  }
})
comPassword.addEventListener('focus', function () {
  inputGroup5.classList.remove('inputB5')
  document.getElementById("comPasswordUpError").innerHTML = ""

})



