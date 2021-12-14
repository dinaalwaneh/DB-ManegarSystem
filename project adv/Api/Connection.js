

var connectionDetails= {
    host : "" ,
    user : "" ,
    port : 0 ,
    passWord : "" ,
    database : "" 
}
    
  
class Connection {

    constructor() {
        if (Connection.instance) {
          console.log("Instence is already created : ")
          return Connection.instance
        }
        Connection.instance = this;
        console.log("Create instence is done succssfuly : ")
     }

    SetHost(host){
        connectionDetails.host=host;
    }
    
    SetUser(user){
        connectionDetails.user=user;
    }

    SetPort(port){
        connectionDetails.port=port;
    }

    SetPassword(passWord){
        connectionDetails.passWord=passWord;
    }
    

    SetDataBase(database){
        connectionDetails.database=database;
    }

    SetConnection(connectionDetails_){
        this.SetHost(connectionDetails_.host);
        this.SetUser(connectionDetails_.user);
        this.SetPort(connectionDetails_.port);
        this.SetPassword(connectionDetails_.passWord);
        this.SetDataBase(connectionDetails_.database);
    }

    GetHost(){
        return connectionDetails.host;
    }
    
    GetUser(){
        return connectionDetails.user;
    }

    GetPort(){
        return connectionDetails.port;
    }

    GetPassword(){
        return connectionDetails.passWord;
    }
    

    GetDataBase(){
        return connectionDetails.database;
    }

    GetClient(){
        const {Client}=require('pg');
        const cleint = new Client({

            host: this.GetHost(),
            user: this.GetUser(),
            port: this.GetPort(),
            password: this.GetPassword() ,
            database: this.GetDataBase()

        });
        
        return cleint;

    }
   
    GetNewConnection(connectionDetails_){
          
        this.SetConnection(connectionDetails_);
        const cleint = this.GetClient();
 
       return cleint;


    }


  }
 

/*
  let o=new Connection()
  let connectionDetails_ = connectionDetails
  connectionDetails_.host="localhost";
  connectionDetails_.passWord="dina14120021412002";
  connectionDetails_.port=5432;
  connectionDetails_.user="postgres";
  connectionDetails_.database="school";


  const h=o.GetNewConnection(connectionDetails_);
  h.query("select * from table_name", (err, res) => {
    if (err) {
    console.log(err.stack)
    } else {
    console.log(res.rows)
    
    }
  })
h.connect()*/


module.exports = {
    connectionDetails : connectionDetails,
    Connection:Connection
  }