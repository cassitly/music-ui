import express from 'express';
import basicAuth from 'express-basic-auth';

const router = express.Router();

router.use(basicAuth({
  users: { 'admin': 'securepassword123' },
  challenge: true,
  unauthorizedResponse: 'Unauthorized Access'
}));

router.get('/', (req, res) => {
  res.json({ streamUrl: 'ws://obs-stream.local/live' });
});

export default router;
