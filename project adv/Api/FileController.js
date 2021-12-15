
 const FileFactory = require("./FileFactory")
 //const Connection_ = require("./Connection")
 const Query=require('./Query.js');
 const Constants = require("./Constants")


 class FileController{

        GetInstance(fileType){
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

 
 
 
 
 
 
 
 
 
 
 /*
 
 const File=require('./File.js');



 const ps = require('prompt-sync');
 //get some user input
 const prompt = ps()
 
 let dBName = "school";//prompt("enter the name of DB : ");
 let hostName = "localhost";//prompt("enter the name of host : ");
 let user ="postgres";// prompt("enter the name of user : ");
 let passWord ="dina14120021412002";// prompt("enter the password : ");
 let port = 5432; //prompt("enter the port : ");

const Connection = require('./Connection.js')

 // Instantiate User:
 let userr = new Connection()

const client=userr.GetNewConnection(hostName,user,port,passWord,dBName);
client.connect();

const query=require('./Query.js');
let fileType = prompt("enter the type of file you want to import : ");
const insert = new query.Insert();

if(fileType=='Csv'){

    const csvfile=new File.Csv()
    let data =fi.ReadFile("C:\\Users\\hp\\Desktop\\all\\data.csv")
    csvfile.SchemaIsfounded(client,data[0]).then(tableName => {
        if(tableName!=null){
            data.shift() 
            data.pop() 
            csvfile.ImportData(data,tableName.table_name,client);
        }else{

            schema = csvfile.CreateSchema(jsonHeader);
            tableName =insert.CreateTable(schema,client);
            data.shift() 
            data.pop() 
            csvfile.ImportData(data,tableName,client);
        }
    
    }).catch(err => {
        console.log(err);
    })

}else if(fileType = "Json"){
    const jsonFile=new File.Json()
    let data =jsonFile.ReadFile("User.json")
     

    jsonHeader=[]
    for (let key in data[0]) {
        jsonHeader.push(key);
    }

    row_=[]
    rows_=[]
    for(i=0;i<data.length;i++){
    for(j=0;j<jsonHeader.length;j++){
        row_.push(data[i][jsonHeader[j]]);
    }

    rows_.push(row_)
    row_=[];       
    }



    jsonFile.SchemaIsfounded(client,jsonHeader).then(tableName_ => {

        if(tableName_!=null){

            jsonFile.ImportData(rows_,tableName_.table_name,client);
            
        }else{

            schema = jsonFile.CreateSchema(jsonHeader);
            tableName_ =insert.CreateTable(schema,client);
            jsonFile.ImportData(rows_,tableName_,client);

            
        }


    }).catch(err => {
    console.log(err);
    })

}


*/