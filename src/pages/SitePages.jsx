import { useState } from 'react';
import { BriefcaseBusiness, ChevronRight, Mail, MapPin, Phone, Upload } from 'lucide-react';
import { Form, Stats, Title } from '../components/Common';
import { categories, posts } from '../data/content';
import HomePage from './HomePage';

function About() {
  const values = [
    '🌟 Our Mission: Empower 50,000+ technology aspirants globally through expert training and real product challenges.',
    '🎯 Our Vision: Become India’s premier technical training network for elite developer and systems talent.',
    '⚡ Our Core Values: Technical integrity, production-realistic constraints, milestone tracking and transparent benchmarking.',
    '🏢 Infrastructure & Faculty: High-speed training bays, coding sandboxes, cloud labs and expert supervision.',
  ];
  return (
    <section className="page">
      <Title title="Building the Future of Enterprise IT Competence" />
      <p className="big">SW Multimedia functions as a premium technology training, practical internship, and corporate placement ecosystem engineered to transform technical education models.</p>
      <div className="grid featureGrid">{values.map((value) => <div className="feature" key={value}><h3>{value}</h3></div>)}</div>
    </section>
  );
}

function Courses({ openCourse }) {
  const [active, setActive] = useState('All');
  const list = active === 'All' ? categories : categories.filter((category) => category.title === active);
  return (
    <section className="page">
      <Title small="Courses" title="Professional Technology Directories & Tracks" />
      <div className="filters">
        <button onClick={() => setActive('All')} className={active === 'All' ? 'on' : ''}>All</button>
        {categories.map((category) => (
          <button onClick={() => setActive(category.title)} className={active === category.title ? 'on' : ''} key={category.title}>
            {category.title}
          </button>
        ))}
      </div>
      <div className="grid cards">
        {list.flatMap((category) => category.items.map((item) => (
          <article className="card" onClick={() => openCourse(item)} key={`${category.title}-${item}`}>
            <h3>{item}</h3><p><b>{category.title}</b></p>
            <p>Duration: 3–6 Months · Eligibility: Graduate / Final Year · Fees: Contact Counsellor</p>
            <a>Open Course Details <ChevronRight size={16} /></a>
          </article>
        )))}
      </div>
    </section>
  );
}

export function CourseDetail({ name }) {
  const modules = [
    'Architectural Foundations, Environment Mechanics, Syntax & Engine Rules',
    'Framework Implementations, Services, Testing & Database Controls',
    'Capstone Deployments, Cloud Pipelines, Performance & Portfolio Hardening',
  ];
  return (
    <section className="page">
      <span className="badge">Course Detail</span><h1>{name} Training in Chhatrapati Sambhajinagar</h1>
      <div className="metric">
        <span>⏱️ Duration: 3 - 6 Months</span><span>🎓 Eligibility: Graduate / Final Year Tech Students</span>
        <span>💳 Fees: Transparent Modular Pricing</span>
      </div>
      <div className="detail">
        <article>
          <h2>Comprehensive Domain Overview</h2>
          <p>This program provides a rigorous deep dive into the targeted technology domain, designed with practical enterprise deployment challenges and portfolio building.</p>
          <h2>Curriculum Syllabus Structure</h2>
          {modules.map((module, index) => <details open={index === 0} key={module}><summary>Module {index + 1}</summary><p>{module}</p></details>)}
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

function Internships() {
  return (
    <section className="page split">
      <div>
        <Title title="Gain Absolute Marketplace Authority Through Technical Internships" />
        <p>Apply to active development, cloud, design and analytics internship roles. Approved candidates join live production feature teams.</p>
        {['Web Development Intern', 'Cloud & DevOps Intern', 'AI/ML Intern', 'UI/UX Design Intern'].map((role) => (
          <div className="job" key={role}><BriefcaseBusiness /><b>{role}</b><span>Apply Now</span></div>
        ))}
      </div>
      <div className="upload"><Upload size={42} /><h2>Submit Onboarding Request</h2><p>Drag and drop your engineering resume here (PDF only, max 5MB)</p><Form button="Submit Internship Application" /></div>
    </section>
  );
}

function Placements() {
  const people = [
    ['Amit R.', 'Associate Cloud DevOps Specialist', 6.8], ['Priya S.', 'Data Analyst', 5.4],
    ['Rahul K.', 'Full Stack Developer', 7.2], ['Sneha M.', 'Salesforce Administrator', 5.8],
  ];
  return (
    <section className="page">
      <Title title="Verified Placements Analytics & Success Records" /><Stats />
      <div className="grid cards">
        {people.map(([name, role, salary]) => (
          <article className="card profile" key={name}>
            <div className="avatar">{name[0]}</div><h3>{name}</h3><p>{role}</p><b>{salary} LPA Package Secured</b><a>▶ Watch Video Review</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Corporate() {
  return <section className="page split"><div><Title title="Scalable Enterprise IT Up-Skilling Solutions" /><p>Custom programs for Cloud, DevOps, Cyber Security, AI, Salesforce, Data Engineering and Generative AI teams.</p></div><Form button="Request Custom Enterprise Training Proposal" /></section>;
}

function Blog() {
  return <section className="page"><Title title="Technical Insights, Career Blueprints & Domain Overviews" /><div className="grid cards">{posts.map((post) => <article className="card" key={post}><span className="badge">Career Guidance</span><h3>{post}</h3><p>Read practical guidance from SW Multimedia trainers and placement mentors.</p><a>Read Article</a></article>)}</div></section>;
}

function Gallery() {
  const gallery = ['Campus Infrastructure', 'Workshops', 'Placement Ceremonies', 'Hackathon Events', 'Classroom Training Zones', 'Corporate Sessions'];
  return <section className="page"><Title title="Advanced Technical Campus, Training Bays & Events Gallery" /><div className="masonry">{gallery.map((item) => <div key={item}><span>{item}</span></div>)}</div></section>;
}

function Contact() {
  return (
    <section className="page split" id="contact">
      <div>
        <Title title="Connect With Our Academic Operations Command" />
        <p><MapPin /> SW Multimedia Training Headquarters, Chhatrapati Sambhajinagar, Maharashtra, India.</p>
        <p><Phone /> +91 [Insert Official Phone]</p><p><Mail /> admissions@swmultimedia.com</p>
        <button className="whats">Initialize Live Conversation via WhatsApp</button>
      </div>
      <Form button="Transmit Secure Help Request" />
    </section>
  );
}

function Admin() {
  const menu = ['Dashboard Home', 'Lead Management', 'Curricular Content', 'Article Editor', 'Placement Registry', 'Media Gallery', 'Events', 'Internship Approvals'];
  const leads = [['L-88190', 'Ramesh Jadhav', 'Cloud DevOps', 'FOLLOW-UP'], ['L-88191', 'Priya Shinde', 'Data Science', 'CONVERTED'], ['L-88192', 'Aarav Patil', 'Full Stack', 'NEW']];
  return (
    <section className="page">
      <Title title="SW Multimedia Corporate Admin Dashboard" />
      <div className="admin">
        <aside>{menu.map((item) => <button key={item}>{item}</button>)}</aside>
        <div>
          <h2>Live Intake Pipeline</h2><div className="metric"><span>Total Leads: 4,812</span><span>Pending: 214</span><span>Converted: 3,120</span></div>
          <table><tbody>{leads.map((lead) => <tr key={lead[0]}>{lead.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table>
          <button>Extract CSV</button>
        </div>
      </div>
    </section>
  );
}

function Legal({ type }) {
  const text = {
    Privacy: 'SW Multimedia enforces stringent database processing constraints regarding user diagnostic tracking telemetry and storage. No individual record blocks or contact coordinates will be distributed, leased, or sold.',
    Terms: 'Users accessing SW Multimedia platforms agree to respect institutional property boundaries and avoid malicious exploitation, scraping, or unauthorized attempts.',
    Refund: 'All finalized course seat reservations, laboratory confirmation charges, or receipt amounts are irrevocable once account configuration is validated.',
  };
  return <section className="page"><Title title={`${type} Policy`} /><p className="big">{text[type]}</p></section>;
}

export function renderPage(page, go, openCourse) {
  const pages = {
    Home: <HomePage go={go} openCourse={openCourse} />, About: <About />, Courses: <Courses openCourse={openCourse} />,
    Internships: <Internships />, Placements: <Placements />, Corporate: <Corporate />, Blog: <Blog />,
    Gallery: <Gallery />, Contact: <Contact />, Admin: <Admin />, Privacy: <Legal type="Privacy" />,
    Terms: <Legal type="Terms" />, Refund: <Legal type="Refund" />,
  };
  return pages[page] || pages.Home;
}
