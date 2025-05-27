//My SQL
brew services stop mysql
brew services start mysql
//Neo4j
brew services start neo4j
//redis
brew services restart redis
//mongoDB
brew services start mongodb-community@6.0

//run app
npm run dev

http://localhost:3000
