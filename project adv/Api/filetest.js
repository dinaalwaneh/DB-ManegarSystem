
 const File=require('./File.js');


 //if(csv)
 /*
 var csvFile = new File.Csv();

 let data = csvFile.ReadFile("C:\\Users\\hp\\Desktop\\all\\data.csv");
 console.log(data);
 */


 //if(json)
 /*
 var jsonFile = new File.Json();

 let data = jsonFile.ReadFile("User.json");
 console.log(data);
 */

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

/*
const query=require('./d.js');

let get=new query.Read();
let dataBaseTables = get.getQuery(client);
console.log(dataBaseTables)
*/
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



/*  

async function main(f){ 
     
    const esult = await queryDb();
const csvarr = ReadFile();

     for(i=0;i<2;i++){

      const t= await queryDb2(esult[i])
      q=[];  
      for(j=0;j<t.length;j++){
        q.push(t[j].column_name) 
       
      
     }
   if(equals(q,csvarr[0])==true)  {
     f=esult[i];
    return(f) ;
    
   }
  
    }
   

}*/