const { app } = require('./app.js');
const instances = require('./api/createInstance.js');
const defineUIConfig = require('../config.yml');
const port = defineUIConfig().settings.dashboard.port;

instances(app);
app.listen(port, () => console.log(`Display server running at http://localhost:${port}`));