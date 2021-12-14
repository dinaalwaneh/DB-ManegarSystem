
  const Connection = require('./Connection.js')
  //no
  const { json } = require('express/lib/response');

  //no//
  const ps = require('prompt-sync');
  const { isConstructorDeclaration } = require('typescript');
  //get some user input
  const prompt = ps()

  let connectionDetails_ =  Connection.connectionDetails;

  connectionDetails_.database = "school";//prompt("enter the name of DB : ");
  connectionDetails_.hostName = "localhost";//prompt("enter the name of host : ");
  connectionDetails_.user ="postgres";// prompt("enter the name of user : ");
  connectionDetails_.passWord ="dina14120021412002";// prompt("enter the password : ");
  connectionDetails_.port = 5432; //prompt("enter the port : ");
 
  // Instantiate User:
  let connection_ = new Connection.Connection()
  
 const client=connection_.GetNewConnection(connectionDetails_);
 client.connect();

 console.log("***********List of Jobs :)***********")
 console.log("***********1. make a query :)***********")
 console.log("***********2. import file to database :)***********")
 console.log("***********3. export data from database :)***********")


 
 //
 
 
 /*
 
 const db=require('./d');
 var readQuery = new db.Read();



 
/*v='persons'
var sqll = 'SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = ' + "'"+v+"'";

console.log(sqll) //del=prompt("enter the name of DB : ");
 client.query(sqll, function(err, res) {
  if (err) {
  console.log(err.stack)
  } else {
  
    console.log(res.rows) ;
    
  }
})*/
 /*
array=[]

var tableArray = [];
 


  function queryDb(){
    return new Promise( ( resolve, reject ) => {
        client.query("select table_name from information_schema.tables where table_schema='public'", (err, result)=>{
            if (err){
                return reject( err );
            }
            resolve( result.rows);
        });
    })
  }

  function queryDb2(result){
    
    return new Promise( ( resolve, reject ) => {
      client.query("SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = " + "'"+result.table_name+"'", (err, res)=> {
        if (err) {
        console.log(err.stack)
        } else {
  
          resolve(res.rows)
          
        }
      })
    })
  }
function setValue(value) {
  tableArray = value;
  tablesLength = tableArray.length;
 
  for(i=0;i<tablesLength;i++){
    
    queryDb2(i);
  }
 
}
 
 k=[]
 
const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
let count =0;
 
 
  async function main(f){ 
     
        const esult = await queryDb();
const csvarr = ReadFile();
 
         for(i=0;i<2;i++){

          const t= await queryDb2(esult[i])
          q=[];  
          for(j=0;j<t.length;j++){
            q.push(t[j].column_name) 
           
          
         }
       if(equals(q,csvarr[0])==true)  {
         f=esult[i];
        return(f) ;
        
       }
      
        }
       
 
  }
let f;
f= main(f).then(val => {
   if(val!=null){
     set(val) ;
   }else{
    set(0) ;
   }
  
}).catch(err => {
  console.log(err);
})
function set(value){
    f=value;
    if(f==0){
      data=ReadFile();
      v="(";
      for(var i=0;i<data[0].length;i++){
          if(i<data[0].length-1){
              v+=data[0][i]+" varchar(255),"
              
         }
         else{
          v+=data[0][i]+" varchar(255))"
         }
      
      }
       
      
      table=CreateTable(v);
      
for (var i = 1; i < data.length-1; i++) {
     
  val="("
   for(j=0;j<data[i].length;j++){
      if(j<data[i].length-1){
          val+="'"+data[i][j]+"',"
          
     }
     else{
      val+="'"+data[i][j]+"')"
     }

 
   }

  
       insert(val,table); 
  }
    }
    else{

data=ReadFile();
 



for (var i = 1; i < data.length-1; i++) {
     
    val="("
     for(j=0;j<data[i].length;j++){
        if(j<data[i].length-1){
            val+="'"+data[i][j]+"',"
            
       }
       else{
        val+="'"+data[i][j]+"')"
       }

   
     }
 
         insert(val,f.table_name);
    }
    }

}

function CreateTable(value){
  table ="table_name";
  numberr=Math.floor(Math.random() * 900)
  n=prompt("enter the name of table to be added : ");
  client.query("CREATE TABLE "+ n+value, function(err, res) {
      if (err) {
      console.log(err.stack)
      } else {
      
        console.log(res.rows) ;
        
      }
  });
return n;
}


function insert(value,tableName){
  table =tableName ;
  console.log(table)
  client.query("INSERT INTO "+table+" VALUES "+value, function(err, res) {
      if (err) {
      console.log(err.stack)
      } else {
      
        console.log(res.rows) ;
        
      }
  });

}


function ReadFile(){

       
const fs = require("fs");
 
var data = fs.readFileSync("C:\\Users\\hp\\Desktop\\all\\data.csv", "utf8");
 
// (C) STRING TO ARRAY
data = data.split("\r\n"); // SPLIT ROWS
for (let i in data) { // SPLIT COLUMNS
  data[i] = data[i].split(",");
}
 return data;
}
 /*
 function get(v){
    v=0;
    return v;
}
f=get(f);
 */


//tables in database
//select table_name from information_schema.tables where table_schema='public'

//columns in some table :
//"SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'table_name'"
 /*

 async function main(){ 
  
    const insert_users_query = `INSERT INTO users xxxxxx`;
    const result = await queryDb(insert_users_query);
    let user_id = result.insertId;
    const linked_accounts_query = `INSERT INTO another_table (user_id) VALUES('${user_id}')`;
    await queryDb(linked_accounts_query);
  
  
}
 */
/* 
  //main :

  var instanceOne = new Connection()
  let dBName = prompt("enter the name of DB : ");
  let hostName = prompt("enter the name of host : ");
  let user = prompt("enter the name of user : ");
  let passWord = prompt("enter the password : ");
  let port = prompt("enter the port : ");

 const client=instanceOne.getNewConnection(hostName,user,port,passWord,dBName);
 client.connect();
 */
 // Test query :
/*
 client.query("Select * from table_name", (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows)
      
    }
  })
*/ 





//here profile code i will return it letter :
/* 
 let dbName2 = "ConnectionProfile";

const text = 'INSERT INTO connection(C_Id, C_Host, C_User,C_PW,C_DBName,C_Port) VALUES($1, $2,$3,$4,$5,$6) RETURNING *'
const values = [1,hostname,user,pw,dbname,port]
 clie.query(text, values, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
    // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
  }
})

const clien=instanceOne.getNewConnection(hostname,user,port,pw,dbname);
 
clien.connect();
clie.query("Select * from connection", (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows)
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    }
  })

 */  