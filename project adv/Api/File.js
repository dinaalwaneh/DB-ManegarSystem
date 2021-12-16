
const fileSystem = require("fs");
const query=require('./Query.js');


const log4js = require('log4js');
// Create the logger
const logger = log4js.getLogger();

class File{


    constructor(){
        logger.level = 'info';
        logger.info('Instance Success!');
        console.log("Instance has done sucssfully :")
    }
    
    ReadFile(path){
        logger.level = 'info';
        logger.info('Reading Success!');
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
        logger.level = 'info';
        logger.info('return the values');
        return values;
    }

    ImportData(data,tableName,client){

        for (var i = 0; i < data.length; i++) {
            var values=this.GetValues(data,i)
            var table = tableName ;
            const insert = new query.Insert();
            insert.InertFilesData(values,table,client)
        }
        

    }

    async SchemaIsfounded(client,data,fileType){
        let result;
        let get=new query.Read();
        const dataBaseTables =await get.GetDBTabels(client);
        
        for(var i=0;i<dataBaseTables.length;i++){

            const columnObject= await get.GetDBColumns(dataBaseTables[i].table_name,client);
            var columnArray = [];  
            for(var j=0;j<columnObject.length;j++){
                columnArray.push(columnObject[j].column_name)   
            }
 
            if(JSON.stringify(columnArray) === JSON.stringify(data))  {
                result=dataBaseTables[i];
          
                logger.level = 'info';
                logger.info('schema has found');
                    return(result.table_name) ;
    
                
               
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
        logger.level = 'info';
        logger.info('create schema');
        return schema;

    }  

}


class Csv extends File{

    static instance;
	
	constructor() {
		super()
	}
	
    GetInsatnce() {
		if(instance == null) {
			instance = new Csv();
		}
		return instance;
	}

    //Override :
    ReadFile(path){

        //path = > "C:\\Users\\hp\\Desktop\\all\\data.csv" .
        var data = fileSystem.readFileSync(path , "utf8");
        
        // STRING TO ARRAY
        data = data.split("\r\n"); // SPLIT ROWS
        for (let i in data) { // SPLIT COLUMNS
             data[i] = data[i].split(",");
        }
        logger.level = 'info';
        logger.info('return the csv file');
        return data;
    }

   
 
}

class Json extends File{

     //Override :
     ReadFile(path){

        //path = > "User.json" 
        var rawdata = fileSystem.readFileSync(path , "utf8");
        let data = JSON.parse(rawdata);
        logger.level = 'info';
        logger.info('return the json file');
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
 

