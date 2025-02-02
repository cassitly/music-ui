const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // Serve static files (CSS, JS)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/pages/index.html'));
});

// Example route for processing commands from the UI
app.post('/run-command', (req, res) => {
    const command = req.body.command; // Get command from user input
    console.log(`Running command: ${command}`);
    
    // Handle the command and send response
    res.json({ status: 'success', message: 'Command executed' });
});

// Example route to update render statuses
app.get('/get-processed-renders', (req, res) => {
    // This would typically fetch data from a database or service
    const renders = [
        { name: 'Heroics', time: '10:26 EST', duration: '2:08' },
        // Add other entries as needed
    ];
    res.json(renders);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
