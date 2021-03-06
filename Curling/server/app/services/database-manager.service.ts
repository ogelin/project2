let client = require('mongodb').MongoClient;
import { Player } from '../classes/player';
import { ScoreDB } from '../classes/scoreDB';
let url = 'mongodb://test:test@ds133340.mlab.com:33340/db_curling';

module DatabaseManagerService {
    export class DatabaseManager {

        private static instance: DatabaseManager;

        static getInstance(): DatabaseManager {
            if (DatabaseManager.instance === undefined) {
                DatabaseManager.instance = new DatabaseManager();
            }
            return DatabaseManager.instance;
        }

        public connectPlayer(username: string) {
            return client.connect(url)
                .then(
                // Promesse tenue
                //Sprint collection: PLAYERS_SPRINT
                (db: any) => db.collection('PLAYERS').insertOne({
                    username: username,
                })
                    .then(() => db.close()),
                // Promesse rompue
                (err: any) => { throw "erreur"; });
        }

        public findPlayer(username: string): Promise<string> {
            return client.connect(url)
                .then(
                // Promesse tenue
                //Sprint collection: PLAYERS_SPRINT
                (db: any) => db.collection('PLAYERS').findOne(
                    { username: username }
                )
                    .then(
                    (res: any) => {
                        db.close();
                        if (res !== null) {
                            return Promise.resolve(res.username);
                        }
                        else {
                            return undefined;
                        }
                    }),
                // Promesse rompue
                (err: any) => { throw "erreur"; });

        }

        // delete the user from the DB when disconnect
        public disconnectPlayer(username: string): Promise<Player> {
            return client.connect(url)
                .then(
                // Promesse tenue
                //Sprint collection: PLAYERS_SPRINT
                (db: any) => db.collection('PLAYERS').deleteOne(
                    { username: username },
                )
                    .then(
                    (res: any) => {
                        db.close();
                    }),
                // Promesse rompue
                (err: any) => { throw "erreur"; });

        }

        public getArrayBestScore(level: string): Promise<Array<string>> {
            return client.connect(url)
                .then(
                // Promesse tenue
                // Sprin collection: BEST_SCORES_SPRINT
                (db: any) => db.collection('BEST_SCORES').findOne(
                    { "level": level.toLowerCase() }
                )
                    .then(
                    (res: any) => {
                        db.close();
                        if (res !== null) {
                            return Promise.resolve(res.bestScore);
                        }
                        else {
                            return undefined;
                        }
                    }),
                // Promesse rompue
                (err: any) => { throw "erreur"; });
        }


        public findOneAndUpdate(scoreBD: ScoreDB, level: string): Promise<any> {
            return client.connect(url)
                .then(
                // Promesse tenue
                // Sprin collection: BEST_SCORES_SPRINT
                (db: any) => db.collection('BEST_SCORES').findOneAndUpdate(
                    { "level": level.toLowerCase(), "bestScore.id": scoreBD.id },
                    {
                        $set: {
                            "bestScore.$.scoreHuman": scoreBD.scoreHuman,
                            "bestScore.$.scoreCPU": scoreBD.scoreCPU, "bestScore.$.username": scoreBD.usernamePlayer
                        }
                    },
                    { newReturnDocument: true }
                )
                    .then(
                    (res: any) => {
                        db.close();
                        return Promise.resolve(res.lastErrorObject.updatedExisting);
                    }),

                // Promesse rompue
                (err: any) => { throw "erreur"; });
        }
    }
}

export = DatabaseManagerService;
