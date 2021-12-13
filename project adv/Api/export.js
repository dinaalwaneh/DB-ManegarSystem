const Pool = require("pg").Pool;
 const createCsvWriter = require("csv-writer").createObjectCsvWriter;
 
 // Create  connection to the database
 const pool = new Pool({
   host: "localhost",
   user: "postgres",
   password: "rahaf2002",
   database: "school",
   port: 3000
 });
 // open  PostgreSQL connection
 pool.connect((err, client, done) => {
   if (err) throw err;
 
   client.query("SELECT * FROM TableName", (err, result) => {
     done();
     if (err) {
       console.log(err.stack);
     } else {
       const jsonData = JSON.parse(JSON.stringify(result.rows));
       console.log("jsonData", jsonData);
 
       const csvWriter = createCsvWriter({
         path: "csvWriter.csv",
         header: [
           { id: "id", title: "id" },
           { id: "name", title: "name" }
         ]
       });
       csvWriter
         .writeRecords(jsonData)
         .then(() =>
           console.log("csvWriter.csv successfully!")
         );
     }
   });
 });