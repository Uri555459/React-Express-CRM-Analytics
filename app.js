const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// Выводит более подробные логи в консоль
const morgan = require('morgan')

const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const keys = require('./config/keys')
const app = express()

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected.'))
  .catch((error) => console.log(error))

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

module.exports = app
