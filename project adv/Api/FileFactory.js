


const Constants = require("./Constants")
const File = require("./File")
class FileFactory {

        
        CreateFile(fileType){
            let fileType_= Constants.FileType;
            if(fileType==fileType_.CSV){
                const csv = new File.Csv();
                return csv ;
            }
            if(fileType==fileType_.JSON){
                const json_ = new File.Json();
                return json_ ;
            }
            if(fileType==fileType_.XML){
                const xml = new File.Xml();
                return xml ;
            }
            return null;

        }


}
module.exports = FileFactory
 
 