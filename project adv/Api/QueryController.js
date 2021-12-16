const QueryFactory = require("./QueryFactory")
 //const Connection_ = require("./Connection")
 const Query=require('./Query.js');
 const Constants = require("./Constants")

 
 class QueryController{

        GetInstance(queryType){
            const log4js = require('log4js');
            // Create the logger
            const logger = log4js.getLogger();
            logger.level = 'debug';
            logger.debug('query  controller enter!');
            let queryFactory_= new QueryFactory();
            let instance = queryFactory_.CreateQuery(queryType)
            logger.level = 'info';
            logger.info('query return');
            return instance;
        }


 }
 
 
 module.exports = QueryController

 
 
 
 