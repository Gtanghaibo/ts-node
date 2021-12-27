import express , {Request, Response, NextFunction} from 'express'
import path from 'path'
import birdsRouter from './ src/route/index'
const app = express()

// app.use(express.static('static'))
app.use(express.static(path.join(__dirname, 'static')))
// app.use('/static', express.static(path.join(__dirname, 'static')))


app.get('/name', (req, res) => {
    res.status(200)
    res.json({
        name: 'haibo'
    })
})
app.get('/age', (req, res) => {
    res.status(200)
    res.send('100')
})
app.use('/birds', birdsRouter)

app.listen(3000, () =>{
    console.log('listen 3000')
})