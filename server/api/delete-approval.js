import express from 'express';
const router = express.Router();

let approvals = [{ name: 'Echoes in the Light', timestamp: 'Today - 3:02:24 EST' }];

router.post('/', (req, res) => {
  const { index } = req.body;
  approvals.splice(index, 1);
  res.json({ success: true });
});

export default router;
