import express, { Request, Response, Router } from "express"
import  { engine}  from "express-handlebars"
import serverless from "serverless-http"

const app = express()

app.engine("handlebars", engine({
    defaultLayout: "main",
}))

app.set("view engine", "handlebars")

app.get("/", (req: Request, res: Response): void => {
    res.render("home")
})

app.get("/about", (req: Request, res: Response) => {
    res.render("about")
})

// custom 404 page
app.use((req: Request, res: Response): void => {
    res.status(404)
    res.render("404")
})

// custom 500 page
app.use((err, req: Request, res: Response, next) => {
    console.error(err.message)
    res.status(500)
    res.render("500")
})

export const handler = serverless(app)