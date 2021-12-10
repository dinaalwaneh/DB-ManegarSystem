let count = 0;
  
const ps = require('prompt-sync');
//get some user input
const prompt = ps()


class MyClass {
    
    host = "" ;
    user = "" ;
    port = 0 ;
    password = "" ;
    database = "" ;

 

    constructor() {
      if (MyClass.instance) {
        return MyClass.instance
      }
      MyClass.instance = this;
        console.log("done")
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

    setPassword(password){
        this.password=password;
    }
    

    setDataBase(database){
        this.database=database;
    }

    setConnection(host,user,port,password,database){
        this.setHost(host);
        this.setUser(user);
        this.setPort(port);
        this.setPassword(password);
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
        return this.password;
    }
    

    getDataBase(){
        return this.database;
    }

    createDB(host,user,port,password){
        this.setConnection(host,user,port,password);
        var pgtools = require("pgtools");
        const config = {
            user: this.getUser(),
            host: this.getHost(),
            password: this.getPassword(),
            port: this.getPort()
        };
        let dbName="Dinaa";
        pgtools.createdb(config, dbName, function(err, res) {
        if (err) {
            console.error(err);
            process.exit(-1);
        }
        console.log(res);
        });
        return dbName;
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
   
    getNewConnection(host,user,port,password,database){
         
        this.setConnection(host,user,port,password,database);
        const cleint = this.getClient();
 
       return cleint;


    }


  }
  


  //main :
  var instanceOne = new MyClass()
  let dbname = prompt("enter the name of DB : ");

  let hostname = prompt("enter the name of host : ");
  let user = prompt("enter the name of user : ");
  let pw = prompt("enter the password : ");
  let port = prompt("enter the port : ");

   

 let dbName2 = "ConnectionProfile";
 const clie=instanceOne.getNewConnection(hostname,user,port,pw,dbName2);
 clie.connect();
 
const text = 'INSERT INTO connection(C_Id, C_Host, C_User,C_PW,C_DBName,C_Port) VALUES($1, $2,$3,$4,$5,$6) RETURNING *'
const values = [1,hostname,user,pw,dbname,port]
// callback
/*clie.query(text, values, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
    // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
  }
})
*/
const clien=instanceOne.getNewConnection(hostname,user,port,pw,dbname);
 
clien.connect();
/*clie.query("Select * from connection", (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows)
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    }
  })

*/
  console.log(clie==clien)

/*
 console.log(count)
  
 */ 

//const f=instanceOne.createDB( hostname,user,port,pw);