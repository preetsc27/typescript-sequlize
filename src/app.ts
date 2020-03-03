import * as express from "express"
import { sequlize } from "./database"

const app = express()


app.listen(8080, () => {
    console.log(`App runing at http://localhost:8080`)
    sequlize.authenticate().then(() => {
        console.log("database connected")
    }).catch( (e: any) => {
        console.log(e.message)
    })
})