import express, { Request, Response } from "express"
import { User } from "../../models/user"
import { LowDBRepo } from "../../services/repos/lowdb_repo"

export class UserHandler {

    create(req: Request, res: Response) {
        const user = req.body as User
        const lowdbRepo = new LowDBRepo()
        lowdbRepo.create(user)
        res.send(user)
    }

    read(req: Request, res: Response) {
        const lowdbRepo = new LowDBRepo()
        const id: string | undefined = req.params.id
        const user = lowdbRepo.read(id)

        res.send(user)
    }
}

