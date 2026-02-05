# Jobnova Take-home Prototype

This repository includes both challenge sections:

1. **Frontend**: responsive AI job board + recommendation panel.
2. **Backend**: LiveKit + Tavus integration scaffold for real-time digital human sessions.

## Project structure

- `frontend/`: React + Vite implementation of the job board and recommendation UX.
- `backend/`: Express TypeScript API that issues LiveKit tokens, starts Tavus conversations, and exposes a low-latency websocket sync channel.

## Frontend features

- Search and filter jobs by role/company/skills.
- Recommendation insights panel with confidence score and action suggestions.
- Mobile-first responsive layout (single-column under 900px).
- Additional interaction improvement beyond static mock: live filtering and card selection states.

## Backend features

- `POST /api/session`
  - Generates a LiveKit room token with publish/subscribe grants.
  - Creates a Tavus conversation for the configured persona.
  - Returns a single payload to bootstrap the real-time client.
- `GET /health`
  - Health check endpoint.
- `WS /realtime-sync`
  - Server timestamp acknowledgements to support client-side latency and A/V sync diagnostics.

## Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

Create `.env` in `backend/`:

```bash
PORT=8080
LIVEKIT_API_KEY=your_livekit_key
LIVEKIT_API_SECRET=your_livekit_secret
LIVEKIT_WS_URL=wss://<your-livekit-host>
TAVUS_API_KEY=your_tavus_api_key
TAVUS_PERSONA_ID=your_persona_id
```

Then run:

```bash
cd backend
npm install
npm run dev
```

## Example session request

```bash
curl -X POST http://localhost:8080/api/session \
  -H 'Content-Type: application/json' \
  -d '{"identity":"demo-user","roomName":"jobnova-room"}'
```

The response includes a LiveKit token and Tavus conversation metadata for client bootstrap.
