import logo from "./assets/SW Multimedia Logo.png";

import React, {useMemo, useRef, useState} from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ArrowLeft, BookOpen, BriefcaseBusiness, Building2, CheckCircle2, ChevronRight, Cloud, Code2, GraduationCap, LayoutDashboard, Mail, MapPin, Menu, Phone, PlayCircle, Search, ShieldCheck, Sparkles, Star, Upload, Users, X, Zap } from 'lucide-react';
import CourseVisual from './components/CourseVisual';
import PartnerLogo from './components/PartnerLogo';
import { categories, popular, features, journeySteps, posts, blogPosts, galleryItems, partners, getBlogPost, aboutHero, aboutPillars, aboutHighlights, aboutStats } from './data/content';
import { siWhatsapp } from 'simple-icons';
import './styles.css';

const nav = ['Home','About','Courses','Internships','Placements','Blog','Gallery','Contact'];
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

function App(){
  const [page,setPage]=useState('Home');
  const [course,setCourse]=useState(null);
  const [article,setArticle]=useState(null);
  const [open,setOpen]=useState(false);
  const go=(p)=>{setCourse(null);setArticle(null);setPage(p);setOpen(false);window.scrollTo(0,0)};
  const openCourse=(name)=>{setArticle(null);setCourse(name);setPage('CourseDetail');setOpen(false);window.scrollTo(0,0)};
  const openArticle=(slug)=>{setCourse(null);setArticle(slug);setPage('Blog');setOpen(false);window.scrollTo(0,0)};
  const closeArticle=()=>{setArticle(null);window.scrollTo(0,0)};
  return <>
    <Announcement />
    <Header page={page} go={go} open={open} setOpen={setOpen}/>
    <main>{course ? <CourseDetail name={course}/> : article ? <BlogArticle slug={article} onBack={closeArticle} openArticle={openArticle} go={go}/> : renderPage(page, go, openCourse, openArticle)}</main>
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

</div><nav className={open?'show':''}>{nav.map(n=><button className={`${page===n?'active':''} ${n==='Contact'?'cta':''}`.trim()} onClick={()=>go(n)} key={n}>{n}</button>)}</nav><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>}

function Hero({go}){return <section className="hero"><div className="heroText"><span className="badge"><Sparkles size={16}/> Premium Ed-Tech Platform</span><h1>Transform Your Career With Industry-Oriented IT Training</h1><p>Learn in-demand technologies through real-time projects, certified tech internships, and robust placement support. Move from concepts to production code under expert guidance.</p><div className="actions"><button onClick={()=>go('Courses')}>Explore Courses <ArrowRight size={18}/></button><button className="secondary" onClick={()=>go('Contact')}>Book Free Counselling</button></div></div><div className="heroArt"><div className="orb"></div><Code2/><Cloud/><LayoutDashboard/><div className="glass"><b>Live Project Lab</b><span>MERN • DevOps • AI • Cloud</span></div></div></section>}
function Home({go,openCourse}){return <><Hero go={go}/><Stats/><Popular openCourse={openCourse}/><Why/><Journey/><Partners/><Testimonials/><FooterCta go={go}/><LeadForm/></>}
function Stats(){return <section className="stats">{[['5000+','Students Trained'],['1000+','Placements Secured'],['100+','Hiring Partners'],['50+','Expert Tech Trainers']].map((x,i)=><div key={`stat-${i}`}><b>{x[0]}</b><span>{x[1]}</span></div>)}</section>}
function Popular({openCourse}){return <section className="section soft"><Title small="Demanded Courses" title="Build job-ready skills with structured learning tracks"/><div className="grid cards">{popular.map((p,i)=><article key={`popular-${i}`} className="card course" onClick={()=>openCourse(p)}><CourseVisual name={p} variant="stack"/><h3>{p}</h3><p>{['Master cloud architecture, secure infrastructure automation, and multi-region networks.','Implement CI/CD lifecycles, Docker containers and Kubernetes clusters.','Build scalable client-server apps using React, Node and Next.js.','Develop ML, deep learning, generative AI and automation systems.'][i%4]}</p><a>View Track <ChevronRight size={16}/></a></article>)}</div></section>}

function Icon({i}){const arr=[Cloud,Zap,Code2,Sparkles,LayoutDashboard,ShieldCheck,BriefcaseBusiness,BookOpen]; const C=arr[i%arr.length]; return <div className="icon"><C size={24}/></div>}

function Why(){return <section className="section"><Title small="Why SW Multimedia" title="A premium training ecosystem, not a basic institute website"/><div className="grid featureGrid">{features.map((f,i)=><div className="feature" key={`feat-${i}`}><CourseVisual name={f} variant="feature"/><h3>{f}</h3><p>{['Learn directly from experienced trainers and certified technology professionals.','Build practical software frameworks inside live hosting and project environments.','Bridge theory and corporate workflow through validated internship pathways.','Access resume building, interview preparation and hiring partner support.','Practice technical, behavioral and project explanation rounds confidently.','Optimize LinkedIn, GitHub, resume and career direction with mentors.'][i]}</p></div>)}</div></section>}

function Journey(){
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);

  const imageArr = journeySteps.map(step => step.image);
  const previewIndex = active ?? hovered;

  return (
    <section className="section dark journeyShowcase">
      <Title small="Student Journey" title="From enrolment to placement readiness"/>

      <div className="steps interactive">
        {journeySteps.map((s,i)=>{
          return (
            <div className="step" key={`step-${i}`} onMouseEnter={()=>setHovered(i)} onMouseLeave={()=>setHovered(null)} onClick={()=>setActive(i)}>
              <div className="stepIcon" style={{backgroundImage:`url(${s.image})`, backgroundPosition:s.imagePosition || 'center'}} />
              <b>{String(i + 1).padStart(2, '0')}</b>
              <span>{s.title}</span>
              <small>{s.tag}</small>
              <p>{s.text}</p>
            </div>
          )
        })}
      </div>

      {previewIndex !== null && (
        <div className={`journeyModal ${active === null ? 'hoverModal' : ''}`} role="dialog" onClick={()=>setActive(null)}>
          <div className="journeyModalContent" onClick={e=>e.stopPropagation()}>
            <div className="journeyModalIcon">
              <img src={imageArr[previewIndex]} alt={`${journeySteps[previewIndex].title} student journey`} className="journeyImageLarge"/>
            </div>
            <h3>{journeySteps[previewIndex].title}</h3>
            <p>{journeySteps[previewIndex].text}</p>
            {active !== null && <button className="cta" onClick={()=>setActive(null)}>Close</button>}
          </div>
        </div>
      )}
    </section>
  )
}
function Partners(){return <section className="partners" aria-label="Hiring and technology partners"><div className="partnerTrack">{[...partners, ...partners].map((partner,index)=><PartnerLogo partner={partner} key={`${partner.name}-${index}`}/>)}</div></section>}

function Testimonials(){return <section className="section soft"><div className="testimonial"><div className="video"><PlayCircle size={64}/><span>Video Testimonial</span></div><div><span className="badge">Student Success</span><h2>“The production-level MERN stack training transformed my approach to building software.”</h2><p>The integrated internship portfolio helped me prepare for real interviews and build confidence within 3 months of completing my track.</p><b>— Mr. Sachin Wathore </b></div></div></section>}

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
            <button onClick={() => go('Courses')}>Explore Courses <ArrowRight size={18}/></button>
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
          <div key={label}>
            <b>{value}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="aboutPillarsSection">
        <Title small="Who We Are" title="Mission, Vision, Values & Infrastructure"/>
        <div className="aboutPillarTabs">
          {aboutPillars.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={activePillar === index ? 'on' : ''}
              onClick={() => setActivePillar(index)}
            >
              <span>{item.tag}</span>
              <b>{item.title}</b>
            </button>
          ))}
        </div>
        <div className="aboutPillarPanel">
          <div className="aboutPillarImageWrap">
            <div
              className="aboutPillarImage"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(2,6,23,.08), rgba(2,6,23,.72)), url(${pillar.image})`,
                backgroundPosition: pillar.imagePosition || 'center',
              }}
            >
              <span>{pillar.tag}</span>
            </div>
          </div>
          <div className="aboutPillarBody">
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
            <button type="button" className="blogReadBtn" onClick={() => go('Contact')}>
              Talk to Our Team <ChevronRight size={16}/>
            </button>
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
                <div
                  className="aboutHighlightImage"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(2,6,23,.06), rgba(2,6,23,.78)), url(${item.image})` }}
                >
                  <BookOpen size={22}/>
                </div>
              </div>
              <div className="aboutHighlightBody">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
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
function Courses({openCourse}){const [active,setActive]=useState('All'); const list=active==='All'?categories:categories.filter(c=>c.title===active); return <section className="page"><Title small="Courses" title="Professional Technology Directories & Tracks"/><div className="filters"><button onClick={()=>setActive('All')} className={active==='All'?'on':''}>All</button>{categories.map(c=><button key={c.title} onClick={()=>setActive(c.title)} className={active===c.title?'on':''}>{c.title}</button>)}</div><div className="grid cards">{list.flatMap(c=>c.items.map((item,idx)=><article key={`${c.title}-${idx}`} className="card course" onClick={()=>openCourse(item)}><CourseVisual name={item} category={c.title}/><h3>{item}</h3><p><b>{c.title}</b></p><p>Duration: 3–6 Months • Eligibility: Graduate / Final Year • Fees: Contact Counsellor</p><a>Open Course Details <ChevronRight size={16}/></a></article>))}</div></section>}
function CourseDetail({name}){return <section className="page"><span className="badge">Course Detail</span><h1>{name} Training in Chhatrapati Sambhajinagar</h1><div className="metric"><span>⏱️ Duration: 3 - 6 Months</span><span>🎓 Eligibility: Graduate / Final Year Tech Students</span><span>💳 Fees: Transparent Modular Pricing</span></div><div className="detail"><article><h2>Comprehensive Domain Overview</h2><p>This program provides a rigorous deep dive into the targeted technology domain, designed with practical enterprise deployment challenges and portfolio building.</p><h2>Curriculum Syllabus Structure</h2>{['Architectural Foundations, Environment Mechanics, Syntax & Engine Rules','Framework Implementations, Services, Testing & Database Controls','Capstone Deployments, Cloud Pipelines, Performance & Portfolio Hardening'].map((m,i)=><details open={i===0}><summary>Module {i+1}</summary><p>{m}</p></details>)}<h2>Projects, Certification & Placement</h2><p>Build three live applications, earn SW Multimedia certification, and get resume, LinkedIn, mock interview and hiring partner support.</p><h2>FAQs</h2><p><b>Weekend options?</b> Yes, hybrid weekend schedules are available. <br/><b>Internship approval?</b> After Module 2 and code review, eligible students enter live project workflows.</p></article><aside><h3>Enquire Now</h3><Form button="Request Counselling"/></aside></div></section>}
function Internships(){
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
        <Title title="Gain Absolute Marketplace Authority Through Technical Internships"/>
        <p>Apply to active development, cloud, design and analytics internship roles. Approved candidates join live production feature teams.</p>
        {['Web Development Intern','Cloud & DevOps Intern','AI/ML Intern','UI/UX Design Intern'].map((x,i)=>(
          <div key={`intern-${i}`} className="job"><BriefcaseBusiness/> <b>{x}</b><span>Apply Now</span></div>
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
          <Upload size={42}/>
        </button>
        <h2>Submit Onboarding Request</h2>
        <p>Drag and drop your engineering resume here (PDF only, max 5MB)</p>
        {resume && <p className="uploadFileName">Selected: {resume.name}</p>}
        {uploadError && <p className="uploadError">{uploadError}</p>}
        <Form button="Submit Internship Application"/>
      </div>
    </section>
  );
}
function Placements(){return <section className="page"><Title title="Verified Placements Analytics & Success Records"/><Stats/><div className="grid cards">{['Amit R.','Priya S.','Rahul K.','Sneha M.'].map((n,i)=><article key={`placement-${i}`} className="card profile"><div className="avatar">{n[0]}</div><h3>{n}</h3><p>{['Associate Cloud DevOps Specialist','Data Analyst','Full Stack Developer','Salesforce Administrator'][i]}</p><b>{[22,16,16,19][i]} LPA Package Secured</b></article>)}</div></section>}
function Corporate(){return <section className="page split"><div><Title title="Scalable Enterprise IT Up-Skilling Solutions"/><p>Custom programs for Cloud, DevOps, Cyber Security, AI, Salesforce, Data Engineering and Generative AI teams.</p></div><div><Form button="Request Custom Enterprise Training Proposal"/></div></section>}
function Blog({ openArticle }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];
  const filtered = filter === 'All' ? blogPosts : blogPosts.filter((post) => post.category === filter);
  const [featured, ...rest] = filtered;

  const open = (slug, e) => {
    e?.stopPropagation?.();
    openArticle(slug);
  };

  return (
    <section className="page blogPage">
      <Title title="Technical Insights, Career Blueprints & Domain Overviews"/>
      <div className="blogLead">
        <p>Practical articles for students planning courses, projects, interviews, internships, and placement preparation.</p>
      </div>

      <div className="blogFilters">
        {categories.map((cat) => (
          <button key={cat} className={filter === cat ? 'on' : ''} onClick={() => setFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {featured && (
        <article className="blogFeatured" onClick={() => openArticle(featured.slug)}>
          <div
            className="blogFeaturedImage"
            style={{
              backgroundImage: `linear-gradient(120deg, rgba(2,6,23,.18), rgba(2,6,23,.72)), url(${featured.image})`,
              backgroundPosition: featured.imagePosition || 'center',
            }}
          >
            <span className="blogFeaturedBadge">{featured.category}</span>
          </div>
          <div className="blogFeaturedBody">
            <div className="blogMeta">
              <span>{featured.readTime}</span>
              <span>{featured.date}</span>
            </div>
            <h2>{featured.title}</h2>
            <p>{featured.summary}</p>
            <button type="button" className="blogReadBtn" onClick={(e) => open(featured.slug, e)}>
              Read Articles <ChevronRight size={18}/>
            </button>
          </div>
        </article>
      )}

      <div className="blogGrid">
        {rest.map((post) => (
          <article key={post.slug} className="blogCard" onClick={() => openArticle(post.slug)}>
            <div
              className="blogImage"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(2,6,23,.04), rgba(2,6,23,.78)), url(${post.image})`,
                backgroundPosition: post.imagePosition || 'center',
              }}
            >
              <span>{post.category}</span>
              <div className="blogImageOverlay">
                <BookOpen size={28}/>
                <span>Read Full Article</span>
              </div>
            </div>
            <div className="blogBody">
              <div className="blogMeta">
                <span>{post.readTime}</span>
                <span>{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <button type="button" className="blogReadBtn" onClick={(e) => open(post.slug, e)}>
                Read Articles <ChevronRight size={16}/>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlogArticle({ slug, onBack, openArticle, go }) {
  const post = getBlogPost(slug);
  if (!post) {
    return (
      <section className="page blogArticlePage">
        <button type="button" className="blogBackBtn" onClick={onBack}><ArrowLeft size={18}/> Back to Blog</button>
        <Title title="Article Not Found"/>
        <p className="big">This article is unavailable. Browse other insights on the blog page.</p>
        <button type="button" className="blogReadBtn blogReadBtnLarge" onClick={onBack}>Browse Articles</button>
      </section>
    );
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <section className="page blogArticlePage">
      <button type="button" className="blogBackBtn" onClick={onBack}><ArrowLeft size={18}/> Back to Blog</button>

      <div
        className="blogArticleHero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(2,6,23,.28), rgba(2,6,23,.78)), url(${post.image})`,
          backgroundPosition: post.imagePosition || 'center',
        }}
      >
        <span className="badge">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="blogMeta blogMetaLight">
          <span>{post.readTime}</span>
          <span>{post.date}</span>
          <span>SW Multimedia</span>
        </div>
      </div>

      <div className="blogArticleLayout">
        <article className="blogArticleContent">
          <p className="blogArticleIntro">{post.summary}</p>
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </article>

        <aside className="blogArticleAside">
          <div className="blogAsideCard">
            <h3>Key Takeaways</h3>
            <ul>
              {post.highlights.map((item) => (
                <li key={item}><CheckCircle2 size={16}/> {item}</li>
              ))}
            </ul>
          </div>
          <div className="blogAsideCard blogAsideCta">
            <h3>Need Career Guidance?</h3>
            <p>Book a free counselling session and get a course roadmap matched to your profile.</p>
            <button type="button" className="blogReadBtn blogReadBtnLarge" onClick={() => go('Contact')}>
              Book Free Counselling <ArrowRight size={16}/>
            </button>
          </div>
        </aside>
      </div>

      <div className="blogRelated">
        <Title small="Continue Reading" title="More Articles For You"/>
        <div className="blogGrid blogRelatedGrid">
          {related.map((item) => (
            <article key={item.slug} className="blogCard" onClick={() => openArticle(item.slug)}>
              <div
                className="blogImage"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(2,6,23,.04), rgba(2,6,23,.78)), url(${item.image})`,
                  backgroundPosition: item.imagePosition || 'center',
                }}
              >
                <span>{item.category}</span>
              </div>
              <div className="blogBody">
                <div className="blogMeta"><span>{item.readTime}</span><span>{item.date}</span></div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <button type="button" className="blogReadBtn" onClick={(e) => { e.stopPropagation(); openArticle(item.slug); }}>
                  Read Articles <ChevronRight size={16}/>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function Events(){return <section className="page"><Title title="Scheduled Technical Webinars, Workshops & Hackathons"/><div className="event"><h2>Mastering Next.js Server Actions & Edge Performance Architecture</h2><p>📅 July 14, 2026 | 📍 Campus Arena Bay A & Virtual Streaming | 🏷️ Free Community Event</p><button>Secure Access Seat Slot</button></div></section>}
function Gallery(){return <section className="page"><Title title="Advanced Technical Campus, Training Bays & Events Gallery"/><div className="masonry galleryGrid">{galleryItems.map((item,i)=><div key={`gallery-${i}`} className="galleryTile" style={{backgroundImage:`linear-gradient(180deg, rgba(2,6,23,.06), rgba(2,6,23,.74)), url(${item.image})`, backgroundPosition:item.position}}><span>{item.title}</span></div>)}</div></section>}
function Contact() {
  return (
    <section className="page split">
      <div>
        <Title title="Connect With Our Academic Operations Command" />

        <p>
          <MapPin />
          {" "}SW Multimedia.
          <br />
          S 06, 2nd Floor, Khinvasara August High Street,
          Ulkanagari, Chhatrapati Sambhajinagar - 431001,
          Maharashtra, India.
        </p>

        <p>
          <Phone /> +91 9112166105
          <br />
          <Phone /> +91 9011359616
        </p>

        <p>
          <Mail /> swmultimedia2023@gmail.com
        </p>

        <button className="whats">
          Initialize Live Conversation via WhatsApp
        </button>
      </div>

      <Form button="Transmit Secure Help Request" />
    </section>
  );
}function Admin(){return <section className="page"><Title title="SW Multimedia Corporate Admin Dashboard"/><div className="admin"><aside>{['Dashboard Home','Lead Management','Curricular Content','Article Editor','Placement Registry','Media Gallery','Events','Internship Approvals'].map((x,i)=><button key={`menu-${i}`}>{x}</button>)}</aside><div><h2>Live Intake Pipeline</h2><div className="metric"><span>Total Leads: 4,812</span><span>Pending: 214</span><span>Converted: 3,120</span></div><table><tbody>{['Ramesh Jadhav','Priya Shinde','Aarav Patil'].map((n,i)=><tr key={`lead-${i}`}><td>L-8819{i}</td><td>{n}</td><td>{['Cloud DevOps','Data Science','Full Stack'][i]}</td><td>{['FOLLOW-UP','CONVERTED','NEW'][i]}</td></tr>)}</tbody></table><button>Extract CSV</button></div></div></section>}
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
          <div className="footerBottom">
            <p>
              2022 SW MULTIMEDIA. ALL RIGHTS RESERVED. LEARN · BUILD · GET PLACED
            </p>
          </div>
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
          <p>📍 SW Multimedia<br/> S 06, 2nd Floor, Khinvasara August High Street, Ulkanagari, Chhatrapati Sambhajinagar - 431001, Maharashtra, India.</p>
          <p>📞 +91 9112166105 <br/>
          📞 +91 9011359616 </p>
          <p>✉️ swmultimedia2023@gmail.com </p>
          <p>🕒 Training hours: 10 AM – 7 PM</p>
        </div>
      </div>

    </footer>
  );
}
function WhatsApp(){return <a className="float" href="#contact" aria-label="Open WhatsApp contact"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={siWhatsapp.path}/></svg></a>}
function renderPage(p,go,openCourse,openArticle){return ({Home:<Home go={go} openCourse={openCourse}/>,About:<About go={go}/>,Courses:<Courses openCourse={openCourse}/>,Internships:<Internships/>,Placements:<Placements/>,Blog:<Blog openArticle={openArticle}/>,Gallery:<Gallery/>,Contact:<Contact/>,Admin:<Admin/>,Privacy:<Legal type="Privacy"/>,Terms:<Legal type="Terms"/>,Refund:<Legal type="Refund"/>}[p] || <Home go={go} openCourse={openCourse}/>) }
createRoot(document.getElementById('root')).render(<App/>);
