/* Imports */
require('dotenv').config();
const Banco = require('./bancodedados.js')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const cors = require('cors')

//Basic configs
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())

//Credentials
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const secret = process.env.SECRET

//Models
const Usermodel = require('./models/Usermodel')

//Register
app.post('/register', async (req, res) => {
      const {email, senha, nome, cidade, descricao} = req.body
      if(!email || !senha || !nome || !cidade || !descricao){
       return res.send("É necessário preencher todos os campos!")
      }else {
         //Check if user already exists
         const userexists = await Usermodel.findOne({email: email})
         if (userexists){
              return res.send({msg: "Email ja cadastrado!"})
         }
         //Create Password
         const salt = await bcrypt.genSalt(12)
         const passwordHash = await bcrypt.hash(senha, salt)

         //Create User
         const User = new Usermodel({
           email,
           senha: passwordHash,
           nome,
           cidade,
           descricao
         })
         try{
           await User.save()
           return res.send(true)
         }catch(erro){
             return  res.status(500).json({msg: erro})
         }
      }
})

function validateToken(req, res, next) {
  const token = Object.entries(req.body)
  jwt.verify(token[0][0], secret, (err) => {
          if(err) return res.send(`${err}`)
          next()
  })
}

app.post('/validate', validateToken, (req, res) => {
        return res.send(true)     
})

//Signin
app.post('/signin', async(req, res) => {
  const{email, senha} = req.body
  //Validations
  if(!email || !senha){
       return res.send("É necessários preencher todos os campos!")
  }else{
        //Check if user already exists
        const userexists = await Usermodel.findOne({email: email})
        if (!userexists){
             return res.send('Usuário não encontrado')
        }else{
              const checkpassword = await bcrypt.compare(senha, userexists.senha)
              if(!checkpassword){
                     return res.send("Senha incorreta!")
              }
        }
        try{
          const token = jwt.sign({
              id: userexists._id
          }, secret)
          return res.json({user: userexists, token: token})
        }catch(erro){
              return res.status(500).json({msg: erro})
        }
  }
}
)
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.4r0u7.mongodb.net/?retryWrites=true&w=majority`).then(
  app.listen(5000, ()=> {console.log("Servidor acionado! Escutando na porta 5000")})
).catch((err)=> console.log(err))

