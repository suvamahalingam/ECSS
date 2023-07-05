
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
  
    
  
  
  TableBody.innerHTML = '<thead><tr><td>S.No</td><td> DONOR NAME</td><td>DONATION DATE</td><td>RELATIONSHIP</td><td>EVENT</td><td>EDIT</td><td>DELETE</td></tr></thead>';
  database.ref('/com/pollachi/Donors').orderByChild("date").on('value',function(snapshot){
  var i =1;
  var add=document.getElementById('addnew')
  snapshot.forEach((usersdata)=>{
  key = usersdata.key;
  uservalue = usersdata.val();

  var d=uservalue.dday;
  var m=uservalue.dmonth;
  var date=d+"/"+m;
 
  TableBody.innerHTML += `<tr>
          <td>${i}</td>
          
         <td>${uservalue.name}</td>
         <td>${(date)}</td>
          <td>${uservalue.relation}</td>  
          <td>${uservalue.devent}</td> 
          <td><i class="fa fa-pencil-square-o" aria-hidden="true"></i> </td>
          <td><i class="fa fa-trash-o" aria-hidden="true"></i> </td>       
          
      </tr>`;
      i++;
      })
  })
  
    // document.getElementById('save').addEventListener('click', function writeUserData(dday, devent,dmonth,dname,relation) {
    //   var dname=document.getElementById('dm_fname').value;  
    //     var relation=document.getElementById('dm_relation').value;
    //     var devent=document.getElementById('dm_mevent').value;
    //     var dday=document.getElementById('dm_day').value;
    //     var dmonth=document.getElementById('dm_month').value;
    //   const db = getDatabase(app);
    //   set(ref('com/pollachi/Donors'), {
       
    //     dday:dday,
    //  devent:devent,
    //  dmonth:dmonth,
    //  name:dname,
    //  relationship:relation
    //   });})

      
    
      function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
    
      document.getElementById('downloadexcel').addEventListener('click', function(){
        var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("#example-table"));
      })  
    