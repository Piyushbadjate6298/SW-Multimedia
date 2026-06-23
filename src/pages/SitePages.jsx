import { useRef, useState } from 'react';
import { BriefcaseBusiness, Building2, ChevronRight, GraduationCap, Mail, MapPin, Phone, Upload, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Form, Stats, Title } from '../components/Common';
import CourseVisual from '../components/CourseVisual';
import { categories, blogPosts, aboutHero, aboutPillars, aboutHighlights, aboutStats } from '../data/content';
import HomePage from './HomePage';

function About({ go }) {
  const [activePillar, setActivePillar] = useState(0);
  const [hoverHighlight, setHoverHighlight] = useState(null);
  const pillar = aboutPillars[activePillar];

  return (
    <section className="page aboutPage">
      <div className="aboutHero">
        <div className="aboutHeroCopy">
          <span className="badge"><Building2 size={16}/> About SW Multimedia</span>
          <h1>{aboutHero.title}</h1>
          <p className="big">{aboutHero.subtitle}</p>
          <div className="aboutHeroActions">
            <button onClick={() => go('Courses')}>Explore Courses <ChevronRight size={18}/></button>
            <button className="secondary" onClick={() => go('Contact')}>Book Free Counselling</button>
          </div>
        </div>
        <div
          className="aboutHeroImage"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(2,6,23,.12), rgba(2,6,23,.62)), url(${aboutHero.image})`,
            backgroundPosition: aboutHero.imagePosition || 'center',
          }}
        >
          <div className="aboutHeroBadge"><GraduationCap size={18}/> Premium IT Training Campus</div>
        </div>
      </div>

      <div className="aboutStatsStrip">
        {aboutStats.map(([value, label]) => (
          <div key={label}><b>{value}</b><span>{label}</span></div>
        ))}
      </div>

      <div className="aboutPillarsSection">
        <Title small="Who We Are" title="Mission, Vision, Values & Infrastructure"/>
        <div className="aboutPillarTabs">
          {aboutPillars.map((item, index) => (
            <button key={item.title} type="button" className={activePillar === index ? 'on' : ''} onClick={() => setActivePillar(index)}>
              <span>{item.tag}</span><b>{item.title}</b>
            </button>
          ))}
        </div>
        <div className="aboutPillarPanel">
          <div className="aboutPillarImageWrap">
            <div className="aboutPillarImage" style={{ backgroundImage: `linear-gradient(180deg, rgba(2,6,23,.08), rgba(2,6,23,.72)), url(${pillar.image})`, backgroundPosition: pillar.imagePosition || 'center' }}>
              <span>{pillar.tag}</span>
            </div>
          </div>
          <div className="aboutPillarBody">
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
            <button type="button" className="blogReadBtn" onClick={() => go('Contact')}>Talk to Our Team <ChevronRight size={16}/></button>
          </div>
        </div>
      </div>

      <div className="aboutHighlightsSection">
        <Title small="Campus & Culture" title="An Interactive Learning Environment Built for Results"/>
        <div className="aboutHighlightsGrid">
          {aboutHighlights.map((item, index) => (
            <article
              key={item.title}
              className={`aboutHighlightCard ${hoverHighlight === index ? 'active' : ''}`}
              onMouseEnter={() => setHoverHighlight(index)}
              onMouseLeave={() => setHoverHighlight(null)}
              onClick={() => setHoverHighlight(hoverHighlight === index ? null : index)}
            >
              <div className="aboutHighlightImageWrap">
                <div className="aboutHighlightImage" style={{ backgroundImage: `linear-gradient(180deg, rgba(2,6,23,.06), rgba(2,6,23,.78)), url(${item.image})` }}>
                  <BookOpen size={22}/>
                </div>
              </div>
              <div className="aboutHighlightBody"><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </div>

      <div className="aboutCta">
        <div>
          <span className="badge"><Users size={16}/> Join SW Multimedia</span>
          <h2>Ready to Build Your IT Career With Expert Guidance?</h2>
          <p>Connect with our counsellors for a personalized roadmap across courses, internships, and placements.</p>
        </div>
        <button onClick={() => go('Contact')}>Enquire Now <ArrowRight size={18}/></button>
      </div>
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
          <article className="card course" onClick={() => openCourse(item)} key={`${category.title}-${item}`}>
            <CourseVisual name={item} category={category.title} />
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
  const fileInputRef = useRef(null);
  const [resume, setResume] = useState(null);
  const [uploadError, setUploadError] = useState('');

  const handleResume = (file) => {
    if (!file) return;
    if (file.type !== 'application/pdf') {
      setUploadError('Please upload a PDF file only.');
      setResume(null);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File must be 5MB or smaller.');
      setResume(null);
      return;
    }
    setUploadError('');
    setResume(file);
  };

  return (
    <section className="page split">
      <div>
        <Title title="Gain Absolute Marketplace Authority Through Technical Internships" />
        <p>Apply to active development, cloud, design and analytics internship roles. Approved candidates join live production feature teams.</p>
        {['Web Development Intern', 'Cloud & DevOps Intern', 'AI/ML Intern', 'UI/UX Design Intern'].map((role) => (
          <div className="job" key={role}><BriefcaseBusiness /><b>{role}</b><span>Apply Now</span></div>
        ))}
      </div>
      <div
        className="upload"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); handleResume(e.dataTransfer.files?.[0]); }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,application/pdf"
          className="srOnly"
          onChange={(e) => handleResume(e.target.files?.[0])}
        />
        <button type="button" className="uploadBtn" onClick={() => fileInputRef.current?.click()} aria-label="Upload resume PDF">
          <Upload size={42} />
        </button>
        <h2>Submit Onboarding Request</h2>
        <p>Drag and drop your engineering resume here (PDF only, max 5MB)</p>
        {resume && <p className="uploadFileName">Selected: {resume.name}</p>}
        {uploadError && <p className="uploadError">{uploadError}</p>}
        <Form button="Submit Internship Application" />
      </div>
    </section>
  );
}

function Placements() {
  const people = [
    ['Amit R.', 'Associate Cloud DevOps Specialist', 22], ['Priya S.', 'Data Analyst', 16],
    ['Rahul K.', 'Full Stack Developer', 16], ['Sneha M.', 'Salesforce Administrator', 19],
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
  return (
    <section className="page blogPage">
      <Title title="Technical Insights, Career Blueprints & Domain Overviews" />
      <div className="blogLead"><p>Practical articles for students planning courses, projects, interviews, internships, and placement preparation.</p></div>
      <div className="blogGrid">
        {blogPosts.map((post) => (
          <article className="blogCard" key={post.title}>
            <div
              className="blogImage"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(2,6,23,.04), rgba(2,6,23,.78)), url(${post.image})`,
                backgroundPosition: post.imagePosition || 'center',
              }}
            >
              <span>{post.category}</span>
            </div>
            <div className="blogBody">
              <div className="blogMeta"><span>{post.readTime}</span><span>SW Multimedia</span></div>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <a className="blogReadBtn">Read Articles <ChevronRight size={16} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
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
    Home: <HomePage go={go} openCourse={openCourse} />, About: <About go={go} />, Courses: <Courses openCourse={openCourse} />,
    Internships: <Internships />, Placements: <Placements />, Blog: <Blog />,
    Gallery: <Gallery />, Contact: <Contact />, Admin: <Admin />, Privacy: <Legal type="Privacy" />,
    Terms: <Legal type="Terms" />, Refund: <Legal type="Refund" />,
  };
  return pages[page] || pages.Home;
}
