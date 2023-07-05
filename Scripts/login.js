const config = {
  apiKey: "AIzaSyCyxQSgacMfgByUnAom7wA48ueWN5LdZJI",
  authDomain: "ecss-dev.firebaseapp.com",
  databaseURL: "https://ecss-dev-default-rtdb.firebaseio.com",
  projectId: "ecss-dev",
  storageBucket: "ecss-dev.appspot.com",
  messagingSenderId: "101446971408",
  appId: "1:101446971408:web:fa56f2d86fb073cdae1a95",
  measurementId: "G-HDBR61WXJ5"
}; 
//initialize 
const app=firebase.initializeApp(config);
const database=firebase.database(app);
const auth=firebase.auth(app);

//Sign up using email,password
signup.addEventListener("click", (e) => {

  var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var fname=document.getElementById('Firstname').value;
var lname=document.getElementById('Lastname').value;

var email=document.getElementById('Email').value;
var password=document.getElementById('Password').value;

// const regref=database.ref("/com/pollachi/Users/id/");

firebase.auth().createUserWithEmailAndPassword(email, password)
.then((userCredential) => {
  var user = userCredential.user;
  alert("User Created");

  database.ref('/com/pollachi/Users/id/' + user.uid).set({

    Firstname : fname,  
    Lastname: lname,
    Email: email,
    pass : password,   
    cd : date  
    });  
    alert('successfully Registered');

})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  // ..
  alert("Error Code:"+errorCode+"<br>error:"+errorMessage);
 });

});




function login_ADS(){
    
  var emailid=document.getElementById("user").value;
  var password=document.getElementById("password").value;
//ADMIN
  if(emailid=="admin@gmail.com"&& password=="admin")
  {
    alert('successfully login');
    window.location = "index.html";
    
  }
  else if(emailid=="specss@gmail.com" && password=="specss"){
    alert('successfully login');
    window.location = "service-provider.html";
  }
   else {
    firebase.auth().signInWithEmailAndPassword(emailid, password)
    .then((userCredential) => 
    {
          // Signed in
        var user = userCredential.user;

       var emailid=document.getElementById("user").value;


       
        //SERVICE PROVIDER
        if( database.ref('/com/pollachi/Register/ServiceProviders/').on('value',function(snapshot){
            snapshot.forEach((usersdata)=>{
              uservalue = usersdata.val();
              emailid==uservalue.email;
              })    
              })  
         )
        {
          alert('Successfully login');
          window.location="donor1.html";
        } 
         
         

   

        // DONOR
        // else
        // {
        //   alert('donor Successfully login...!');
        //   window.location="donor1.html";
        // }
     })
     .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error Code:"+errorCode+"<br>error:"+errorMessage);
    });
  }
}

//Style Login to register
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});