

const { query } = require('express');
const ps = require('prompt-sync');
//get some user input
const propt = ps()


var options = {
   table_name: "table",
   query:"hi"
  }


 

class Query {
  
   getQuery(client){

      options.query=propt("enter your query plz : ")
      client.query(options.query, (err, res) => {
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

   
      GetDBTabels(client){
         return new Promise( ( resolve, reject ) => {
             client.query("select table_name from information_schema.tables where table_schema='public'", (err, result)=>{
                 if (err){
                     return reject( err );
                 }
                 {
                     resolve( result.rows);
                      
                 }
                
             });
         })
       }

       GetDBColumns(result,client){
    
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
 
class CreateTable extends Query{

   CreateTable(shcema,client){

      var tableName = propt("enter the name of table to be created : ");
      client.query("CREATE TABLE "+ tableName+shcema, function(err, res) {
          if (err) {
          console.log(err.stack)
          } else {
          
            console.log(res.rows) ;
            
          }
      });
      return tableName;
   }
    
} 


class Insert extends Query{

   InertFilesData(values,tableName,client){

      var table=tableName , values_=values;

      client.query("INSERT INTO "+table+" VALUES "+values_, function(err, res) {
         if (err) {
         console.log(err.stack)
         } else {
         
         console.log(res.rows) ;
         
         }
     });
   }

   CreateTable(shcema,client){

      var tableName = propt("enter the name of table to be created : ");
      client.query("CREATE TABLE "+ tableName+shcema, function(err, res) {
          if (err) {
          console.log(err.stack)
          } else {
          
            console.log(res.rows) ;
            
          }
      });
      return tableName;
   }

}

module.exports = {
   Query : Query,
   Read : Read,
   Write:Write,
   GetTable:GetTable,
   DeleteTable:DeleteTable,
   CreateTable:CreateTable,
   Insert:Insert
 }

