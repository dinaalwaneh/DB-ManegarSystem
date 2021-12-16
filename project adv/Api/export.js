const Pool = require("pg").Pool;
 const createCsvWriter = require("csv-writer").createObjectCsvWriter;
 

 const log4js = require('log4js');
// Create the logger
const logger = log4js.getLogger(); 


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
  logger.level = 'Error';
  logger.Error('connection failed');
   if (err) throw err;
 
   client.query("SELECT * FROM customers", (err, result) => {
     done();
     if (err) {
      logger.level = 'error';
      logger.error('query syntext error');
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
         .then( () =>
         logger.level = 'info',
         logger.info('Successfully!'),
           console.log("csvWriter.csv successfully!")
         );
     }
   });
 });