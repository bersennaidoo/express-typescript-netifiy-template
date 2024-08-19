import express from "express"
import { User } from "../../models/user"
import { JSONFileSyncPreset } from "lowdb/node"


export type TemplateDB = {
        users: User[],
}

export const CreateLowDB = (ldb: TemplateDB) => {

    const defaultData: TemplateDB = ldb
    const db = JSONFileSyncPreset<TemplateDB>("db.json", defaultData)

    return db
}

