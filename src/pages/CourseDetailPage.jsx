import { Form } from '../components/Common';

export default function CourseDetailPage({ name }) {
  const modules = [
    'Architectural Foundations, Environment Mechanics, Syntax & Engine Rules',
    'Framework Implementations, Services, Testing & Database Controls',
    'Capstone Deployments, Cloud Pipelines, Performance & Portfolio Hardening',
  ];

  return (
    <section className="page">
      <span className="badge">Course Detail</span>
      <h1>{name} Training in Chhatrapati Sambhajinagar</h1>
      <div className="metric">
        <span>Duration: 3 - 6 Months</span>
        <span>Eligibility: Graduate / Final Year Tech Students</span>
        <span>Fees: Transparent Modular Pricing</span>
      </div>
      <div className="detail">
        <article>
          <h2>Comprehensive Domain Overview</h2>
          <p>This program provides a rigorous deep dive into the targeted technology domain, designed with practical enterprise deployment challenges and portfolio building.</p>
          <h2>Curriculum Syllabus Structure</h2>
          {modules.map((module, index) => (
            <details open={index === 0} key={module}>
              <summary>Module {index + 1}</summary>
              <p>{module}</p>
            </details>
          ))}
          <h2>Projects, Certification & Placement</h2>
          <p>Build three live applications, earn SW Multimedia certification, and get resume, LinkedIn, mock interview and hiring partner support.</p>
          <h2>FAQs</h2>
          <p><b>Weekend options?</b> Yes, hybrid weekend schedules are available.<br /><b>Internship approval?</b> After Module 2 and code review, eligible students enter live project workflows.</p>
        </article>
        <aside><h3>Enquire Now</h3><Form button="Request Counselling" /></aside>
      </div>
    </section>
  );
}
