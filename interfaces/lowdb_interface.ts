import { User } from "../models/user"

export interface ILowDB {
    create(user: User): User
    read(id: string | undefined): User | undefined
}