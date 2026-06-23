import { ArrowRight, ChevronRight, Cloud, Code2, LayoutDashboard, PlayCircle, Sparkles } from 'lucide-react';
import { Form, Stats, Title } from '../components/Common';
import CourseVisual from '../components/CourseVisual';
import PartnerLogo from '../components/PartnerLogo';
import JourneyVisual from '../components/JourneyVisual';
import { features, partners, popular, steps } from '../data/content';


function Hero({ go }) {
  return (
    <section className="hero">
      <div className="heroText">
        <span className="badge"><Sparkles size={16} /> Premium Ed-Tech Platform</span>
        <h1>Transform Your Career With Industry-Oriented IT Training</h1>
        <p>Learn in-demand technologies through real-time projects, certified tech internships, and robust placement support. Move from concepts to production code under expert guidance.</p>
        <div className="actions">
          <button onClick={() => go('Courses')}>Explore Courses <ArrowRight size={18} /></button>
          <button className="secondary" onClick={() => go('Contact')}>Book Free Counselling</button>
        </div>
      </div>
      <div className="heroArt">
        <div className="orb" /><Code2 /><Cloud /><LayoutDashboard />
        <div className="glass"><b>Live Project Lab</b><span>MERN · DevOps · AI · Cloud</span></div>
      </div>
    </section>
  );
}

function Popular({ openCourse }) {
  const descriptions = [
    'Master cloud architecture, secure infrastructure automation, and multi-region networks.',
    'Implement CI/CD lifecycles, Docker containers and Kubernetes clusters.',
    'Build scalable client-server apps using React, Node and Next.js.',
    'Develop ML, deep learning, generative AI and automation systems.',
  ];
  return (
    <section className="section soft">
      <Title small="Demanded Courses" title="Build job-ready skills with structured learning tracks" />
      <div className="grid cards">
        {popular.map((course, index) => (
          <article className="card course" onClick={() => openCourse(course)} key={course}>
            <CourseVisual name={course} variant="stack" />
            <h3>{course}</h3><p>{descriptions[index % descriptions.length]}</p>
            <a>View Track <ChevronRight size={16} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Why() {
  const descriptions = [
    'Learn directly from experienced trainers and certified technology professionals.',
    'Build practical software frameworks inside live hosting and project environments.',
    'Bridge theory and corporate workflow through validated internship pathways.',
    'Access resume building, interview preparation and hiring partner support.',
    'Practice technical, behavioral and project explanation rounds confidently.',
    'Optimize LinkedIn, GitHub, resume and career direction with mentors.',
  ];
  return (
    <section className="section">
      <Title small="Why SW Multimedia" title="A premium training ecosystem, not a basic institute website" />
      <div className="grid featureGrid">
        {features.map((feature, index) => (
          <div className="feature" key={feature}>
            <CourseVisual name={feature} variant="feature" /><h3>{feature}</h3><p>{descriptions[index]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Journey() {
 const stepDescriptions = [
  'Student fills enquiry form, selects course, completes counselling and confirms admission.',
  'Student attends live/recorded classes, watches video lessons and studies notes/material.',
  'Student practices daily tasks, quizzes, assignments and clears doubts with mentors.',
  'Student builds real-world projects and uploads work on GitHub/portfolio.',
  'Student prepares resume, LinkedIn, mock interviews and project explanation.',
  'Student gets certificate, placement support, interview calls and job guidance.'
];

const stepImages = [
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216'
];

  return (
    <section className="section dark journey-section">
      <Title small="Student Journey" title="From enrolment to placement readiness" />
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className={`step-card card-${stepThemes[index]}`} key={step}>
            <div className="step-card-header">
              <span className="step-number">0{index + 1}</span>
              <span className="step-badge">Step {index + 1}</span>
            </div>
            <div className="step-card-visual">
              <img
  src={`${stepImages[index]}?auto=format&fit=crop&w=600&q=80`}
  alt={step}
  className="journey-img"
/> 
            </div>
            <div className="step-card-body">
              <h3>{step}</h3>
              <p>{stepDescriptions[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="partners" aria-label="Hiring and technology partners">
      <div className="partnerTrack">
        {[...partners, ...partners].map((partner, index) => (
          <PartnerLogo partner={partner} key={`${partner.name}-${index}`} />
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section soft">
      <div className="testimonial">
        <div className="video"><PlayCircle size={64} /><span>Video Testimonial</span></div>
        <div>
          <span className="badge">Student Success</span>
          <h2>“The production-level MERN stack training transformed my approach to building software.”</h2>
          <p>The integrated internship portfolio helped me prepare for real interviews and build confidence within 3 months of completing my track.</p>
          <b>— Vikram S., Software Engineer</b>
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  return (
    <section className="lead">
      <h2>Kickstart Your Transition Into Technical Excellence</h2>
      <p>An admissions analyst will contact you with a course path matching your profile goals.</p>
      <Form button="Submit Application & Book Consultation" dark />
    </section>
  );
}

export default function HomePage({ go, openCourse }) {
  return <><Hero go={go} /><Stats /><Popular openCourse={openCourse} /><Why /><Journey /><Partners /><Testimonials /><LeadForm /></>;
}
