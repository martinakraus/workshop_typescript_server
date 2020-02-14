import {Request, Response} from 'express';

export class HealthController {
    public get(req: Request, res: Response): void {
        res.status(200).send('I am alive');
    }
}
