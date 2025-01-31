import { Server } from 'socket.io';

export default function setupWebSockets(server) {
  const io = new Server(server, { cors: { origin: '*' } });

  let approvals = [{ name: 'Echoes in the Light', timestamp: 'Today - 3:02:24 EST' }];
  let musicInstances = [{ name: 'Elysiac', status: 'Waiting ground' }];

  io.on('connection', (socket) => {
    console.log('Client connected');

    // Send initial data
    socket.emit('approvals', approvals);
    socket.emit('musicInstances', musicInstances);

    // Listen for updates
    socket.on('delete-approval', (index) => {
      approvals.splice(index, 1);
      io.emit('approvals', approvals);
    });

    socket.on('new-command', (command) => {
      io.emit('terminal-output', `> ${command}\nExecuted successfully.`);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  return io;
}
