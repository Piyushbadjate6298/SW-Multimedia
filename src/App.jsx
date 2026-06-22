import { useState } from 'react';
import { Announcement, Footer, Header, WhatsApp } from './components/Layout';
import { CourseDetail, renderPage } from './pages/SitePages';

export default function App() {
  const [page, setPage] = useState('Home');
  const [course, setCourse] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (nextPage) => {
    setCourse(null);
    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openCourse = (name) => {
    setCourse(name);
    setPage('CourseDetail');
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Announcement />
      <Header page={page} go={go} open={menuOpen} setOpen={setMenuOpen} />
      <main>
        {course ? <CourseDetail name={course} /> : renderPage(page, go, openCourse)}
      </main>
      <Footer go={go} />
      <WhatsApp />
    </>
  );
}
