import { Request, Response } from 'express';
import sql from 'mssql';
import connection from '../database';

class GamesController {

    public async list(req: Request, res: Response): Promise<void> {
        // await pool;
        try {
            // console.log(pool)
            // const request = pool.request(); // or: new sql.Request(pool1)
            // const result = request.query('select * from Student')
            // console.log(result)
            // return result;


            const pool = await connection.connect();
            const sqlQuery = "select * from Student"
            const request = new sql.Request(pool); // or: new sql.Request(pool1)
            const result= await request.query(sqlQuery);
            connection.close();
            return res.json(result);

            // return result;

        } catch (err) {
            console.error('SQL error', err);
        }
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        // const { id } = req.params;
        // const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        // console.log(games.length);
        // if (games.length > 0) {
        //     return res.json(games[0]);
        // }
        // res.status(404).json({ text: "The game doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        // const result = await pool.query('INSERT INTO games set ?', [req.body]);
        // res.json({ message: 'Game Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        // const { id } = req.params;
        // const oldGame = req.body;
        // await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
        // res.json({ message: "The game was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        // const { id } = req.params;
        // await pool.query('DELETE FROM games WHERE id = ?', [id]);
        // res.json({ message: "The game was deleted" });
    }
}

const gamesController = new GamesController;
export default gamesController;