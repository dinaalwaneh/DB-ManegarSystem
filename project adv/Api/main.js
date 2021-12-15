
  const Connection = require('./Connection.js')
  const QueryController = require('./QueryController.js')
  const FileController = require('./FileController.js')
 
  const ps = require('prompt-sync');
 
  const prompt = ps()


  let connection_ = new Connection.Connection()
  let connectionDetails_ =  Connection.connectionDetails;
  connectionDetails_.hostName = prompt("enter the name of host : ");
  connectionDetails_.user = prompt("enter the name of user : ");
  connectionDetails_.passWord = prompt("enter the password : ");
  connectionDetails_.port = prompt("enter the port : ");
  const localDB=connection_.GetNewConnection(connectionDetails_,"localDB");
  localDB.connect()



  function autherizUser(userId,password){
    return new Promise( ( resolve, reject ) => {
      localDB.query("SELECT user_id FROM users WHERE user_id = '"+ userId +"' and password = '" +password+"'", (err, result)=>{
            if (err){
                return ( err );
            }
            resolve(result.rows);
            
        });
    })
  }

  function Implementation(client) {

        console.log("\n      List of Jobs :) ")
        console.log(" 1. make a query :) ")
        console.log(" 2. import file to database :) ")
        console.log(" 3. export data from database :) ")
        console.log("............................................ ")
        let choice = prompt("enter the number of job you want from list : ");
        switch(choice){

            case '1' :
              {
                console.log(" List of query :) ")
                console.log(" 1. write your query :) ")
                console.log(" 2. Get Table Data by add table name :) ")
                console.log(" 3. Get tables in database :)***********")
                console.log(" 4. Get culumns for spesfic table :)***********")
                console.log(" 5. Drop Table by table name :) ")
                let choice_ = prompt("enter the number of job you want from list  : ");
                let queryController= new QueryController();
                let queryType = prompt("enter the type of query you want ('Insert','Read','Write','Delete')  : ");
                let queryinstance =  queryController.GetInstance(queryType);
                switch(choice_){
                
                    case '1' :
                      {
                        async function GetQueryBefoerAother(){ 
                          try{
                            const result = await  queryinstance.GetDBTabels(client);
                            console.log(result)
                            queryinstance.GetQuery(client);
                          }
                          catch(e){
                            //catch error
                          }
                        }
                        GetQueryBefoerAother();
                        break;
                      }
                      case '2' :
                      {
                          async function GetQueryBefoerAother(){ 
                            try{
                              const result = await queryinstance.GetDBTabels(client);
                              console.log(result)
                              queryinstance.GetTableData(client);
                            }
                            catch(e){
                              //catch error
                            }
                          }
                          GetQueryBefoerAother();
                          break;
                      }
                      case '3' :
                      {
                          async function GetQueryBefoerAother(){ 
                            try{
                              const result = await queryinstance.GetDBTabels(client);
                              console.log(result)
                            }
                            catch(e){
                              //catch error
                            }
                          }
                          GetQueryBefoerAother();
                          break;
                      }
                      case '4' :
                        {
                            async function GetQueryBefoerAother(){ 
                              try{
                                const result = await queryinstance.GetDBTabels(client);
                                console.log(result)
                                const tableNname = prompt("enter name of table you want to display its columns  : ");
                                const columnsResult = await queryinstance.GetDBColumns(tableNname,client); 
                                console.log(columnsResult)
                              }
                              catch(e){
                                //catch error
                              }
                            }
                            GetQueryBefoerAother();
                            break;
                        }
                        case '5' :
                        {
                        
                            async function GetQueryBefoerAother(){ 
                              try{
                                const result = await queryinstance.GetDBTabels(client);
                                console.log(result)
                                const tableNname = prompt("enter name of table you want to display its columns  : ");
                                await queryinstance.DeleteTable(tableNname,client); 
                              
                              }
                              catch(e){
                                //catch error
                              }
                            }
                            GetQueryBefoerAother();
                            break;
                        }
                }
                break;
              }
              case '2':
                  {


                  let fileType = prompt("enter the type of file you want import to Database  : ");

                  const fileController_ = new FileController();

                  fileController_.ImportFile(fileType,client);

                    break;
                  }



      }
 
  }
  
 
//main here 

  async function Main(connectionDetails_){ 
    try{
        console.log("Sign in :")
        usrId =prompt("enter your id  : ");
        passWord =prompt("enter your password  : ");
        const result =await autherizUser(usrId,passWord);
        

        if (result.length == 1){

          console.log("welcome in your manegar database : ")
          database = prompt("enter the name of DB : ");
         
          // Instantiate User
          connection_.ConnectionProfile(connectionDetails_,database,localDB)
          
          const client=connection_.GetNewConnection(connectionDetails_,database);
          client.connect();
        

           await Implementation(client)
        }
        else if(result.length ==0){
          console.log("sign_up plz")
          return 0;
        }

    }
    catch(e){
      console.log("something is wrong")
    }
  }

  Main(connectionDetails_)