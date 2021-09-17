require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const chaptersRouter = require('./routes/chapters');
const coursesRouter = require('./routes/courses');
const indexRouter = require('./routes/index');
const lessonsRouter = require('./routes/lessons');
const mediaRouter = require('./routes/media');
const mentorsTokenRouter = require('./routes/mentors');
const myCoursesRouter = require('./routes/myCourses');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');
const refreshTokenRouter = require('./routes/refreshTokens');
const usersRouter = require('./routes/users');

const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/chapters',verifyToken, chaptersRouter);
app.use('/courses',verifyToken, coursesRouter);
app.use('/media', mediaRouter);
app.use('/mentors', verifyToken, mentorsTokenRouter);
app.use('/orders', ordersRouter);
app.use('/payments', paymentsRouter);
app.use('/refresh-tokens', refreshTokenRouter);
app.use('/users', usersRouter);
app.use('/lessons', lessonsRouter);
app.use('/my-courses', myCoursesRouter);

module.exports = app;
