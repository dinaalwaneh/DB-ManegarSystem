const QueryFactory = require("./QueryFactory")
 //const Connection_ = require("./Connection")
 const Query=require('./Query.js');
 const Constants = require("./Constants")

 
 class QueryController{

        GetInstance(queryType){
            let queryFactory_= new QueryFactory();
            let instance = queryFactory_.GetInstance(queryType)
            return instance;
        }


 }
 
 
 module.exports = QueryController

 
 
 
 