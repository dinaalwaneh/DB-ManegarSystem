/*const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    port : 5432,
    user: "postgres",
    password: "sana123456omareid",
    database: "tryPostgres"
})

client.connect();

let query = `Select * from "tablename"`;

client.query(query, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message)
    }
    client.end;
})

*/


let header=[]
const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');
const parser = new xml2js.Parser();
function readXml(){
    let fileData  
fs.readFile('XmlFile.xml', (err, data) => {
	parser.parseString(data, (err, result) => {
		fileData = util.inspect(result, false, null, true);
	});
 
    
    return console.log(fileData) ; 
    
})}; 

  

for(let key in readXml()  ){
    header.push(key) ; 
}

console.log("header = ",header); 




