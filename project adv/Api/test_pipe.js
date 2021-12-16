const db=require('app');

var fs = require('fs');
var csv2sql = require('./csv2sql-stream');
var outstream = process.stdout;
csv2sql.transform("DOGS",fs.createReadStream('./csvWriter.csv')).pipe(process.stdout);

