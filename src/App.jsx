import { useState } from 'react';
import { Announcement, Footer, Header, InstagramFloat, WhatsApp } from './components/Layout';
import BlogArticlePage from './pages/BlogArticlePage';
import { CourseDetail, renderPage } from './pages/SitePages';

export default function App() {
  const [page, setPage] = useState('Home');
  const [course, setCourse] = useState(null);
  const [article, setArticle] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (nextPage) => {
    setCourse(null);
    setArticle(null);
    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openCourse = (name) => {
    setCourse(name);
    setArticle(null);
    setPage('CourseDetail');
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openArticle = (slug) => {
    setCourse(null);
    setArticle(slug);
    setPage('Blog');
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const closeArticle = () => {
    setArticle(null);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Announcement />
      <Header page={page} go={go} open={menuOpen} setOpen={setMenuOpen} />
      <main>
        {course && <CourseDetail name={course} />}
        {!course && article && <BlogArticlePage slug={article} onBack={closeArticle} openArticle={openArticle} go={go} />}
        {!course && !article && renderPage(page, go, openCourse, openArticle)}
      </main>
      <Footer go={go} />
      <InstagramFloat />
      <WhatsApp />
    </>
  );
}
