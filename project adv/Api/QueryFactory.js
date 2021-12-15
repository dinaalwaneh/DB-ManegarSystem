
const Constants = require("./Constants")
const Query = require("./Query")
class QueryFactory {

        
        CreateQuery(queryType){
            let queryType_= Constants.QueryType;
            if(queryType==queryType_.READ){
                const read = new Query.Read();
                return read ;
            }
            if(queryType==queryType_.WRITE){
                const write = new Query.Write();
                return write ;
            }
            if(queryType==queryType_.INSERT){
                const insert = new Query.Insert();
                return insert ;
            }
            if(queryType==queryType_.DELETE){
                const delete_ = new Query.Delete();
                return delete_ ;
            }
            return null;

        }


}
module.exports = QueryFactory