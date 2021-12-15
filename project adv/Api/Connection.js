
const query=require('./Query.js');
var connectionDetails= {
    host : "" ,
    user : "" ,
    port : 0 ,
    passWord : "" 
     
}
    
  
class Connection {
    database=""
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
        this.database=database;
    }

    SetConnection(connectionDetails_,databaseName){
        this.SetHost(connectionDetails_.host);
        this.SetUser(connectionDetails_.user);
        this.SetPort(connectionDetails_.port);
        this.SetPassword(connectionDetails_.passWord);
        this.SetDataBase(databaseName);
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
        return this.database;
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
   
    GetNewConnection(connectionDetails_,databaseName){
          
        this.SetConnection(connectionDetails_,databaseName);
        const cleint = this.GetClient();
 
       return cleint;


    }

    ConnectionProfile(connectionDetails_,databaseName,client){
          
        let listOfDetails=[connectionDetails_.host,connectionDetails_.user,connectionDetails_.port,databaseName,connectionDetails_.passWord]
        
        var values="("
        for(var j=0;j<listOfDetails.length;j++){
           if(j<listOfDetails.length-1){
            values+="'"+listOfDetails[j]+"',"
               
          }
          else{
            values+="'"+listOfDetails[j]+"')"
          }
          
        }
            const insert = new query.Insert();
            insert.InertFilesData(values,"connections",client)   
    }
  }
 

module.exports = {
    connectionDetails : connectionDetails,
    Connection:Connection
  }