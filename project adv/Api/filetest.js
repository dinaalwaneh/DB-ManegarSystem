
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
 
const client=userr.getNewConnection(hostName,user,port,passWord,dBName);
client.connect();

/*
const query=require('./d.js');

let get=new query.Read();
let dataBaseTables = get.getQuery(client);
console.log(dataBaseTables)
*/
const query=require('./d.js');
let fileType = prompt("enter the type of file you want to import : ");
if(fileType=='Csv'){

    const fi=new File.Csv()
    let data =fi.ReadFile("C:\\Users\\hp\\Desktop\\all\\data.csv")
    
    fi.SchemaIsfounded(client,data).then(tableName => {
        if(tableName!=null){
            
            fi.ExportData(data,tableName.table_name,client);
        }else{
            const insert = new query.Insert();
            schema="(";
            for(var i=0;i<data[0].length;i++){
                if(i<data[0].length-1){
                    schema+=data[0][i]+" varchar(255),"
                    
            }
            else{
                    schema+=data[0][i]+" varchar(255))"
            }
            
            }
            tableName =insert.CreateTable(schema,client);
            fi.ExportData(data,tableName,client);
        }
    
    }).catch(err => {
    console.log(err);
    })

}else if(fileType = "Json"){
    const fi=new File.Json()
    let data =fi.ReadFile("User.json")
    console.log(data)

    jsonHeader=[]
    for (let key in data) {
        jsonHeader.push(key);
    }

fi.SchemaIsfounded(client,jsonHeader).then(tableName => {
        if(tableName!=null){
            
            console.log(tableName)
        }else{
        console.log(0)
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