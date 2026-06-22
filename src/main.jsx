import logo from "./assets/SW Multimedia Logo.png";

import React, {useMemo, useState} from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BookOpen, BriefcaseBusiness, Building2, CheckCircle2, ChevronRight, Cloud, Code2, GraduationCap, LayoutDashboard, Mail, MapPin, Menu, Phone, PlayCircle, Search, ShieldCheck, Sparkles, Star, Upload, Users, X, Zap } from 'lucide-react';
import PartnerLogo from './components/PartnerLogo';
import { categories, popular, features, steps, posts, partners } from './data/content';
import './styles.css';

const nav = ['Home','About','Courses','Internships','Placements','Corporate','Blog','Gallery','Contact'];
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

function App(){
  const [page,setPage]=useState('Home');
  const [course,setCourse]=useState(null);
  const [open,setOpen]=useState(false);
  const go=(p)=>{setCourse(null);setPage(p);setOpen(false);window.scrollTo(0,0)};
  const openCourse=(name)=>{setCourse(name);setPage('CourseDetail');setOpen(false);window.scrollTo(0,0)};
  return <>
    <Announcement />
    <Header page={page} go={go} open={open} setOpen={setOpen}/>
    <main>{course ? <CourseDetail name={course}/> : renderPage(page, go, openCourse)}</main>
    <Footer go={go}/>
    <WhatsApp />
  </>
}
function Announcement(){return <div className="ticker"><div>🔥 Admissions Open for New Batches Across All Domains&nbsp;&nbsp; | &nbsp;&nbsp;🚀 Free 1-on-1 Career Counselling&nbsp;&nbsp; | &nbsp;&nbsp;🏆 1,000+ Placements Secured&nbsp;&nbsp; | &nbsp;&nbsp;🎯 Internship + Placement Support</div></div>}
function Header({page,go,open,setOpen}){
return <header className="header">
<div className="brand" onClick={()=>go('Home')}>

<img
  src={logo}
  alt="SW Multimedia Logo"
  className="site-logo"
/>

<div>
<b>SW Multimedia</b>
<span>Premium IT Training</span>
</div>

</div><nav className={open?'show':''}>{nav.map(n=><button className={page===n?'active':''} onClick={()=>go(n)} key={n}>{n}</button>)}<button className="cta" onClick={()=>go('Contact')}>Enroll Now</button></nav><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>}

function Hero({go}){return <section className="hero"><div className="heroText"><span className="badge"><Sparkles size={16}/> Premium Ed-Tech Platform</span><h1>Transform Your Career With Industry-Oriented IT Training</h1><p>Learn in-demand technologies through real-time projects, certified tech internships, and robust placement support. Move from concepts to production code under expert guidance.</p><div className="actions"><button onClick={()=>go('Courses')}>Explore Courses <ArrowRight size={18}/></button><button className="secondary" onClick={()=>go('Contact')}>Book Free Counselling</button></div></div><div className="heroArt"><div className="orb"></div><Code2/><Cloud/><LayoutDashboard/><div className="glass"><b>Live Project Lab</b><span>MERN • DevOps • AI • Cloud</span></div></div></section>}
function Home({go,openCourse}){return <><Hero go={go}/><Stats/><Popular openCourse={openCourse}/><Why/><Journey/><Partners/><Testimonials/><FooterCta go={go}/><LeadForm/></>}
function Stats(){return <section className="stats">{[['5000+','Students Trained'],['1000+','Placements Secured'],['100+','Hiring Partners'],['50+','Expert Tech Trainers']].map(x=><div><b>{x[0]}</b><span>{x[1]}</span></div>)}</section>}
function Popular({openCourse}){return <section className="section soft"><Title small="Demanded Courses" title="Build job-ready skills with structured learning tracks"/><div className="grid cards">{popular.map((p,i)=><article className="card course" onClick={()=>openCourse(p)}><Icon i={i}/><h3>{p}</h3><p>{['Master cloud architecture, secure infrastructure automation, and multi-region networks.','Implement CI/CD lifecycles, Docker containers and Kubernetes clusters.','Build scalable client-server apps using React, Node and Next.js.','Develop ML, deep learning, generative AI and automation systems.'][i%4]}</p><a>View Track <ChevronRight size={16}/></a></article>)}</div></section>}

function Icon({i}){const arr=[Cloud,Zap,Code2,Sparkles,LayoutDashboard,ShieldCheck,BriefcaseBusiness,BookOpen]; const C=arr[i%arr.length]; return <div className="icon"><C size={24}/></div>}

function Why(){return <section className="section"><Title small="Why SW Multimedia" title="A premium training ecosystem, not a basic institute website"/><div className="grid featureGrid">{features.map((f,i)=><div className="feature"><CheckCircle2/><h3>{f}</h3><p>{['Learn directly from experienced trainers and certified technology professionals.','Build practical software frameworks inside live hosting and project environments.','Bridge theory and corporate workflow through validated internship pathways.','Access resume building, interview preparation and hiring partner support.','Practice technical, behavioral and project explanation rounds confidently.','Optimize LinkedIn, GitHub, resume and career direction with mentors.'][i]}</p></div>)}</div></section>}

function Journey(){return <section className="section dark"><Title small="Student Journey" title="From enrolment to placement readiness"/><div className="steps">{steps.map((s,i)=><div><b>{i+1}</b><span>{s}</span></div>)}</div></section>}
function Partners(){return <section className="partners" aria-label="Hiring and technology partners"><div className="partnerTrack">{[...partners, ...partners].map((partner,index)=><PartnerLogo partner={partner} key={`${partner.name}-${index}`}/>)}</div></section>}

function Testimonials(){return <section className="section soft"><div className="testimonial"><div className="video"><PlayCircle size={64}/><span>Video Testimonial</span></div><div><span className="badge">Student Success</span><h2>“The production-level MERN stack training transformed my approach to building software.”</h2><p>The integrated internship portfolio helped me prepare for real interviews and build confidence within 3 months of completing my track.</p><b>— Vikram S., Software Engineer</b></div></div></section>}

function LeadForm(){return <section className="lead"><h2>Kickstart Your Transition Into Technical Excellence</h2><p>An admissions analyst will contact you with a course path matching your profile goals.</p><Form button="Submit Application & Book Consultation" dark/></section>}

function Form({button,dark=false}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        alert("Thank you! Your enquiry has been submitted successfully.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          course: "",
          message: ""
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Backend not connected. Please check server.");
      console.log(error);
    }
  };

  return (
    <form className={dark ? "form darkForm" : "form"} onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your full name"
        required
      />

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your mobile number"
        required
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email address"
        required
      />

      <select
        name="course"
        value={formData.course}
        onChange={handleChange}
        required
      >
        <option value="">Select Course Target Domain</option>
        {categories.map((c) => (
          <option key={c.title} value={c.title}>{c.title}</option>
        ))}
      </select>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell us about your educational background or career goals"
      />

      <button type="submit">{button}</button>
    </form>
  );
}
function About(){return <section className="page"><Title title="Building the Future of Enterprise IT Competence"/><p className="big">SW Multimedia functions as a premium technology training, practical internship, and corporate placement ecosystem engineered to transform technical education models.</p><div className="grid featureGrid">{['🌟 Our Mission: Empower 50,000+ technology aspirants globally through expert training and real product challenges.','🎯 Our Vision: Become India’s premier technical training network for elite developer and systems talent.','⚡ Our Core Values: Technical integrity, production-realistic constraints, milestone tracking and transparent benchmarking.','🏢 Infrastructure & Faculty: High-speed training bays, coding sandboxes, cloud labs and expert supervision.'].map(t=><div className="feature"><h3>{t}</h3></div>)}</div></section>}
function Courses({openCourse}){const [active,setActive]=useState('All'); const list=active==='All'?categories:categories.filter(c=>c.title===active); return <section className="page"><Title small="Courses" title="Professional Technology Directories & Tracks"/><div className="filters"><button onClick={()=>setActive('All')} className={active==='All'?'on':''}>All</button>{categories.map(c=><button onClick={()=>setActive(c.title)} className={active===c.title?'on':''}>{c.title}</button>)}</div><div className="grid cards">{list.flatMap(c=>c.items.map(item=><article className="card" onClick={()=>openCourse(item)}><h3>{item}</h3><p><b>{c.title}</b></p><p>Duration: 3–6 Months • Eligibility: Graduate / Final Year • Fees: Contact Counsellor</p><a>Open Course Details <ChevronRight size={16}/></a></article>))}</div></section>}
function CourseDetail({name}){return <section className="page"><span className="badge">Course Detail</span><h1>{name} Training in Chhatrapati Sambhajinagar</h1><div className="metric"><span>⏱️ Duration: 3 - 6 Months</span><span>🎓 Eligibility: Graduate / Final Year Tech Students</span><span>💳 Fees: Transparent Modular Pricing</span></div><div className="detail"><article><h2>Comprehensive Domain Overview</h2><p>This program provides a rigorous deep dive into the targeted technology domain, designed with practical enterprise deployment challenges and portfolio building.</p><h2>Curriculum Syllabus Structure</h2>{['Architectural Foundations, Environment Mechanics, Syntax & Engine Rules','Framework Implementations, Services, Testing & Database Controls','Capstone Deployments, Cloud Pipelines, Performance & Portfolio Hardening'].map((m,i)=><details open={i===0}><summary>Module {i+1}</summary><p>{m}</p></details>)}<h2>Projects, Certification & Placement</h2><p>Build three live applications, earn SW Multimedia certification, and get resume, LinkedIn, mock interview and hiring partner support.</p><h2>FAQs</h2><p><b>Weekend options?</b> Yes, hybrid weekend schedules are available. <br/><b>Internship approval?</b> After Module 2 and code review, eligible students enter live project workflows.</p></article><aside><h3>Enquire Now</h3><Form button="Request Counselling"/></aside></div></section>}
function Internships(){return <section className="page split"><div><Title title="Gain Absolute Marketplace Authority Through Technical Internships"/><p>Apply to active development, cloud, design and analytics internship roles. Approved candidates join live production feature teams.</p>{['Web Development Intern','Cloud & DevOps Intern','AI/ML Intern','UI/UX Design Intern'].map(x=><div className="job"><BriefcaseBusiness/> <b>{x}</b><span>Apply Now</span></div>)}</div><div className="upload"><Upload size={42}/><h2>Submit Onboarding Request</h2><p>Drag and drop your engineering resume here (PDF only, max 5MB)</p><Form button="Submit Internship Application"/></div></section>}
function Placements(){return <section className="page"><Title title="Verified Placements Analytics & Success Records"/><Stats/><div className="grid cards">{['Amit R.','Priya S.','Rahul K.','Sneha M.'].map((n,i)=><article className="card profile"><div className="avatar">{n[0]}</div><h3>{n}</h3><p>{['Associate Cloud DevOps Specialist','Data Analyst','Full Stack Developer','Salesforce Administrator'][i]}</p><b>{[6.8,5.4,7.2,5.8][i]} LPA Package Secured</b><a>▶ Watch Video Review</a></article>)}</div></section>}
function Corporate(){return <section className="page split"><div><Title title="Scalable Enterprise IT Up-Skilling Solutions"/><p>Custom programs for Cloud, DevOps, Cyber Security, AI, Salesforce, Data Engineering and Generative AI teams.</p></div><div><Form button="Request Custom Enterprise Training Proposal"/></div></section>}
function Blog(){return <section className="page"><Title title="Technical Insights, Career Blueprints & Domain Overviews"/><div className="grid cards">{posts.map(p=><article className="card"><span className="badge">Career Guidance</span><h3>{p}</h3><p>Read practical guidance from SW Multimedia trainers and placement mentors.</p><a>Read Article</a></article>)}</div></section>}
function Events(){return <section className="page"><Title title="Scheduled Technical Webinars, Workshops & Hackathons"/><div className="event"><h2>Mastering Next.js Server Actions & Edge Performance Architecture</h2><p>📅 July 14, 2026 | 📍 Campus Arena Bay A & Virtual Streaming | 🏷️ Free Community Event</p><button>Secure Access Seat Slot</button></div></section>}
function Gallery(){return <section className="page"><Title title="Advanced Technical Campus, Training Bays & Events Gallery"/><div className="masonry">{['Campus Infrastructure','Workshops','Placement Ceremonies','Hackathon Events','Classroom Training Zones','Corporate Sessions'].map(x=><div><span>{x}</span></div>)}</div></section>}
function Contact(){return <section className="page split"><div><Title title="Connect With Our Academic Operations Command"/><p><MapPin/> SW Multimedia Training Headquarters, Chhatrapati Sambhajinagar, Maharashtra, India.</p><p><Phone/> +91 [Insert Official Phone]</p><p><Mail/> admissions@swmultimedia.com</p><button className="whats">Initialize Live Conversation via WhatsApp</button></div><Form button="Transmit Secure Help Request"/></section>}
function Admin(){return <section className="page"><Title title="SW Multimedia Corporate Admin Dashboard"/><div className="admin"><aside>{['Dashboard Home','Lead Management','Curricular Content','Article Editor','Placement Registry','Media Gallery','Events','Internship Approvals'].map(x=><button>{x}</button>)}</aside><div><h2>Live Intake Pipeline</h2><div className="metric"><span>Total Leads: 4,812</span><span>Pending: 214</span><span>Converted: 3,120</span></div><table><tbody>{['Ramesh Jadhav','Priya Shinde','Aarav Patil'].map((n,i)=><tr><td>L-8819{i}</td><td>{n}</td><td>{['Cloud DevOps','Data Science','Full Stack'][i]}</td><td>{['FOLLOW-UP','CONVERTED','NEW'][i]}</td></tr>)}</tbody></table><button>Extract CSV</button></div></div></section>}
function Legal({type}){const text={Privacy:'SW Multimedia enforces stringent database processing constraints regarding user diagnostic tracking telemetry and storage. No individual record blocks or contact coordinates will be distributed, leased, or sold.',Terms:'Users accessing SW Multimedia platforms agree to respect institutional property boundaries and avoid malicious exploitation, scraping, or unauthorized attempts.',Refund:'All finalized course seat reservations, laboratory confirmation charges, or receipt amounts are irrevocable once account configuration is validated.'}; return <section className="page"><Title title={`${type} Policy`}/><p className="big">{text[type]}</p></section>}
function Title({small,title}){return <div className="title">{small&&<span>{small}</span>}<h1>{title}</h1></div>}
function FooterCta({go}) {
  return (
    <section className="footerCta">
      <div>
        <h2>READY TO START YOUR IT CAREER?</h2>
        <p>Join SW Multimedia today and take the first step towards a successful technology career.</p>
      </div>
      <button onClick={() => go('Contact')}>ENQUIRE NOW →</button>
    </section>
  );
}
function Footer({go}) {
  return (
    <footer className="footer">
      <div className="footerGrid">
        <div>
          <h3>SW MULTIMEDIA</h3>
          <p>PREMIUM IT TRAINING · INTERNSHIPS · PLACEMENTS.</p>
          <p>
            Building strong technical skills, real-time project experience and placement confidence for students and professionals.
          </p>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <p onClick={() => go('About')}>About Us</p>
          <p onClick={() => go('Courses')}>Courses</p>
          <p onClick={() => go('Internships')}>Internships</p>
          <p onClick={() => go('Placements')}>Placements</p>
          <p onClick={() => go('Gallery')}>Gallery</p>
          <p onClick={() => go('Contact')}>Contact</p>
        </div>

        <div>
          <h4>COURSES</h4>
          <p>Full Stack Development</p>
          <p>AWS Cloud Training</p>
          <p>DevOps Engineering</p>
          <p>Artificial Intelligence</p>
          <p>Data Science</p>
          <p>Cyber Security</p>
        </div>

        <div>
          <h4>VISIT US</h4>
          <p>📍 SW Multimedia <p>
          </p> Chhatrapati Sambhajinagar, Maharashtra, India.</p>
          <p>📞 +91 [Insert Official Phone]</p>
          <p>✉️ admissions@swmultimedia.com</p>
          <p>🕒 Training hours: 9 AM – 8 PM</p>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2026 SW MULTIMEDIA. ALL RIGHTS RESERVED.</p>
        <p>LEARN · BUILD · GET PLACED</p>
      </div>
    </footer>
  );
}
function WhatsApp(){return <a className="float" href="#contact">WhatsApp</a>}
function renderPage(p,go,openCourse){return ({Home:<Home go={go} openCourse={openCourse}/>,About:<About/>,Courses:<Courses openCourse={openCourse}/>,Internships:<Internships/>,Placements:<Placements/>,Corporate:<Corporate/>,Blog:<Blog/>,Gallery:<Gallery/>,Contact:<Contact/>,Admin:<Admin/>,Privacy:<Legal type="Privacy"/>,Terms:<Legal type="Terms"/>,Refund:<Legal type="Refund"/>}[p] || <Home go={go} openCourse={openCourse}/>) }
createRoot(document.getElementById('root')).render(<App/>);
