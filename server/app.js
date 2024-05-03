const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const messagesRouter = require('./routers/messages.router');
const authRouter = require('./routers/auth.router');
const tokensRouter = require('./routers/tokens.router');
const APRouter = require('./routers/APRouter');
const teaRouter = require('./routers/tea.router');
const userPageRouter = require('./routers/UserPageRouter');

const app = express();		// создаем экземпляр сервера

// Middleware для парсинга тела запроса в формате JSON
app.use(express.static('public'));
app.use(express.json());
// Middleware для логирования запросов
app.use(morgan('dev'));
// Распознавание входящего объекта в POST-запросе в виде строк или массивов
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/tokens', tokensRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/auth', authRouter);
app.use('/api/tea', APRouter);
app.use('/api/teas', teaRouter);
app.use('/api/userpage', userPageRouter);

module.exports = app;	// незабываем выполнить эекспорт для дальнейшего использования
