import { useMemo, useState } from 'react';
import { JobCard } from './components/JobCard';
import { RecommendationPanel } from './components/RecommendationPanel';
import { jobs } from './data/jobs';
import './styles.css';

export default function App() {
  const [selectedJobId, setSelectedJobId] = useState(jobs[0].id);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const searchable = `${job.title} ${job.company} ${job.tags.join(' ')}`.toLowerCase();
      return searchable.includes(query.toLowerCase());
    });
  }, [query]);

  const selectedJob = filtered.find((job) => job.id === selectedJobId) ?? filtered[0];

  return (
    <main className="app-shell">
      <header className="hero">
        <h1>Jobnova AI Job Board</h1>
        <p>Find direct hiring opportunities with explainable AI recommendations.</p>
      </header>

      <section className="search-bar">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search title, company, or skills"
          aria-label="Search jobs"
        />
      </section>

      <section className="content-grid">
        <div className="job-list">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} selected={selectedJob?.id === job.id} onSelect={setSelectedJobId} />
          ))}
        </div>
        {selectedJob && <RecommendationPanel job={selectedJob} />}
      </section>
    </main>
  );
}
