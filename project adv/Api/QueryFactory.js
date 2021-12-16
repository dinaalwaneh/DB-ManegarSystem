

const Constants = require("./Constants")
const Query = require("./Query")
class QueryFactory {

        
        CreateQuery(queryType){
            const log4js = require('log4js');
            // Create the logger
            const logger = log4js.getLogger();
            let queryType_= Constants.QueryType;
            if(queryType==queryType_.READ){
                const read = new Query.Read();
                logger.level = 'info';
                logger.info('query viewed');
                return read ;
            }
            if(queryType==queryType_.WRITE){
                const write = new Query.Write();
                logger.level = 'info';
                logger.info('query written');
                return write ;
            }
            if(queryType==queryType_.INSERT){
                const insert = new Query.Insert();
                logger.level = 'info';
                logger.info('query iserted');
                return insert ;
            }
            if(queryType==queryType_.DELETE){
                const delete_ = new Query.Delete();
                logger.level = 'info';
                logger.info('query deleted');
                return delete_ ;
            }
            return null;
        }
}
module.exports = QueryFactory