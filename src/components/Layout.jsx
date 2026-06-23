import { Menu, X } from 'lucide-react';
import { siWhatsapp } from 'simple-icons';
import logo from '../assets/SW Multimedia Logo.png';
import { navItems } from '../data/content';

export function Announcement() {
  return (
    <div className="ticker">
      <div>
        🔥 Admissions Open for New Batches Across All Domains&nbsp;&nbsp; | &nbsp;&nbsp;
        🚀 Free 1-on-1 Career Counselling&nbsp;&nbsp; | &nbsp;&nbsp;
        🏆 1,000+ Placements Secured&nbsp;&nbsp; | &nbsp;&nbsp;
        🎯 Internship + Placement Support
      </div>
    </div>
  );
}

export function Header({ page, go, open, setOpen }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => go('Home')} aria-label="Go to home">
        <img src={logo} alt="SW Multimedia Logo" className="site-logo" />
        <span className="brandCopy">
          <b>SW Multimedia</b>
          <small>Premium IT Training</small>
        </span>
      </button>
      <nav className={open ? 'show' : ''}>
        {navItems.map((item) => (
          <button
            className={`${page === item ? 'active' : ''} ${item === 'Contact' ? 'cta' : ''}`.trim()}
            onClick={() => go(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </nav>
      <button className="menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="footerCta">
        <div>
          <h2>READY TO START YOUR IT CAREER?</h2>
          <p>Join SW Multimedia today and take the first step towards a successful technology career.</p>
        </div>
        <button onClick={() => go('Contact')}>ENQUIRE NOW →</button>
      </div>
      <div className="footerGrid">
        <div>
          <h3>SW MULTIMEDIA</h3>
          <p>PREMIUM IT TRAINING · INTERNSHIPS · PLACEMENTS.</p>
          <p>Building strong technical skills, real-time project experience and placement confidence for students and professionals.</p>
        </div>
        <div>
          <h4>QUICK LINKS</h4>
          {['About', 'Courses', 'Internships', 'Placements', 'Gallery', 'Contact'].map((item) => (
            <p onClick={() => go(item)} key={item}>{item === 'About' ? 'About Us' : item}</p>
          ))}
        </div>
        <div>
          <h4>COURSES</h4>
          <p>Full Stack Development</p><p>AWS Cloud Training</p><p>DevOps Engineering</p>
          <p>Artificial Intelligence</p><p>Data Science</p><p>Cyber Security</p>
        </div>
        <div>
          <h4>VISIT US</h4>
          <p>📍 SW Multimedia, Chhatrapati Sambhajinagar, Maharashtra, India.</p>
          <p>📞 +91 [Insert Official Phone]</p>
          <p>✉️ admissions@swmultimedia.com</p>
          <p>🕒 Training hours: 9 AM – 8 PM</p>
        </div>
      </div>
      <div className="footerBottom">
        <p style={{ margin: 0, lineHeight: '1.8' }}>
          2026 SW MULTIMEDIA. ALL RIGHTS RESERVED.
          <br /><br />
          LEARN · BUILD · GET PLACED
        </p>
      </div>
    </footer>
  );
}

export function WhatsApp() {
  return (
    <a className="float" href="#contact" aria-label="Open WhatsApp contact">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={siWhatsapp.path} /></svg>
    </a>
  );
}
