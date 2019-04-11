import { Request, Response } from 'express';
import sql from 'mssql';
import { executeSql } from '../database/database';

class GamesController {
    public async list(req: Request, res: Response): Promise<any> {
        try {
            const query = "SELECT * FROM Games";
            const result = await executeSql(query);
            res.json(result.recordset);
        } catch (err) {
            res.status(404).json({ text: "No games" });
        }
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const query = `SELECT * FROM Games WHERE id = ${id}`;
            const result = await executeSql(query);
            res.json(result);
        } catch (err) {
            res.status(404).json({ text: "The game doesn't exits" });
        }

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