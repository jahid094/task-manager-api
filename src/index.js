const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use(userRouter)

app.use(taskRouter)

app.listen(port , () => {
    console.log('Server is up on port ' +port)
})

// const multer = require('multer')
// const upload = multer({
//         dest: 'images' , 
//         limits: {
//             fileSize: 1000000
            
//         } ,
//         fileFilter(req , file , cb) {
//             if(!file.originalname.match(/\.(doc|docx)$/)){
//                 return cb(new Error('please upload a word document !'))
//             }
//             // cb(new Error('File must be a pdf'))
//             cb(undefined , true)
//             // cb(undefined , false)
//         }
// })



// app.post('/upload' , upload.single('upload') , (req,res) => {
//     res.send()
// } , (error , req , res , next ) => {
//     res.status(400).send({ error: error.message})
// })



// app.use((req , res , next) => {
//     if(req.method === 'GET' ) {
//         res.send('GET request are disabled')
//     }
//     else{
//         next()
//     }
// })

// app.use((req , res , next) => {
//     res.status(503).send('Site is currently down . Check back soon !')

// })





// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password , 8)


//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//     console.log(isMatch)

// }
// const jwt = require('jsonwebtoken')

// const myFunction = async () =>{
//     const token = jwt.sign({_id : 'abc123'} , 'thisismynewcourse' , { expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token , 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

// const pet = {
//     name: 'Hal' 
// }

// pet.toJSON = function () {
//     return {}
// }

// console.log(JSON.stringify(pet))

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5e8c286d33d36f6a7c1de42d')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5e8c21d8a9fd997774e8406e')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()