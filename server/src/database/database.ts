
import sql from 'mssql';
import keys from './keys';

console.log('initialize connections')
const connection = new sql.ConnectionPool(keys.database)

export const executeSql = (query: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        connection.connect()
            .then(pool => {
                const request = new sql.Request(pool);
                return request.query(query);
            })
            .then(data => {
                connection.close();
                resolve(data);
            })
            .catch(err => {
                connection.close();
                reject(err);
            })
    });
}


