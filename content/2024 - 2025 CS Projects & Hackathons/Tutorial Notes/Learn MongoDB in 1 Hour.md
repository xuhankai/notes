Brocode
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
- Return all documents inside collection: ``db.<collection name>.find()``
- Basics: ``.find({query},{projection})``
- Find some documents by querying specific properties
	- Return all documents with id 1: ``db.<collection name>.find({id:1})
	- Return all documents with id 1 and name user1: ``db.<collection name>.find({id:1, name: user1})
- Projection: looking for specific fields in document to display 
	- Return all document, but only print their name: ``db.<collection name>.find({},{name:true})``
	- Don't print id, print name and value: ``db.<collection name>.find({},{id:false, name:true, value: true})``
- All together (return all names of document whose value is 1): ``db.<collection name>.find({value: 1},{name:true})``

### Update
- Update one document: ``db.<collection name>.updateOne(filter, update)``
	- Filter is selection criteria, update first document that has id of 1, by setting their name to user1: ``db.<collection name>({id: 1}, {$set: {name:"user1"} })``
	- Can update by ``_id``, which is unique to every document: ``db.<collection name>({_id: ObjectId(<unique id>)}, {$set: {name:"user1"} })``
	- Unset/remove a field (removes the name field): ``db.<collection name>.updateOne({_id: ObjectId(<unique id>)}, {$unset: {name:""}})``
- Update many documents: 
	- Set every documents "value" to 1 (if they don't have "value" field, it will be created): ``db.<collection name>.updateMany({}, {$set:{value:1}})``
	- If any document doesn't have a "value" field, create it and set it to 1: ``db.<collection name>.updateMany({value:{$exists:false}}, {$set:{value: 1}})``
### Delete
- Delete one document: ``db.<collection>.deleteOne({<filter>})
	- Delete first document with value 1: ``db.<collection>.deleteOne({value:1})``
- Delete many documents: 
	- Delete anyone with value 1: ``db.<collection>.deleteMany({value:1})``
	- Delete anyone missing a "value" field: ``db.<collection>.deleteMany({value:{$exists:false}})``

### Comparison Operators
Denotes as ``$``
- Not equal operator (find all documents whose value is NOT 1): ``db.<collection name>.find({value:{$ne:1}})``
- Less than operator (find all documents whose value is less than 1): ``db.<collection name>.find({value:{$lt:1}})``
- Less than or equal to 1: ``db.<collection name>.find({value:{$lte:1}})``
- Greater than 1:``db.<collection name>.find({value:{$gt:1}})`` 
- Greater than or equal to 1: ``db.<collection name>.find({value:{$gte:1}})``
- Combination (greater or equal to 3, less than or equal to 4): ``db.<collection name>.find({value:{$gte:3, $lte:4}})``
- In operator (find all documents whose name is in the given array, so "user1" or "user2"): ``db.<collection name>.find({name:{$in:["user1", "user2"]}})``
- Not In operator (find all documents whose name is not in the given array): ``db.<collection name>.find({name:{$nin:["user1", "user2"]}})``

### Logical Operator
- AND operator, two condition array (find all documents whose name is "user1" and value is less than 1): ``db.<collection name>.find({$and: [{name: "user1"}, {value:{$lt:1}}]})`` 
- OR operator: ``db.<collection name>.find({$or: [{name: "user1"}, {value:{$lt:1}}]})`` 
- NOR operator, opposite of AND, both conditions must be false ( all documents whose name is not "user1" and value is not less than 1): ``db.<collection name>.find({$nor: [{name: "user1"}, {value:{$lt:1}}]})`` 
- NOT operator (find all documents whose value is not greater than 1, so lte 1 ==or the parameter is null==, which you wouldn't find if you just did lte directly):  ``db.<collection name>.find({value:{$not:{$gt:1}}})``

### Indexes
Applies faster lookups/query to a field (such as implementing binary search tree rather than linear search), but takes up more memory, and slows down updates.
Use indexes when doing lots of searching, but not updating.
- Display search execution stats: ``db.<collection name>.find({})
``db.<collection name>.find({<filter>}).explain("executionStats)``
- Apply index to field (name, value, etc): 
	- Ascending order (1): ``db.<collection name>.createIndex({<field name>:1})``
	- Descending order (-1): ``db.<collection name>.createIndex({<field name>:-1})``
	- cmd will then print the name of this index after creation
- Print all indexes: ``db.<collection name>.getIndexes()``
- Delete an index: ``db.<collection name>.dropIndex("<name of index>")``
### Collections
- Create collection: ``db.createCollection("<collection name")``
- Set max size of collection (max size of 100 bytes, max documents of 10): ``db.createCollection("<collection name", {capped:true, size:100, max:10})``
- Drop collection: ``db.<collection name>.drop()``

