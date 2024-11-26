
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

