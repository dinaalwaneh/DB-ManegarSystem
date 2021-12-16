
const Pool = require("pg").Pool;
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
// Create a connection to the database
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "rahaf2002",
  database: "school",
  port: 3000
});
// open the PostgreSQL connection
pool.connect((err, client, done) => {
  if (err) throw err;
  client.query("SELECT * FROM TableName", (err, res) => {
    done();
    if (err) {
      console.log(err.stack);
    } else {
      const jsonData = JSON.parse(JSON.stringify(res.rows));
      console.log("jsonData", jsonData);
      const csvWriter = createCsvWriter({
        path: "csvWriter.csv",
        header: [
          { id: "id", title: "ID" },
          { id: "name", title: "NAME"}
        ]
      });
      csvWriter
        .writeRecords(jsonData)
        .then(() =>
          console.log("Write to csvWriter.csv successfully!")
        );
    }
  });
});


var csv = require('csv');
var squel = require('squel');
module.exports.transform = function(tableName, instream){
	var delimiter = ','
	var header;
	return csv()
	.from.stream(instream, { delimiter: delimiter, escape: '"' })
	.transform( function(row){
	    if (!header) { 
            //first row assumed to be header
		    header=row;
		    return null;
		}
		//all other rows
		var sqlInsert = squel.insert().into(tableName);
		for (var i = 0; i < row.length; i++){
			if (row[i] == undefined) row[i] = "";
			sqlInsert.set(header[i], esc(row[i]));
		}
	    return sqlInsert.toString() + ";\n";
	})
}
function esc(str){
	if (str.length == 0)
     return null;
	str = str.replace(/'/g, "''");
  return(console.log("ggggg",str))
}
