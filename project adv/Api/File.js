
const fileSystem = require("fs");
const query=require('./d.js');


class File{

    
    ReadFile(path){
        console.log("Reading file has done sucssfult : ");
    }

    GetValues(data,count){
        var values="("
        for(var j=0;j<data[count].length;j++){
           if(j<data[count].length-1){
            values+="'"+data[count][j]+"',"
               
          }
          else{
            values+="'"+data[count][j]+"')"
          }
          
        }
        return values;
    }

    ExportData(data,tableName,client){

        for (var i = 0; i < data.length; i++) {
            var values=this.GetValues(data,i)
            var table = tableName ;
            const insert = new query.Insert();
            insert.InertFilesData(values,table,client)
        }
        

    }

    async SchemaIsfounded(client,data){
        let result;
        let get=new query.Read();
        const dataBaseTables =await get.GetDBTabels(client);
         
        for(var i=0;i<dataBaseTables.length;i++){

            const columnObject= await get.GetDBColumns(dataBaseTables[i],client);
            var columnArray = [];  
            for(var j=0;j<columnObject.length;j++){
                columnArray.push(columnObject[j].column_name)   
            }

           
            if(JSON.stringify(columnArray) === JSON.stringify(data))  {
                result=dataBaseTables[i];
                console.log("yeees")
                return(result) ;
               
              }

        }
    }

    CreateSchema(jsonHeader){
        var schema="(";
        for(var i=0;i<jsonHeader.length;i++){
            if(i<jsonHeader.length-1){
                schema+=jsonHeader[i]+" varchar(255),"
                
        }
        else{
                schema+=jsonHeader[i]+" varchar(255))"
        }
        } 
        return schema;

    }  

}


class Csv extends File{
    //Override :
    ReadFile(path){

        //path = > "C:\\Users\\hp\\Desktop\\all\\data.csv" .
        var data = fileSystem.readFileSync(path , "utf8");
        
        // STRING TO ARRAY
        data = data.split("\r\n"); // SPLIT ROWS
        for (let i in data) { // SPLIT COLUMNS
             data[i] = data[i].split(",");
        }
        return data;
    }

   
 
}

class Json extends File{

     //Override :
     ReadFile(path){

        //path = > "User.json" 
        var rawdata = fileSystem.readFileSync(path , "utf8");
        let data = JSON.parse(rawdata);
        return data;
    }
 

}

class Xml extends File{

      //Override :
      ReadFile(path){
        
       //Read Xml File ...
    }
}


module.exports = {
    File : File,
    Csv : Csv,
    Json:Json,
    Xml:Xml
  }
 

