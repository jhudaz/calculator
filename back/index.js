require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const bodyParser = require('body-parser');
const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
});

app.use(bodyParser());
app.use(cors())


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const User = sequelize.define('users', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});


// const Prueba = sequelize.define('prueba', {
//     nombre: {
//         type: Sequelize.STRING
//     },
//     descripcion: {
//         type: Sequelize.STRING
//     },

// }, {
//     tableName: 'prueba',
//     freezeTableName: true
// });
// Prueba.findAll().then(Pruebas => {
//     console.log(Pruebas)
// })



app.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
})

app.post('/', async (req, res) => {
    console.log(req.body);
    const userInserted = await User.sync({ force: false }).then(() => {
        // Table created
        return User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
    });
    res.json(userInserted)

})

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
    res.json()
})

app.delete('/', async (req, res) => {
    console.log("data:",req.body)
    const userUpdated = await User.findByPk(req.body.id).then(() => {
        return User.destroy({
            where: {
                id: req.body.id
            }
        })
    })
    res.json()
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

