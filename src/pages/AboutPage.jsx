import { useState } from 'react';
import { ArrowRight, BookOpen, Building2, ChevronRight, GraduationCap, Users } from 'lucide-react';
import { Title } from '../components/Common';
import { aboutHero, aboutHighlights, aboutPillars, aboutStats } from '../data/content';

export default function AboutPage({ go }) {
  const [activePillar, setActivePillar] = useState(0);
  const [hoverHighlight, setHoverHighlight] = useState(null);
  const pillar = aboutPillars[activePillar];

  return (
    <section className="page aboutPage">
      <div className="aboutHero">
        <div className="aboutHeroCopy">
          <span className="badge"><Building2 size={16} /> About SW Multimedia</span>
          <h1>{aboutHero.title}</h1>
          <p className="big">{aboutHero.subtitle}</p>
          <div className="aboutHeroActions">
            <button onClick={() => go('Courses')}>Explore Courses <ArrowRight size={18} /></button>
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
          <div className="aboutHeroBadge"><GraduationCap size={18} /> Premium IT Training Campus</div>
        </div>
      </div>

      <div className="aboutStatsStrip">
        {aboutStats.map(([value, label]) => (
          <div key={label}><b>{value}</b><span>{label}</span></div>
        ))}
      </div>

      <div className="aboutPillarsSection">
        <Title small="Who We Are" title="Mission, Vision, Values & Infrastructure" />
        <div className="aboutPillarTabs">
          {aboutPillars.map((item, index) => (
            <button key={item.title} type="button" className={activePillar === index ? 'on' : ''} onClick={() => setActivePillar(index)}>
              <div
                className="aboutPillarTabImage"
                aria-hidden="true"
              >
                <img src={item.image} alt="" />
                <span />
              </div>
              <span>{item.tag}</span>
              <b>{item.title}</b>
            </button>
          ))}
        </div>
        <div className="aboutPillarPanel">
          <div className="aboutPillarImageWrap">
            <div className="aboutPillarImage">
              <img src={pillar.image} alt={`${pillar.title} - ${pillar.tag}`} />
              <div className="aboutPillarImageShade" />
              <span>{pillar.tag}</span>
            </div>
          </div>
          <div className="aboutPillarBody">
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
            <button type="button" className="blogReadBtn" onClick={() => go('Contact')}>Talk to Our Team <ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      <div className="aboutHighlightsSection">
        <Title small="Campus & Culture" title="An Interactive Learning Environment Built for Results" />
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
                  <BookOpen size={22} />
                </div>
              </div>
              <div className="aboutHighlightBody"><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </div>

      <div className="aboutCta">
        <div>
          <span className="badge"><Users size={16} /> Join SW Multimedia</span>
          <h2>Ready to Build Your IT Career With Expert Guidance?</h2>
          <p>Connect with our counsellors for a personalized roadmap across courses, internships, and placements.</p>
        </div>
        <button onClick={() => go('Contact')}>Enquire Now <ArrowRight size={18} /></button>
      </div>
    </section>
  );
}
