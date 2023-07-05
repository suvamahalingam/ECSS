
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
  
    
  
  
  TableBody.innerHTML = '<thead><tr><td>S.No</td><td>USER NAME</td><td>NAME</td><td>EMAIL ID</td><td>EDIT</td><td>DELETE</td></tr></thead>';
  database.ref('/com/pollachi/Register/ServiceProviders').on('value',function(snapshot){
  var i =1;
  var add=document.getElementById('addnew')
  snapshot.forEach((usersdata)=>{
  key = usersdata.key;
  uservalue = usersdata.val();


  
 
  TableBody.innerHTML += `<tr>
          <td>${i}</td>
          
         <td>${uservalue.username}</td>
         <td>${(uservalue.name)}</td>
          <td>${uservalue.email}</td>  
         
          <td><i class="fa fa-pencil-square-o" aria-hidden="true"></i> </td>
          <td><i class="fa fa-trash-o" aria-hidden="true"></i> </td>       
          
      </tr>`;
      i++;
      })
  })
  
   

      
    
      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
    
      document.getElementById('downloadexcel').addEventListener('click', function(){
        var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("#example-table"));
      })  
    