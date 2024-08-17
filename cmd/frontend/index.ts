import express, { Request, Response } from "express"
import  { engine}  from "express-handlebars"

const app = express()

app.engine("handlebars", engine({
    defaultLayout: "main",
}))

app.set("view engine", "handlebars")
app.set("views", "./views")

const port = process.env.PORT || 3000

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

app.listen(port, () => console.log(
    `Express started on http://localhost:${port} ` + `press Ctrl-C to terminate.`
))