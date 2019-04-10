// import mysql from 'promise-mysql';

import sql from 'mssql';



import keys from './keys';

console.log('asdasd')
const pool = new sql.ConnectionPool(keys.database).connect();

// pool.on('error', err => {
//     console.log(err)
// })

// pool.getConnection()
//     .then(connection => {
//         pool.releaseConnection(connection);
//         console.log('DB is Connected');
//     });

export default pool;
