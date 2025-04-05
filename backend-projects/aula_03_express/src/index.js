const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Rota padrao')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/users/:id', (req, res) =>{
    console.log(req.params); 
  
    res.json(req.params)
})

app.post('/users', (req, res)=>{
    res.json(req.body)
})