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
      const db=firebase.database(app);

    // const userForm =document.getElementById('date-field');
    const tbody = document.getElementById('tbody');

// userForm.onsubmit=() =>{

   db.ref('com/pollachi/Users/id').orderByChild('cd').on('value',(snapshot)=>{
    var n =1;
    tbody.innerHTML = "";
    snapshot.forEach((usersdata)=>{
    key = usersdata.key;
    uservalue = usersdata.val();
    

      tbody.innerHTML += `<tr>  
            <td>${n}</td>
            <td>${uservalue.Firstname==undefined?"":uservalue.Firstname}</td>
            <td>${uservalue.Lastname==undefined?"":uservalue.Lastname}</td>  
            <td>${uservalue.Email==undefined?"":uservalue.Email}</td>
            <td>${uservalue.cd==undefined?"":uservalue.cd}</td>
            </tr>`;
        n++;
        
        })
        const count= n-1;
        document.getElementById('count').innerHTML=count;
   })
  //  function dateFormat(d){
  //   var date = new Date(d); // Date 2011-05-09T06:08:45.178Z
  //   var year = date.getFullYear();
  //   var month = ("0" + (date.getMonth() + 1)).slice(-2);
  //   var day = ("0" + date.getDate()).slice(-2);

  //   return(`${month}/${day}/${year}`); // 2011-05-09
  

// }