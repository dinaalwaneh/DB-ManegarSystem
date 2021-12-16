
 const FileFactory = require("./FileFactory")
 //const Connection_ = require("./Connection")
 const Query=require('./Query.js');
 const Constants = require("./Constants")

 class FileController{
     
        GetInstance(fileType){
            const log4js = require('log4js');
            // Create the logger
            const logger = log4js.getLogger();
            logger.level = 'debug';
           logger.debug('file controller enter!');
            let fileFactory_= new FileFactory();
            let instance = fileFactory_.CreateFile(fileType)
            return instance;
        }

        ImportFile(fileType,client){
            const insert = new Query.Insert();
            let fileType__= Constants.FileType;
    
            if(fileType==fileType__.CSV){

                const csvFile=this.GetInstance(fileType)
                let data =csvFile.ReadFile("C:\\Users\\hp\\Desktop\\all\\data.csv")
                csvFile.SchemaIsfounded(client,data[0],fileType).then(tableName => {
                    console.log(tableName)
                    if(tableName!=null){
                        data.shift() 
                        data.pop() 
                        csvFile.ImportData(data,tableName,client);
                    }else{
                        let schema = csvFile.CreateSchema(data[0]);
                        console.log(schema)
                        tableName =insert.CreateTable(schema,client);
                        data.shift() 
                        data.pop() 
                        csvFile.ImportData(data,tableName,client);
                    }
                
                }).catch(err => {
                    console.log(err);
                })

            }else if(fileType = fileType__.JSON){
                  
                const jsonFile=this.GetInstance("Json")
                let data =jsonFile.ReadFile("User.json")
                 
                let jsonHeader=[]
                for (let key in data[0]) {
                    jsonHeader.push(key);
                }
            
                let row_=[]
                let rows_=[]
                for(var i=0;i<data.length;i++){
                for(var j=0;j<jsonHeader.length;j++){
                    row_.push(data[i][jsonHeader[j]]);
                }
            
                rows_.push(row_)
                row_=[];       
                }

                jsonFile.SchemaIsfounded(client,jsonHeader,fileType).then(tableName_ => {
                   console.log(tableName_)
                    if(tableName_!=null){
            
                        jsonFile.ImportData(rows_,tableName_,client);
                        
                    }else{
            
                        let schema = jsonFile.CreateSchema(jsonHeader);
                        let tableName_ =insert.CreateTable(schema,client);
                        jsonFile.ImportData(rows_,tableName_,client);
            
                        
                    }
            
                }).catch(err => {
                console.log(err);
                })

            }

        }



 }
 
 
 module.exports = FileController

 
 
 
 
 
 
 
 
 