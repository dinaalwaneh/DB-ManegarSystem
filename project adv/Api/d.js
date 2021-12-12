

const ps = require('prompt-sync');
//get some user input
const propt = ps()


var options = {
   table_name: "table",
   query:"hi"
  }



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

class Query {
  
   getQuery(Client){

      options.query=propt("enter your query plz : ")
      Client.query(options.query, (err, res) => {
         if (err) {
         console.log(err.stack)
         } else {
         console.log(res.rows)
         
         }
      })
   }

 
}


 
 class Read extends Query {
   
   //select * from table_name 

  //Override


     /*  Client.query("Select * from "+options.table_name, (err, res) => {
         if (err) {
         console.log(err.stack)
         } else {
         console.log(res.rows)
         
         }
      })*/ 
      /* 
      Client.query("select table_name from information_schema.tables where table_schema='public'", (err, res) => {
         if (err) {
         console.log(err.stack)
         } else {
         console.log(res.rows)
         
         }
      })*/

   
  
   
}

//update data :
class Write extends Query {
   //update table_name set column1=value , column2=value where id=value 

}

class GetTable extends Query {
   //select table_name from information_schema.tables where table_schema='public'

}


class DeleteTable extends Query {
   //drop table table_name
   
}


class DeleteData extends Query {
   //DELETE FROM table_name WHERE condition;
      
}
const g=new GetTable();
g.getQuery(client);

module.exports = {
   Query : Query,
   Read : Read,
   Write:Write,
   GetTable:GetTable,
   DeleteTable:DeleteTable
 }