import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: Number(process.env.PORT ?? 8080),
  livekitApiKey: process.env.LIVEKIT_API_KEY ?? '',
  livekitApiSecret: process.env.LIVEKIT_API_SECRET ?? '',
  livekitWsUrl: process.env.LIVEKIT_WS_URL ?? '',
  tavusApiKey: process.env.TAVUS_API_KEY ?? '',
  tavusPersonaId: process.env.TAVUS_PERSONA_ID ?? ''
};
