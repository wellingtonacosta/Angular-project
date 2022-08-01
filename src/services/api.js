//@ts-check
const express = require("express");
const cors = require("cors");
const server = express();
server.use(express.json());
server.use(cors())
const port = 3000;

const users = [
          {name: 'john', id: 1, email:'john@test.com'},
          {name: 'Ton', id: 2, email:'ton@test.com'}
        ];

let autoIncrement = users[users.length - 1].id;

server.get("/users", (req, res) => {
 return res.json(users);
});

server.get('/users/:id', (req, res) => {
  const {id} = req.params
  return res.json(users.find(user => user.id === parseInt(id)))
} )

server.post('/users/', (req, res) => {
  const {name, email} = req.body;
  const user = {name, id: autoIncrement++, email};
  users.push(user);

  return res.json(user)
})

server.put('/users/:id', (req, res) => {
  const {id} = req.params
  const {name, email} = req.body;
  const user = users.find(user => user.id === parseInt(id))
  if(user === undefined) {
    return res.status(404).json({error: 'User not found'})
  }
  if(name) user.name = name;
  if(email) user.email = email;
  return res.json(user)

})

server.delete('/users/:id', (req, res) => {
  const {id} = req.params
  let userExists
  for(let i = 0; i < users.length; i++) {
    if(users[i].id === parseInt(id)) {
      userExists = true
      users.splice(i, 1);
      break;
    }
  }
  if(!userExists) {
   return res.status(404).json({error: 'User not found'})
  }
  return res.json({message: "O nome foi deletado"})
})

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`);
});
