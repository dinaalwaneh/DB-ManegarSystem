# AdvProject
This system is  Database manager System , it’s a web Site application . 

-     This system will access make connection on  DB and making access to it’s tables , modify it's tables , change the database connection at runtime , upload (XML , CSV , JSON ,       SQL ) file and insert file data in DB table ,take a snapshot ,  revert it and export data and schema .  



### MAIN FILE 
![image](https://user-images.githubusercontent.com/64756218/146205671-327a1621-3b8c-4ede-8ae4-24698c10e0b0.png)

we make exports for files (connection controller , query controller , file controller )



![image](https://user-images.githubusercontent.com/64756218/146206094-fbfadd83-a7bd-46d2-9406-bc0ce28a45f0.png)


![image](https://user-images.githubusercontent.com/64756218/146206134-c4c234b9-f4ed-452f-a4f0-df5f8f2a5031.png)


![image](https://user-images.githubusercontent.com/64756218/146206209-3f44bcf6-f0b6-4592-8fce-d1117268f858.png)

### in the connection 

it has connection details (object ) 
and connection class 

i need call the connection details object fron connection.js


![image](https://user-images.githubusercontent.com/64756218/146209453-1c299432-32f8-46dc-84c1-b95d3320e8bf.png)


and this gonna be object 



this to write and maje som input 

![image](https://user-images.githubusercontent.com/64756218/146213984-167d873a-ec82-4d70-8f2f-419c877c32ea.png)


we naeed make connection in 2 databases so we make it non static 

![image](https://user-images.githubusercontent.com/64756218/146215232-a5588a18-a3f9-4c3a-af7c-27718bf50ca8.png)



we have local database to store the data and user data 

![image](https://user-images.githubusercontent.com/64756218/146215596-3cab2ee1-41b7-4fa7-ac80-a6ba1dd7dd61.png)



to make import for connection class and its gonna be object for the connection class 

![image](https://user-images.githubusercontent.com/64756218/146215736-ab297ef7-9cfb-40e5-85ab-29fcb6ea0485.png)

لانه الكنكشن في فايل اخر عملنا اكسبورت كما وضح في الاعلى وهنا قمنا بعمل الامبورت للكلاس 


now the local database for programm 
![image](https://user-images.githubusercontent.com/64756218/146216344-1e30de6b-29f6-4506-8a05-5d40eae2555c.png)

thisis for the same postgressql 

![image](https://user-images.githubusercontent.com/64756218/146216507-8e9964d7-41c4-4bec-970d-d0b4f88c988c.png)

here making connection on database the user need to connection with it 
by entar the data he need 
///








### NOW Instantiate User:

![image](https://user-images.githubusercontent.com/64756218/146219786-2002c719-9559-4d63-a619-448d59fe0f0c.png)

