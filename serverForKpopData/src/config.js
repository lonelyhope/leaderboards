const path = require('path');

module.exports = {
 port:8082,
 db: {
  database: process.env.DB_NAME || 'kpopdata',
  user: process.env.DB_USER || 'kpopdata', 
  password:process.env.DB_PASS || 'kpopdata',
  options: {
   dialect: process.env.DIALECT || 'sqlite',
   host: process.env.HOST || 'localhost',
   storage: path.resolve(__dirname, '../__kpopData.sqlite')
  }
 }
//    ,
// authentication: {
//  jwtSecret: 'secret' || process.env.JWT_SECRET
// }

}
