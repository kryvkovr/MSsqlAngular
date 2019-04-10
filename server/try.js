const sql = require('mssql')
 
// async/await style:
const pool = new sql.ConnectionPool({
    server: 'DESKTOP-SB9SU5F',
    user: 'kryvkovr',
    password: '1',
    database: 'master',
    port:1433,
    options:{
        encrypt:false
    }
}).connect();
 

async function messageHandler() {
    await pool; // ensures that the pool has been created
    try {
        console.log(pool)
    	const request = new pool.request(); // or: new sql.Request(pool1)
    	const result = request.query('select 1 as number')
    	console.dir(result)
    	return result;
    } catch (err) {
        console.error('SQL error', err);
    }
}

messageHandler()