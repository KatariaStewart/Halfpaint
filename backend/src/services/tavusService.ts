import { config } from '../config.js';

export type TavusConversation = {
  conversation_id: string;
  websocket_url: string;
};

export async function createTavusConversation() {
  if (!config.tavusApiKey || !config.tavusPersonaId) {
    throw new Error('Tavus credentials are not configured');
  }

  const response = await fetch('https://tavusapi.com/v2/conversations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': config.tavusApiKey
    },
    body: JSON.stringify({
      persona_id: config.tavusPersonaId,
      callback_url: 'https://example.com/webhooks/tavus'
    })
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Tavus API request failed: ${response.status} ${message}`);
  }

  return (await response.json()) as TavusConversation;
}
