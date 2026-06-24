import AboutPage from './AboutPage';
import AdminPage from './AdminPage';
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';
import CoursesPage from './CoursesPage';
import GalleryPage from './GalleryPage';
import HomePage from './HomePage';
import InternshipsPage from './InternshipsPage';
import LegalPage from './LegalPage';
import PlacementsPage from './PlacementsPage';

export { default as CourseDetail } from './CourseDetailPage';

export function renderPage(page, go, openCourse, openArticle) {
  const pages = {
    Home: <HomePage go={go} openCourse={openCourse} />,
    About: <AboutPage go={go} />,
    Courses: <CoursesPage openCourse={openCourse} />,
    Internships: <InternshipsPage />,
    Placements: <PlacementsPage />,
    Blog: <BlogPage openArticle={openArticle} />,
    Gallery: <GalleryPage />,
    Contact: <ContactPage />,
    Admin: <AdminPage />,
    Privacy: <LegalPage type="Privacy" />,
    Terms: <LegalPage type="Terms" />,
    Refund: <LegalPage type="Refund" />,
  };

  return pages[page] || pages.Home;
}
