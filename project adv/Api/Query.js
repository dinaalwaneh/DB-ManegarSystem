

const ps = require('prompt-sync');
const { collapseTextChangeRangesAcrossMultipleVersions } = require('typescript');

//get some user input
const enter = ps()

 
class Query {
  
   GetQuery(client){

      let query=enter("enter your query plz : ")
      client.query(query, (error, result) => {
         if (error) {
            console.log(error.stack)
         } else {
             console.log(result.rows)
         }
      })
   }
      
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

 
}



 
class Read extends Query {

      //Dina
      GetTableData(client)
      {

          
         var tableName = enter("enter table name : ")
         client.query("Select * from "+tableName, (error, result) => {
            if (error) {
               console.log(error.stack)
            } else {
               console.log(result.rows)
               
            }
         })
      }
   
      async  print(y) {
      console.log(y)
   }

      GetDBColumns(result,client){

         return new Promise( ( resolve, reject ) => {
            client.query("SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = " + "'"+result +"'", (err, result)=> {
             if (err) {
                  reject(err.stack)
             } else {
       
                  resolve(result.rows)
               
             }
           })
         })
       }
   
}

//update data :
class Write extends Query {
   //update table_name set column1=value , column2=value where id=value 

}

class Delete extends Query{

   DeleteTable(tableName,client) {
      
      client.query("drop table "+tableName, (error, result) => {
         if (error) {
            console.log(error.stack)
         } else {
            console.log("table is deleted : ")
            
         }
      })
   }


   DeleteData() {
      //DELETE FROM table_name WHERE condition;
         
   }
}


class Insert extends Query{

   InertFilesData(values,tableName,client){

      var table=tableName , values_=values;

      client.query("INSERT INTO "+table+" VALUES "+values_, function(error, result) {
         if (error) {
         console.log(error.stack)
         } else {
         
            console.log("Inserted had done succsesfully : ") ;
         
         }
     });
   }
   InertConnectionDetails(values,dataBaseName,client){

      var values_=values;

      client.query("insert into connections (dbname) Select  '"+dataBaseName+"' Where not exists(select * from connections where dbname='"+dataBaseName+"')", function(error, result) {
         if (error) {
         console.log(error.stack)
         } else {
         
            console.log("Inserted had done succsesfully : ") ;
         
         }
     });
   }

  

   CreateTable(shcema,client){

      var tableName = enter("enter the name of table to be created : ");
   
      client.query("CREATE TABLE "+ tableName+shcema, function(err, res) {
          if (err) {
          console.log(err.stack)
          } else {
          
            console.log("Table + "+tableName+" has added :") ;
            
          }
      });
      return tableName;
   }

}

module.exports = {
   Query : Query,
   Read : Read,
   Write:Write,
   Insert:Insert,
   Delete:Delete
 }

