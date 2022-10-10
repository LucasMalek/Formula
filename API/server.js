/* Imports */
require('dotenv').config();
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const database = require('./database/database.js');
const { response } = require('express');

//Basic configs
const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())
app.use(cookieParser())
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//Credentials
const secret = process.env.SECRET

function Cartasiniciais(a, b, array) {
  if(array.length != 3) {
    let card_id = Math.floor(Math.random() * (b - a + 1)) + a
    {array.includes(card_id) ? (
      Cartasiniciais(a,b, array)
    ): (
      array.push(card_id),
      Cartasiniciais(a,b, array)
      )
  }}
  return array
}
const availableCards = {
  0: {id: 1, title: 'Jim',  ataque: 30, defesa: 40, img: "/jack.jpg", img2: "/jim.png"},
  1: {id: 2, title: 'Blob', ataque: 30, defesa: 41, img: "/Slime.jpg", img2: "/Blob.png"},
  2: {id: 3, title: 'Avin', ataque: 35, defesa: 30, img: "/aguia.png", img2: "/Avin.png"},
  3: {id: 4, title: 'Cattiger', ataque: 40, defesa: 25, img: "/cattiger.jpg", img2: "/jim.png"},
  4: {id: 5, title: 'Golem', ataque: 20, defesa: 50, img: "/golem.jpg", img2: "/Blob.png"},
  5: {id: 6, title: 'Mantidae', ataque: 40, defesa: 25, img: "/mantidae.jpg", img2: "/Avin.png"},
  6: {id: 7, title: 'Urus', ataque: 30, defesa: 15, img: "/urus.jpg", img2: "/Blob.png"}
 }

 const avaibleprofilePhotos = {
  0: {name: "pororei.jpg"},
  1: {name: "porotanch.jpg"},
  2: {name: "poroyasuo.jpg"},
  3: {name: "poroyi.jpg"},
  4: {name: "fizz.jpg"},
  5: {name: "poroashe.jpg"},
  6: {name: "porodraven.jpg"}
 }
//Register
app.post('/register', async (req, res) => {

      
      const {email, senha, nome, cidade, descricao} = req.body
      if(!email || !senha || !nome || !cidade || !descricao){
       return res.send("É necessário preencher todos os campos!")
      }else {
         //Check if user already exists
         let query = 'select * from formula.user where email = ' + `'${email}'`
         let [userexists] = await database.query(query)
         if (userexists){
              return res.send("Email ja cadastrado!")
         }
         //Create Password
         const salt = await bcrypt.genSalt(12)
         const passwordHash = await bcrypt.hash(senha, salt)
          
         //Create User
         try{
           const arrayinicial = []
           let cartasiniciais = Cartasiniciais(0, 6, arrayinicial)
           query = 'select * from formula.user where email = ' + `'${email}'`
           await database.query('INSERT into formula.user (email, senha, nome, cidade, descricao, profile_img) values($1, $2, $3, $4, $5, $6)', [email, passwordHash, nome, cidade, descricao, avaibleprofilePhotos[cartasiniciais[0]].name])
           .then(async () => {[userexists] = await database.query(query)
                            delete userexists.senha
           })
           .then(async () => {
              cartasiniciais.map(async (i) => {
                await database.query('INSERT into formula.card (id_user, nome, descricao, character_img, name_img, ataque, defesa, name_user) values($1, $2, $3, $4, $5, $6, $7, $8)', [userexists.id, availableCards[i].title, "blabla", availableCards[i].img, availableCards[i].img2, availableCards[i].ataque, availableCards[i].defesa, userexists.nome])
              });
           })
           .then(() => {return res.send(userexists)})
         }catch(erro){
             return  res.send(`${erro}`)
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
         const query = 'select * from formula.user where email = ' + `'${email}'`
         const [userexists] = await database.query(query)
        if (!userexists){
             return res.send('Usuário não encontrado')
        }else{
              const checkpassword = await bcrypt.compare(senha, userexists.senha)
              if(!checkpassword){
                     return res.send("Senha incorreta!")
              }
        }
        try{
          const responsetoken = jwt.sign({
              id: userexists.id
          }, secret)
           res.cookie("token", responsetoken, { maxAge: 3000})
           res.send({user: userexists})  
        }catch(erro){
              return res.status(500).json({msg: erro})
        }
  }
}
)

app.post('/getusercards', async(req, res)=> {
    const query = 'select * from formula.card where id_user = ' + `'${req.body.id}'`
    res.send(await database.query(query))
})

app.post('/getallcards', async(req, res)=> {
  const query = 'select u.nome as nomeuser, c.nome as nomecarta, c.id_user, c.id, c.character_img, c.name_img from formula.user u, formula.card c  where u.id = c.id_user and id_user <> ' + `'${req.body.id}'`
  res.send(await database.query(query))
})

app.post('/getusers', async(req, res) => {
      const query = 'select nome from formula.user where id <>' + `${req.body.id}`
      res.send(await database.query(query))
})


app.post('/tradecards', async(req, res) => {
  
  const query1 = 'UPDATE formula.card SET id_user =' + `'${req.body.card2.id_user}'`+ ',' +'name_user ='+ `'${req.body.card2.name_user}'` +'WHERE id =' +`'${req.body.card1.id}'`
  const query2 = 'UPDATE formula.card SET id_user =' + `'${req.body.card1.id_user}'`+ ',' + 'name_user ='+ `'${req.body.card1.nomeuser}'` + 'WHERE id =' + `'${req.body.card2.id}'`
  try {
    await database.query(query1).then(await database.query(query2)).then(res.send('Sucesso!'))
  }
  catch(erro) {
     res.send(erro)
  }
 
})

app.post('/gerarnovascartas', (req, res) => {
           const arrayinicial = []
           let cartasiniciais = Cartasiniciais(0, 6, arrayinicial)
           cartasiniciais.map(async (i) => {
            await database.query('INSERT into formula.card (id_user, nome, descricao, character_img, name_img, ataque, defesa, name_user) values($1, $2, $3, $4, $5, $6, $7, $8)', [req.body.id, availableCards[i].title, "blabla", availableCards[i].img, availableCards[i].img2, availableCards[i].ataque, availableCards[i].defesa, req.body.nome])
          })
          res.json({msg: 'Cartas geradas!'})

})

database.connect().then(app.listen(5000, () => {console.log("Servidor ligado! Escutando na porta 5000")}))

