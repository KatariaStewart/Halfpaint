import { Router } from 'express';
import { z } from 'zod';
import { config } from '../config.js';
import { createLiveKitJoinToken } from '../services/livekitService.js';
import { createTavusConversation } from '../services/tavusService.js';

const createSessionSchema = z.object({
  identity: z.string().min(1),
  roomName: z.string().min(1)
});

export const sessionRoutes = Router();

sessionRoutes.post('/session', async (req, res) => {
  const parsed = createSessionSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: 'Invalid payload', details: parsed.error.flatten() });
  }

  try {
    const { identity, roomName } = parsed.data;
    const livekitToken = createLiveKitJoinToken(identity, roomName);
    const tavusConversation = await createTavusConversation();

    return res.json({
      livekit: {
        wsUrl: config.livekitWsUrl,
        token: livekitToken,
        roomName
      },
      tavus: tavusConversation
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return res.status(500).json({ error: message });
  }
});
