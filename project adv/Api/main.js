
 
const ps = require('prompt-sync');
//get some user input
const prompt = ps()


  let dBName = "school";//prompt("enter the name of DB : ");
  let hostName = "localhost";//prompt("enter the name of host : ");
  let user ="postgres";// prompt("enter the name of user : ");
  let passWord ="dina14120021412002";// prompt("enter the password : ");
  let port = 5432; //prompt("enter the port : ");

 const Connection = require('./Connection.js')

  // Instantiate User:
  let userr = new Connection()
  
 const client=userr.getNewConnection(hostName,user,port,passWord,dBName);
 client.connect();


 const db=require('./d');
 var JohnInstance = new db.Get();




 async function main(){ 
  
   const result = await queryDb();
  let user_id = result;
console.log(user_id);
   await  JohnInstance.getQuery(client);

}
 //del=prompt("enter the name of DB : ");


function queryDb(query){
  return new Promise( ( resolve, reject ) => {
      client.query("select table_name from information_schema.tables where table_schema='public'", (err, res) => {
        if (err) {
        console.log(err.stack)
        } else {
        
          resolve(res.rows) ;
        
        }
      })
  })
}

 main();

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