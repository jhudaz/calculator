require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
});

app.use(bodyParser())
app.use(cors())

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    });

//to define a table 
const User = sequelize.define('users', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});
//api to get all the user from db
app.get('/', async (req, res) => {
    const users = await User.findAll({
        order: sequelize.col('id')
    });
    res.json(users);
})
//api to get only one user by id
app.get('/user', async (req, res) => {
    const singleUser = await User.findByPk(req.body.id).then(() => {
        return User.findAll({
                where: {
                    id: req.body.id
                }
            })
    })
    res.json(singleUser);
})
//api to save a user in the db
app.post('/', async (req, res) => {
    console.log(req.body);
    const userInserted = await User.sync({ force: false }).then(() => {
        return User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
    });
    res.json(userInserted)

})
//api to update a single user
app.put('/', async (req, res) => {
    const userUpdated = await User.findByPk(req.body.id).then(() => {
        return User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName
        },
            {
                where: {
                    id: req.body.id
                }
            })
    })
    res.json(userUpdated);
})
//api to delete a single row
app.delete('/', async (req, res) => {
    console.log("data:",req.body)
    const userDeleted = await User.findByPk(req.body.id).then(() => {
        return User.destroy({
            where: {
                id: req.body.id
            }
        })
    })
    res.json(userDeleted)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// for testing
module.exports = app;
 