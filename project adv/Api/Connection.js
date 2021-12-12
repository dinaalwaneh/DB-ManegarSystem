let count = 0;

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
 
module.exports = Connection;