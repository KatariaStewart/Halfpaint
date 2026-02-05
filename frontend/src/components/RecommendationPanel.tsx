import type { Job } from '../data/jobs';

type RecommendationPanelProps = {
  job: Job;
};

function reasonCopy(job: Job) {
  return [
    `Strong overlap with ${job.tags[0]} and ${job.tags[1]} skill clusters.`,
    `${job.company} has recent direct hiring signals and high response rates.`,
    `Compensation aligns with top quartile for ${job.location.split('·')[0].trim()}.`
  ];
}

export function RecommendationPanel({ job }: RecommendationPanelProps) {
  return (
    <aside className="recommendation-panel">
      <h2>Recommendation insights</h2>
      <p className="recommendation-score">{job.score}% confidence</p>
      <ul>
        {reasonCopy(job).map((reason) => (
          <li key={reason}>{reason}</li>
        ))}
      </ul>
      <section>
        <h3>Role summary</h3>
        <p>{job.description}</p>
      </section>
      <section>
        <h3>Suggested next action</h3>
        <p>Message hiring manager within the next 12 hours to maximize response probability.</p>
      </section>
      <button className="primary-action">Apply with AI assistant</button>
    </aside>
  );
}
