import type { Job } from '../data/jobs';

type JobCardProps = {
  job: Job;
  selected: boolean;
  onSelect: (id: string) => void;
};

export function JobCard({ job, selected, onSelect }: JobCardProps) {
  return (
    <button className={`job-card ${selected ? 'selected' : ''}`} onClick={() => onSelect(job.id)}>
      <div className="job-card__header">
        <h3>{job.title}</h3>
        <span className="score">{job.score}% match</span>
      </div>
      <p className="company">{job.company}</p>
      <p className="location">{job.location}</p>
      <div className="tags">
        {job.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="job-card__footer">
        <strong>{job.salary}</strong>
        <span>{job.postedHoursAgo}h ago</span>
      </div>
    </button>
  );
}
