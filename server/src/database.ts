
import sql from 'mssql';
import keys from './keys';

const connection = new sql.ConnectionPool(keys.database)

export default connection;
