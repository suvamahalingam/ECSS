// // const database=firebase.database(app);
//     // const database=getDatabase();
//     const config = {
//         apiKey: "AIzaSyCyxQSgacMfgByUnAom7wA48ueWN5LdZJI",
//         authDomain: "ecss-dev.firebaseapp.com",
//         databaseURL: "https://ecss-dev-default-rtdb.firebaseio.com",
//         projectId: "ecss-dev",
//         storageBucket: "ecss-dev.appspot.com",
//         messagingSenderId: "101446971408",
//         appId: "1:101446971408:web:fa56f2d86fb073cdae1a95",
//         measurementId: "G-HDBR61WXJ5"
//       }; 
//       //initialize 
//       const app=firebase.initializeApp(config);
//       const database=firebase.database(app);

//     const userForm =document.getElementById('date-field');
//     const TableBody = document.getElementById('TableBody');
//     var fromdt=document.getElementById('fdate').value;
//     var todt=document.getElementById('tdate').value;

//     function search_date()
//     {
      
//       var fromdt=document.getElementById('fdate').value;
//       var todt=document.getElementById('tdate').value;

//       if(fromdt==""||fromdt==null||todt==""||todt==null)
//     {
//         alert("Please Enter the  Date");
//         // fromdt.focus();
//     }

//     else{
//       TableBody.innerHTML = '<thead><tr><td>S.No</td><td> DONOR NAME</td><td>DONATION DATE</td><td>RELATIONSHIP</td><td>EVENT</td></tr></thead>';
//         database.ref('/com/pollachi/transcations/id1/donnors').on('value',function(snapshot){
//           var i =1;
          
//           snapshot.forEach((usersdata)=>{
//           key = usersdata.key;
//           uservalue = usersdata.val();
//           // rel = usersdata.child("donnors").val();
//           var d=uservalue.date;
//           TableBody.innerHTML += `<tr>
//                   <td>${i}</td>
                  

//                  <td>${uservalue.names}</td>
//                  <td>${dateFormat(d)}</td>
//                   <td>${uservalue.s_for}</td>  
//                   <td>${uservalue.s_event}</td>
//               </tr>`;
//               i++;
//               })
//         })
//         function dateFormat(d){
//           var date = new Date(d); // Date 2011-05-09T06:08:45.178Z
//           var year = date.getFullYear();
//           var month = ("0" + (date.getMonth() + 1)).slice(-2);
//           var day = ("0" + date.getDate()).slice(-2);
    
//           return(`${month}/${day}/${year}`); // 2011-05-09
//         }
//    }

// }

// TableBody.innerHTML = '<thead><tr><td>S.No</td><td> DONOR NAME</td><td>DONATION DATE</td><td>RELATIONSHIP</td><td>EVENT</td></tr></thead>';
// database.ref('/com/pollachi/transcations/id1/donnors').on('value',function(snapshot){
//   var i =1;
  
//   snapshot.forEach((usersdata)=>{
//   key = usersdata.key;
//   uservalue = usersdata.val();
//   // rel = usersdata.child("donnors").val();
//   var d=uservalue.ct;
//   TableBody.innerHTML += `<tr>
//           <td>${i}</td>
          

//          <td>${uservalue.names.n}</td>
//          <td>${dateFormat(d)}</td>
//           <td>${uservalue.s_for}</td>  
//           <td>${uservalue.s_event}</td>
          
//       </tr>`;
//       i++;
//       })
// })
// function dateFormat(d){
//   var date = new Date(d); // Date 2011-05-09T06:08:45.178Z
//   var year = date.getFullYear();
//   var month = ("0" + (date.getMonth() + 1)).slice(-2);
//   var day = ("0" + date.getDate()).slice(-2);

//   return(`${month}/${day}/${year}`); // 2011-05-09
// }





// const database=firebase.database(app);
    // const database=getDatabase();
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

  const userForm =document.getElementById('date-field');
  const TableBody = document.getElementById('TableBody');


  TableBody.innerHTML = '<thead><tr><td>S.No</td><td>DONATION DATE</td><td>DONORS NAME</td><td>RELATIONSHIP</td><td>EVENT</td></tr></thead>';
    // for(i=0;i<4;i++){ 
    const transaction= database.ref('com/pollachi/transcations/')
    transaction.on('value',function(snapshot){
        var sno =1;
        
        snapshot.forEach(function(usersdata){
          // key = usersdata.key;
        uservalue = usersdata.val();
        // var dvalue=uservalue.donnors
        // .forEach(function(data){
        rel="";
        event="";
        var name="";

       for(i=0;i<4;i++)
        {
          if(usersdata.child("donnors/"+i).exists()){
        var rel =rel+ usersdata.child("donnors/"+i+"/s_for").val()+"<br>";
        var event =event+ usersdata.child("donnors/"+i+"/s_event").val()+"<br>";
        name = name+usersdata.child("donnors/"+i+"/names/0/n").val()+","+usersdata.child("donnors/"+i+"/names/1/n").val()+"<br>";

      }
      }

      
        var d=uservalue.date;
        TableBody.innerHTML += `<tr>
                <td>${sno}</td>
                <td>${dateFormat(d)}</td>            
                 <td>${name}</td>
                <td>${rel}</td>
                <td>${event}</td>
            </tr>`;
            sno++;
            });
      });
    // }
      function dateFormat(d){
        var date = new Date(d); // Date 2011-05-09T06:08:45.178Z
        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);
  
        return(`${month}/${day}/${year}`); // 2011-05-09
      }



  function search_date()
  {
    
    var fromdt=document.getElementById('fdate').value;
    var todt=document.getElementById('tdate').value;

    if(fromdt==""||fromdt==null||todt==""||todt==null)
  {
      alert("Please Enter the  Date");
      // fromdt.focus();
  }
//........Display Table.................

  else{
    TableBody.innerHTML = '<thead><tr><td>S.No</td><td>DONATION DATE</td><td>DONORS NAME</td><td>RELATIONSHIP</td><td>EVENT</td></tr></thead>';
    // for(i=0;i<4;i++){ 
    const transaction= database.ref('com/pollachi/transcations/')
    transaction.on('value',function(snapshot){
        var sno =1;
        
        snapshot.forEach(function(usersdata){
          // key = usersdata.key;
        uservalue = usersdata.val();
        // var dvalue=uservalue.donnors
        // .forEach(function(data){
        rel="";
        event="";
        var name="";

       for(i=0;i<4;i++)
        {
          if(usersdata.child("donnors/"+i).exists()){
        var rel =rel+ usersdata.child("donnors/"+i+"/s_for").val()+"<br>";
        var event =event+ usersdata.child("donnors/"+i+"/s_event").val()+"<br>";
        name = name+usersdata.child("donnors/"+i+"/names/0/n").val()+","+usersdata.child("donnors/"+i+"/names/1/n").val()+"<br>";

      }
      }

      
        var d=uservalue.date;
        TableBody.innerHTML += `<tr>
                <td>${sno}</td>
                <td>${dateFormat(d)}</td>            
                 <td>${name}</td>
                <td>${rel}</td>
                <td>${event}</td>
            </tr>`;
            sno++;
            });
      });
    // }
      function dateFormat(d){
        var date = new Date(d); // Date 2011-05-09T06:08:45.178Z
        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);
  
        return(`${month}/${day}/${year}`); // 2011-05-09
      }
 }

}