'use strict'

import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express()

const config = require('./config/config')

/** Settings  */

app.set('port', process.env.PORT || config.node_port)

/** Middlewares */

app.use(morgan('dev'))
app.use(express.json())


/** Routes */

app.use('/api/',require('./routes/api.routes'))

/** Resources */

app.use(express.static(path.join(__dirname,'public')))

/** Start Server */
app.listen(app.get('port') ,() => {
    console.log(`Server on Port ${app.get('port')}`)
})