
const query=require('./Query.js');
var connectionDetails= {
    host : "" ,
    user : "" ,
    port : 0 ,
    passWord : "" 
     
}
    
const log4js = require('log4js');
// Create the logger
const logger = log4js.getLogger(); 
log4js.configure({
    appenders: {
        fileAppender: { type: 'file', filename: './logs/example-12.log' },
        console: { type: 'console' }
    },
    categories: {
        default: { appenders: ['fileAppender'], level: 'error' }
    }
}); 

class Connection {
    database=""
    constructor() {
        if (Connection.instance) {
            logger.level = 'info';
            logger.info('Created !');
          console.log("Instence is already created : ")
          return Connection.instance
        }
        Connection.instance = this;
        logger.level = 'info';
        logger.info('Successfully!');
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
        logger.level = 'info';
        logger.info('return the host');
        return connectionDetails.host;
    }
    
    GetUser(){
        logger.level = 'info';
        logger.info('return the user');
        return connectionDetails.user;
    }

    GetPort(){
        logger.level = 'info';
        logger.info('return the port');
        return connectionDetails.port;
    }

    GetPassword(){
        logger.level = 'info';
        logger.info('return the password');
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
        logger.level = 'info';
        logger.info('return the database');
        return cleint;

    }
   
    GetNewConnection(connectionDetails_,databaseName){
          
        this.SetConnection(connectionDetails_,databaseName);
        const cleint = this.GetClient();
        logger.level = 'info';
        logger.info('return the new database');
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
            insert.InertConnectionDetails(values,databaseName,client)   
    }

  }
 

module.exports = {
    connectionDetails : connectionDetails,
    Connection:Connection
  }