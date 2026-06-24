import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Title } from '../components/Common';
import CourseVisual from '../components/CourseVisual';
import { categories } from '../data/content';

export default function CoursesPage({ openCourse }) {
  const [active, setActive] = useState('All');
  const list = active === 'All' ? categories : categories.filter((category) => category.title === active);

  return (
    <section className="page">
      <Title small="Courses" title="Professional Technology Directories & Tracks" />
      <div className="filters">
        <button onClick={() => setActive('All')} className={active === 'All' ? 'on' : ''}>All</button>
        {categories.map((category) => (
          <button key={category.title} onClick={() => setActive(category.title)} className={active === category.title ? 'on' : ''}>
            {category.title}
          </button>
        ))}
      </div>
      <div className="grid cards">
        {list.flatMap((category) => category.items.map((item) => (
          <article key={`${category.title}-${item}`} className="card course" onClick={() => openCourse(item)}>
            <CourseVisual name={item} category={category.title} />
            <h3>{item}</h3>
            <p><b>{category.title}</b></p>
            <p>Duration: 3-6 Months - Eligibility: Graduate / Final Year - Fees: Contact Counsellor</p>
            <a>Open Course Details <ChevronRight size={16} /></a>
          </article>
        )))}
      </div>
    </section>
  );
}
