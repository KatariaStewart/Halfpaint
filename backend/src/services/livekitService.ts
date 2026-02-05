import { AccessToken } from 'livekit-server-sdk';
import { config } from '../config.js';

export function createLiveKitJoinToken(identity: string, roomName: string) {
  if (!config.livekitApiKey || !config.livekitApiSecret) {
    throw new Error('LiveKit credentials are not configured');
  }

  const token = new AccessToken(config.livekitApiKey, config.livekitApiSecret, {
    identity,
    ttl: '10m'
  });

  token.addGrant({
    roomJoin: true,
    room: roomName,
    canPublish: true,
    canSubscribe: true
  });

  return token.toJwt();
}
