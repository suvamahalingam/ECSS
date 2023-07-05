// var firebase = require('firebase')

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
  

  function Add_datafirebase(){
//  const ref= database.ref("com/pollachi/Donors/");
 let dname = document.getElementById('dm_fname').value;
 let devent = document.getElementById('dm_mevent').value;
 let relation = document.getElementById('dm_relation').value;

 var doc_dm_day = document.getElementById("dm_day");
 var dday = doc_dm_day.options[doc_dm_day.selectedIndex].value;
 var dmonth = document.getElementById('dm_month').options[document.getElementById('dm_month').selectedIndex].value;


 
 if(dname==""||relation==""||devent==""||dday=="" ||dmonth=="")
     {
         alert("Please Enter the  field");
        
     }

else{
   

 database.ref("com/pollachi/Donors/").push({
    dday : dday,  
    devent: devent,  
    dmonth : dmonth,  
    name: dname,
    relation: relation       
    });

    var table='<thead><tr><td>EDIT</td><td>NAME</td><td>RELATIONSHIP</td><td>EVENT</td><td>DAY/MONTH</td><td>DELETE</></tr></thead>'
     var row="";
     row+=`<tr><td><i class="fa fa-pencil-square-o" aria-hidden="true"></i> </td>
    <td>${dname}</td>
    <td>${relation}</td>
    <td>${devent}</td>
    <td>${(dday+"/"+dmonth)}</td>
    <td><i class="fa fa-trash-o" aria-hidden="true"></i> </td>   </tr>`
 
document.getElementById("TableBody").innerHTML = table+row;
  }   
} 

 function Add_ServiceProvider(){
    let uname = document.getElementById('uname').value;
    let  sname= document.getElementById('name').value;
    let   semail = document.getElementById('email').value;
    let password=document.getElementById('pass').value;
    let cpassword=document.getElementById('cpass').value;
     
    
    if(uname==""||sname==""||semail==""|| password=="" ||cpassword =="")
        {
            alert("Please Enter the  field");
           
        }
 else if(password!=cpassword){
            alert("Invaild password");
        }
   
   else{
      
   
    database.ref("/com/pollachi/Register/ServiceProviders").push({
       username : uname,  
       name: sname,  
       email : semail,  
       password: password       
       });
   
       var table='<thead><tr><td>EDIT</td><td>USER NAME</td><td>NAME</td><td>EMAIL ID</td><td>DELETE</td></tr></thead>'
        var row="";
        row+=`<tr><td><i class="fa fa-pencil-square-o" aria-hidden="true"></i> </td>
       <td>${uname}</td>
       <td>${sname}</td>
       <td>${semail}</td>
       <td><i class="fa fa-trash-o" aria-hidden="true"></i> </td>   </tr>`
    
   
   document.getElementById("TableBody").innerHTML = table+row;
   }
       

 }

//  function Add_datafirebase(){
//   //  const ref= database.ref("com/pollachi/Donors/");
//    let dname = document.getElementById('dm_fname').value;
//    let devent = document.getElementById('dm_mevent').value;
//    let relation = document.getElementById('dm_relation').value;
  
//    var doc_dm_day = document.getElementById("dm_day");
//    var dday = doc_dm_day.options[doc_dm_day.selectedIndex].value;
//    var dmonth = document.getElementById('dm_month').options[document.getElementById('dm_month').selectedIndex].value;
  
  
   
//    if(dname==""||relation==""||devent==""||dday=="" ||dmonth=="")
//        {
//            alert("Please Enter the  field");
          
//        }
  
//   else{
     
  
//    database.ref("com/pollachi/Donors/").push({
//       dday : dday,  
//       devent: devent,  
//       dmonth : dmonth,  
//       name: dname,
//       relation: relation       
//       });
  
//       var table='<thead><tr><td>EDIT</td><td>NAME</td><td>RELATIONSHIP</td><td>EVENT</td><td>DAY/MONTH</td><td>DELETE</></tr></thead>'
//        var row="";
//        row+=`<tr><td><i class="fa fa-pencil-square-o" aria-hidden="true"></i> </td>
//       <td>${dname}</td>
//       <td>${relation}</td>
//       <td>${devent}</td>
//       <td>${(dday+"/"+dmonth)}</td>
//       <td><i class="fa fa-trash-o" aria-hidden="true"></i> </td>   </tr>`
   
//   document.getElementById("TableBody").innerHTML = table+row;
//     }   
//   } 
  
   function Add_donation(){
      let date = document.getElementById('date').value;
      let relation= document.getElementById('dm_relation').value;
      let   event = document.getElementById('dm_mevent').value;
     
      
      if(date==""||relation==""||event=="")
          {
              alert("Please Enter the  field");
             
          }
     
     else{
        
     
      database.ref("/com/pollachi/MyDonation").push({
         donation_date : date,  
         d_relation: relation,  
         d_event: event     
         });
     
         var table='<thead><tr><td>Donation Date</td><td>Relationship</td><td>Event</td></tr></thead>'
          var row="";
          row+=`<tr>
         <td>${date}</td>
         <td>${relation}</td>
         <td>${event}</td>
           </tr>`
      
     
     document.getElementById("TableBody").innerHTML = table+row;
     }       
  
   }
   DonationTable.innerHTML = '<thead><tr><td>S. No.</td><td>Donation Date</td><td>Relationship</td><td>Event</td></tr></thead>';
  database.ref('/com/pollachi/MyDonation').orderByChild("donation_date").on('value',function(snapshot){
  var i =1;
  var add=document.getElementById('addnew')
  snapshot.forEach((usersdata)=>{
  key = usersdata.key;
  uservalue = usersdata.val();

  var date=uservalue.donation_date;
  var relation=uservalue.d_relation;
  var event=uservalue.d_event;
 
  DonationTable.innerHTML += `<tr>
          <td>${i}</td>
          
         <td>${date}</td>
         <td>${relation}</td>
          <td>${event}</td>  
               
          
      </tr>`;
      i++;
      })
  })