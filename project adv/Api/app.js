/*let count = 0;
  
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


//const db=require('test_pipe');
//const db=require('test_stream');

/////////////////////////////////////////////
///////////////////////
/*
  const Pool = require("pg").Pool;
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
// Create a connection to the database
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "rahaf2002",
  database: "school",
  port: 3000
});
// open the PostgreSQL connection
pool.connect((err, client, done) => {
  if (err) throw err;
  client.query("SELECT * FROM TableName", (err, res) => {
    done();
    if (err) {
      console.log(err.stack);
    } else {
      const jsonData = JSON.parse(JSON.stringify(res.rows));
      console.log("jsonData", jsonData);
      const csvWriter = createCsvWriter({
        path: "csvWriter.csv",
        header: [
          { id: "id", title: "ID" },
          { id: "name", title: "NAME"}
        ]
      });
      csvWriter
        .writeRecords(jsonData)
        .then(() =>
          console.log("Write to csvWriter.csv successfully!")
        );
    }
  });
});

function Export(){
  if (err) throw err;
  client.query("SELECT * FROM TableName", (err, res) => {
    done();
    if (err) {
      console.log(err.stack);
    } else {
      const jsonData = JSON.parse(JSON.stringify(res.rows));
      console.log("jsonData", jsonData);
      const csvWriter = createCsvWriter({
        path: "csvWriter.csv",
        header: [
          { id: "id", title: "ID" },
          { id: "name", title: "NAME"}
        ]
      });
      csvWriter
        .writeRecords(jsonData)
        .then(() =>
          console.log("Write to csvWriter.csv successfully!")
        );
    }
  });
}
/*


var csv = require('csv');
var squel = require('squel');
module.exports.transform = function(tableName, instream){
	var delimiter = ','
	var header;
	return csv()
	.from.stream(instream, { delimiter: delimiter, escape: '"' })
	.transform( function(row){
	    if (!header) { //first row assumed to be header
		    header=row;
		    return null;
		}
		//all other rows
		var sqlInsert = squel.insert().into(tableName);
		for (var i = 0; i < row.length; i++){
			if (row[i] == undefined) row[i] = "";
			sqlInsert.set(header[i], esc(row[i]));
		}
	    return sqlInsert.toString() + ";\n";
	})
}
function esc(str){
	if (str.length == 0) return null;
	str = str.replace(/'/g, "''");
  return(console.log("ggggg",str))
}




const log4js = require('log4js');
// Create the logger
const logger = log4js.getLogger();
logger.level = 'info';
// Log a message
logger.info('Hello, log4js!');


/*
const Pool = require("pg").Pool;
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
// Create a connection to the database

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "rahaf2002",
  database: "school",
  port: 3000
});
// open the PostgreSQL connection
pool.connect((err, client, done) => {
  if (err) throw err;

  client.query("SELECT * FROM TableName", (err, res) => {
    done();

    if (err) {
      console.log(err.stack);
    } else {
      const jsonData = JSON.parse(JSON.stringify(res.rows));
      console.log("jsonData", jsonData);

      const csvWriter = createCsvWriter({
        path: "bezkoder_postgresql_csvWriter.csv",
        header: [
          { id: "id", title: "ID" },
          { id: "name", title: "NAME"}
        ]
      });

      csvWriter
        .writeRecords(jsonData)
        .then(() =>
          console.log("Write to bezkoder_postgresql_csvWriter.csv successfully!")
        );
    }
  });
});*/

/*

const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');
const parser = new xml2js.Parser();
let x;
 fs.readFile('file.xml', (err, data) => {
	parser.parseString(data, (err, result) => {
		x=util.inspect(result, false,null,true);
    SetJson(x)
    return result;
	});
});

function SetJson(jsonv){
  y=x;
  console.log(y)
}
*/



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
    }).then(token => { return token } )
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
    }).then(token => { return token } )
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
 
 
         for(i=0;i<2;i++){

          const t= await queryDb2(esult[i])
          q=[];  
          for(j=0;j<t.length;j++){
            q.push(t[j].column_name) 
           
          
         }
       if(equals(q,arrayjson)==true)  {
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
console.log(f)
} */


