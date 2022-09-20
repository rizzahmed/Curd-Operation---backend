const express = require('express')
const app = express()
const port = 3000
const bp = require('body-parser')

const cors = require('cors')

const funcs = require('./functions');
app.use(cors())
app.use(express.json())
app.use(bp.urlencoded({extended:true}))

// Welome
app.get('/', async (req, res) => {
    res.send('Welcome to Demo App')
})

// Add a user
app.post('/add-user', async (req, res) => {
    let obj = req.body
    // console.log(obj);
    // console.log(obj.fname);
    let data = await funcs.add_user(obj);

})

// Read all users
app.get('/display-users', async (req, res) => {
    let data = await funcs.display_all_users()
    console.log(data)
    res.send(data[0])
})

// Delete a user
app.delete('/delete-user/:id', async (req, res) => {
    
    console.log("It is parameter id: "+ req.params.id);
    let data = await funcs.del_user(req.params.id);
    // res.send('User at ' + req.params.id +' deleted')
})



//get single user
app.get('/edituser/:id', async (req, res) => {
    // let obj = req.body
    let data = await funcs.get_user(req.params.id)
    // console.log("edit called")
    res.send(data)
})


// Update a user
app.post('/update-user', async (req, res) => {
    let obj = req.body
    let data = await funcs.update_user(obj)
    // console.log(data)
    // res.send('User Updated!')
})




app.listen(port, () => {
  console.log(`Demo App listening on port ${port}`)
})