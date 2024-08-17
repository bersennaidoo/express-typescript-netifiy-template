import express, { Request, Response } from "express"

const app = express()

const port = process.env.PORT || 3000

app.get("/api", (req: Request, res: Response): void => {
    res.send("home")
})

app.get("/api/about", (req: Request, res: Response) => {
    res.send("about")
})

// custom 404 page
app.use((req: Request, res: Response): void => {
    res.status(404)
    res.send("404")
})

// custom 500 page
app.use((err, req: Request, res: Response, next) => {
    console.error(err.message)
    res.status(500)
    res.send("500")
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port} ` + `press Ctrl-C to terminate.`
))