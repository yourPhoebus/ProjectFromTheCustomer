const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const messagesRouter = require('./routers/messages.router');
const authRouter = require('./routers/auth.router');
const tokensRouter = require('./routers/tokens.router');
const MainPageRouter = require('./routers/MainPage.router');
const teaRouter = require('./routers/tea.router');
const app = express();		// создаем экземпляр сервера

// Middleware для парсинга тела запроса в формате JSON
app.use(express.static('public'));
app.use(express.json());
// Middleware для логирования запросов
app.use(morgan('dev'));
// Распознавание входящего объекта в POST-запросе в виде строк или массивов
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use()
app.use('/api/teas', teaRouter);
app.use('/api', MainPageRouter)
app.use('/api/tokens', tokensRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/auth', authRouter);

module.exports = app;	// незабываем выполнить эекспорт для дальнейшего использования
