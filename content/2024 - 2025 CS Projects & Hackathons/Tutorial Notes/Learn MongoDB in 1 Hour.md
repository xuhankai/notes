
### Intro
In MongoDB, data is stored in various formats (instead of rows and columns in SQL), Data stored in single documents.
- Stored as {field : value} pairs
A collection is a group of documents.
A database is a group of collections.

**Installation:** Search "install mongodb" -> https://www.mongodb.com/docs/manual/installation/ -> Install on Windows -> Follow steps.

Install mongodb shell: https://www.mongodb.com/docs/mongodb-shell/install/
-> https://www.mongodb.com/try/download/shell -> unzip -> open folder -> bin -> mongosh.exe, copy file location -> open environment variables -> advanced, environment variables -> system variables, new -> name, paste file location -> go back to location and open mongosh.exe. This is now the mongodb shell.
To establish connection: type ``mongosh``
To clear screen: type ``cls``
To exit: type ``exit``

To run shell in vscode terminal, install 'mongodb for vs code' extension.
Go to environment variables -> advanced, environment variables -> path, then add mongosh path to it.
After, just go to vscode and type ``mongosh`` in terminal to run the mongo shell in vscode.


### Databases

- Show all Databases: ``show dbs``
- Use a database (cd to a specific database): ``use <database name>``
- Use database that doesn't exist (create new database): ``use <new database name>`` (this won't show up in ``show dbs`` since it's empty)
- Create a collection: ``db.createCollection("<collection name>")
- Drop/delete a database: ``db.dropDatabase()``

### Insert
- Insert a document inside collection (if doesn't exist, new collection will be created) in our current database: ``db.<collection name>.insertOne({<field value pairs separated by comma>}) 
- Example: ``db.example.insertOne({ex1: 1, ex2: 2, ex3: 3})
- Return all documents inside collection: ``db.<collection name>.find()``
- Insert many documents at once: ``db.<collection name>.insertMany([{<docuement 1>},{<document 2>},{<document 3>}])``
- Note: ``id`` is automatically generated

### Datatypes
 - Strings (put quotes): ``db.<collection name>.insertOne({ex1: "example 1"})``
 - Integers: ``db.<collection name>.insertOne({ex1: 1})``
 - Doubles: ``db.<collection name>.insertOne({ex1: 0.1})``
 - Boolean: ``db.<collection name>.insertOne({ex1: true})``
 - Date object: ``db.<collection name>.insertOne({ex1: new Date("2024-11-26T00:00:00)})``
 - Null (no value): ``db.<collection name>.insertOne({ex1: null})``
 - Arrays (square brackets): ``db.<collection name>.insertOne({ex1: ["a","b","c"]})``
 - Nested document (curly braces): ``db.<collection name>.insertOne({ex1: {a:1,b:2,c:3}})``

### Sorting and Limiting
- Sort (rule based on designated field we want sorting to be based on)
	- Alphabetical/ascending values: ``db.<collection name>.find().sort({<field>:1})``
	- Reverse alphabetical/descending values: ``db.<collection name>.find().sort({<field>:-1})``
- Limit (returns the first 1 to n documents for given whole number n): ``db.<collection name>.find().limit(<n>)
- Combining sort and limit (find max element by field, sort descending then return first element): ``db.<collection name>.find().sort({<field>:-1}).limit(1)``

### Find
