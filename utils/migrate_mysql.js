const db = require('../mysql');

async function migrateTableMysql() {

    try {

        console.log(' migrate Directors...');

        const createTableQuery = `
        CREATE TABLE IF NOT EXISTS \`Directors\` (  
            \`director_id\` int NOT NULL AUTO_INCREMENT,  
            \`name\` varchar(255) NOT NULL,  
            \`birthdate\` date,  
            \`nationality\` varchar(100),  
            PRIMARY KEY (\`director_id\`)  
        ) ENGINE=InnoDB  
            DEFAULT CHARSET=utf8mb4  
            COLLATE=utf8mb4_0900_ai_ci;
        `;
        // var migrateString1 = "CREATE TABLE `Directors` (  `director_id` int NOT NULL AUTO_INCREMENT,  `name` varchar(255) NOT NULL, ";
        // migrateString1 += " `birthdate` date, `nationality` varchar(100),  PRIMARY KEY (`director_id`) ) ENGINE InnoDB,  CHARSET utf8mb4,  COLLATE utf8mb4_0900_ai_ci;";
        // console.log(migrateString1);
        
        const [result] = await db.execute(createTableQuery);
        res.json(result);

    } catch (error) {
      console.error('Seed error:', error);
      throw error;
    } finally {
      await session.close();
    }
  }
  module.exports = {
    migrateTableMysql,
  };
  