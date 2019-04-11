const sql = require('mssql')


const config = {
    server: 'TULSA',
    user: 'tut',
    password: '1',
    database: 'tutorial',
    port: 1433,
    options: {
        encrypt: false
    }
}

const connection = new sql.ConnectionPool(config)


const selectStudents = async () => {
    const pool = await connection.connect();
    const sqlQuery = "select * from Student"
    const request = new sql.Request(pool); // or: new sql.Request(pool1)
    const result= await request.query(sqlQuery);
    console.log(result);
}

setTimeout(() => {
    selectStudents();
}, 1000)

// connectToDataBase();

// console.log(pool.)


// async function messageHandler() {
//     await pool; // ensures that the pool has been created
//     try {
//         // console.log(pool)
//         const request = new sql.Request(pool);


//         request.query('select * Student', (err, result) => {
//             // ... error checks

//             console.log(result) // return 1

//             // ...
//         })

//     	// const result = await request.query('select * from Country')
//         // console.log(result)
//         // process.exit();





//     } catch (err) {
//         console.error('SQL error', err);
//     }
// }

// messageHandler()


// new sql.ConnectionPool(config).connect()
//     .then(pool => {
//         return pool.query`select * from Student`
//     }).then(result => {
//         console.log(result)
//         process.exit()
//     }).catch(err => {
//         // ... error checks
//     })