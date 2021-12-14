const Pool = require("pg").Pool;
 const createCsvWriter = require("csv-writer").createObjectCsvWriter;
 
 // Create  connection to the database
 const pool = new Pool({
   host: "localhost",
   user: "postgres",
   password: "dina14120021412002",
   database: "school",
   port: 5432
 });
 // open  PostgreSQL connection
 pool.connect((err, client, done) => {
   if (err) throw err;
 
   client.query("SELECT * FROM table_name", (err, result) => {
     done();
     if (err) {
       console.log(err.stack);
     } else {
       const jsonData = JSON.parse(JSON.stringify(result.rows));
       console.log("jsonData", jsonData);
 
       const csvWriter = createCsvWriter({
         path: "csvWriter.csv",
         header: [
           { id: "id", title: "id"}  ,
           { id: "name", title: "name" },
           { id: "city", title: "city" }
         
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