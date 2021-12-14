

const ps = require('prompt-sync');

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

 
}


 
 class Read extends Query {

      //Dina
      GetTableData()
      {

         this.GetDBTabels();
         var tableName = enter("enter table name : ")
         Client.query("Select * from "+tableName, (error, result) => {
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

      GetDBColumns(result,client){
    
         return new Promise( ( resolve, reject ) => {
            client.query("SELECT column_name FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = " + "'"+result.table_name+"'", (err, result)=> {
             if (err) {
                  console.log(err.stack)
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

   DeleteTable() {
      //drop table table_name
      
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

