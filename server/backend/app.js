const express = require('express');
const app = express();
const path = require('path');
const defineUIConfig = require('../../config.yml');
const port = defineUIConfig().settings.controlpanel.port;

app.use(express.static('public')); // Serve static files (CSS, JS)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/pages/layout.html'));
});

app.get('/assets/css/main.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../../assets/css/main.css'));
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});
