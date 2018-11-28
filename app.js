const { app } = require('./server');
const { config } = require('./utils/config');
const { connectDb } = require('./utils/db');

// app connect database
connectDb().then(info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    app.listen(config.PORT, () => console.log(`Server started and listening on port ${config.PORT}`));
}).catch(() => {
    console.log('Unable to connect to database');
    process.exit(1);
})
