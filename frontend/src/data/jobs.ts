export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  tags: string[];
  salary: string;
  postedHoursAgo: number;
  score: number;
  description: string;
};

export const jobs: Job[] = [
  {
    id: 'jn-ai-fe-01',
    title: 'AI Frontend Engineer',
    company: 'Jobnova Labs',
    location: 'Remote · US/EU overlap',
    tags: ['React', 'TypeScript', 'Design Systems'],
    salary: '$120k - $160k',
    postedHoursAgo: 4,
    score: 98,
    description:
      'Build job discovery experiences with explainable recommendations and mobile-first UX.'
  },
  {
    id: 'jn-ai-fs-02',
    title: 'Full Stack Engineer (AI Applications)',
    company: 'Nova Infrastructure',
    location: 'San Francisco / Remote',
    tags: ['Node.js', 'Realtime', 'LLM Tooling'],
    salary: '$140k - $190k',
    postedHoursAgo: 9,
    score: 95,
    description:
      'Own end-to-end AI-powered product features, from APIs to user interactions and analytics.'
  },
  {
    id: 'jn-ml-ops-03',
    title: 'Applied ML Engineer',
    company: 'DirectHire Signals',
    location: 'Remote',
    tags: ['Python', 'Inference', 'MLOps'],
    salary: '$130k - $170k',
    postedHoursAgo: 18,
    score: 89,
    description:
      'Turn direct hiring signals into ranking systems that improve candidate-job matching quality.'
  },
  {
    id: 'jn-rt-avatar-04',
    title: 'Realtime Avatar Engineer',
    company: 'Persona Streaming Team',
    location: 'Austin, TX (Hybrid)',
    tags: ['LiveKit', 'WebRTC', 'Media Pipelines'],
    salary: '$150k - $210k',
    postedHoursAgo: 22,
    score: 92,
    description:
      'Develop low-latency digital human pipelines with synchronized TTS, lip-sync, and interaction loops.'
  }
];
