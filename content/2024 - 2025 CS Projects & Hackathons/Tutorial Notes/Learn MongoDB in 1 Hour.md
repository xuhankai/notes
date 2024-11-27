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
