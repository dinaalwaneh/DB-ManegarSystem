

const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');
const parser = new xml2js.Parser();
let x;
 fs.readFile('file.xml', (err, data) => {
	parser.parseString(data, (err, result) => {
		x=util.inspect(result, false,null,true);
    SetJson(x)
    return result;
	});
});

function SetJson(jsonv){
  y=x;
  console.log(y)
}
