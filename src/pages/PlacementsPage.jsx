import { Stats, Title } from '../components/Common';

export default function PlacementsPage() {
  const placements = [
    ['Amit R.', 'Associate Cloud DevOps Specialist', 22],
    ['Priya S.', 'Data Analyst', 16],
    ['Rahul K.', 'Full Stack Developer', 16],
    ['Sneha M.', 'Salesforce Administrator', 19],
  ];

  return (
    <section className="page">
      <Title title="Verified Placements Analytics & Success Records" />
      <Stats />
      <div className="grid cards">
        {placements.map(([name, role, salary]) => (
          <article key={name} className="card profile">
            <div className="avatar">{name[0]}</div>
            <h3>{name}</h3>
            <p>{role}</p>
            <b>{salary} LPA Package Secured</b>
          </article>
        ))}
      </div>
    </section>
  );
}
