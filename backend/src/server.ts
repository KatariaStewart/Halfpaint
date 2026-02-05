import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { config } from './config.js';
import { sessionRoutes } from './routes/sessionRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api', sessionRoutes);

const httpServer = createServer(app);
const wss = new WebSocketServer({ server: httpServer, path: '/realtime-sync' });

wss.on('connection', (socket) => {
  socket.on('message', (rawData) => {
    const timestamp = Date.now();

    socket.send(
      JSON.stringify({
        type: 'sync-ack',
        serverTimestamp: timestamp,
        payload: rawData.toString()
      })
    );
  });
});

httpServer.listen(config.port, () => {
  console.log(`Backend listening on http://localhost:${config.port}`);
});
