import {
  BookOpen, BriefcaseBusiness, CheckCircle2, Cloud, Code2,
  LayoutDashboard, ShieldCheck, Sparkles, Zap,
} from 'lucide-react';
import { categories } from '../data/content';

export function Title({ small, title }) {
  return <div className="title">{small && <span>{small}</span>}<h1>{title}</h1></div>;
}

export function FeatureIcon({ index }) {
  const icons = [Cloud, Zap, Code2, Sparkles, LayoutDashboard, ShieldCheck, BriefcaseBusiness, BookOpen];
  const Icon = icons[index % icons.length];
  return <div className="icon"><Icon size={24} /></div>;
}

export function Form({ button, dark = false }) {
  return (
    <form className={dark ? 'form darkForm' : 'form'} onSubmit={(event) => {
      event.preventDefault();
      alert('Thank you! This demo form is ready for backend integration.');
    }}>
      <input aria-label="Full name" placeholder="Enter your full name" />
      <input aria-label="Mobile number" placeholder="Enter your mobile number" />
      <input aria-label="Email address" placeholder="Enter your email address" />
      <select aria-label="Course target domain" defaultValue="">
        <option value="" disabled>Select Course Target Domain</option>
        {categories.map((category) => <option key={category.title}>{category.title}</option>)}
      </select>
      <textarea aria-label="Educational background or career goals" placeholder="Tell us about your educational background or career goals" />
      <button>{button}</button>
    </form>
  );
}

export function Stats() {
  const stats = [['5000+', 'Students Trained'], ['1000+', 'Placements Secured'], ['100+', 'Hiring Partners'], ['50+', 'Expert Tech Trainers']];
  return (
    <section className="stats">
      {stats.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}
    </section>
  );
}

export { CheckCircle2 };
