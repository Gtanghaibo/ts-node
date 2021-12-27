import express from 'express'
const router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Time', Date.now())
    req.params.startTime = Date.now()
    next()
})

router.get('/', function(req, res){
    res.send('birds home page')
    console.log(Date.now() - req.params.startTime)
})

router.get('/about', function(req, res){
    res.send('birds about page')
})

router.get('/detail', function(req, res){
    res.send('birds detail page')
})

export default router