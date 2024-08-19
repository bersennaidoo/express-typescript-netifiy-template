import { TemplateDB } from "../../libs/lowdbconfig/createlowdb";
import { User } from "../../models/user";
import { JSONFileSyncPreset } from "lowdb/node";

export class LowDBRepo {

    CreateLowDB() {
        const defaultData: TemplateDB =  {
                users: [],
        }

        const db = JSONFileSyncPreset<TemplateDB>("db.json", defaultData)
    
        return db
    }

    async create(user: User) {
        const db = this.CreateLowDB()
        const { users } = db.data
        user.id = String(users.length + 1)
        await db.update(({ users }) => users.push(user))

        return user
    }

    read(id: string | undefined) {
        const db = this.CreateLowDB()
        const { users } = db.data
        const user = users.find((u) => u.id === id)

        return user
    }
}
