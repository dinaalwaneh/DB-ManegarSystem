let count = 0;
  
const ps = require('prompt-sync');
//get some user input
const prompt = ps()


class Connection {
    
    host = "" ;
    user = "" ;
    port = 0 ;
    passWord = "" ;
    database = "" ;

 

    constructor() {
        if (Connection.instance) {
          console.log("Instence is already created : ")
          return Connection.instance
        }
        Connection.instance = this;
        console.log("Create instence is done succssfuly : ")
     }

    setHost(host){
        this.host=host;
    }
    
    setUser(user){
        this.user=user;
    }

    setPort(port){
        this.port=port;
    }

    setPassword(passWord){
        this.passWord=passWord;
    }
    

    setDataBase(database){
        this.database=database;
    }

    setConnection(host,user,port,passWord,database){
        this.setHost(host);
        this.setUser(user);
        this.setPort(port);
        this.setPassword(passWord);
        this.setDataBase(database);
    }

    getHost(){
        return this.host;
    }
    
    getUser(){
        return this.user;
    }

    getPort(){
        return this.port;
    }

    getPassword(){
        return this.passWord;
    }
    

    getDataBase(){
        return this.database;
    }

    getClient(){
        const {Client}=require('pg');
        const cleint = new Client({

            host: this.getHost(),
            user: this.getUser(),
            port: this.getPort(),
            password: this.getPassword() ,
            database: this.getDataBase()

        });
        
        return cleint;

    }
   
    getNewConnection(host,user,port,passWord,database){
         
        this.setConnection(host,user,port,passWord,database);
        const cleint = this.getClient();
 
       return cleint;


    }


  }
  


  //main :

  var instanceOne = new Connection()
  let dBName = prompt("enter the name of DB : ");
  let hostName = prompt("enter the name of host : ");
  let user = prompt("enter the name of user : ");
  let passWord = prompt("enter the password : ");
  let port = prompt("enter the port : ");

 const client=instanceOne.getNewConnection(hostName,user,port,passWord,dBName);
 client.connect();
 
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