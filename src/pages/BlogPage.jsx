import { useState } from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import { Title } from '../components/Common';
import { blogPosts } from '../data/content';

export default function BlogPage({ openArticle }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))];
  const filtered = filter === 'All' ? blogPosts : blogPosts.filter((post) => post.category === filter);
  const [featured, ...rest] = filtered;

  const open = (slug, event) => {
    event?.stopPropagation?.();
    openArticle(slug);
  };

  return (
    <section className="page blogPage">
      <Title title="Technical Insights, Career Blueprints & Domain Overviews" />
      <div className="blogLead">
        <p>Practical articles for students planning courses, projects, interviews, internships, and placement preparation.</p>
      </div>

      <div className="blogFilters">
        {categories.map((category) => (
          <button key={category} className={filter === category ? 'on' : ''} onClick={() => setFilter(category)}>
            {category}
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
            <div className="blogMeta"><span>{featured.readTime}</span><span>{featured.date}</span></div>
            <h2>{featured.title}</h2>
            <p>{featured.summary}</p>
            <button type="button" className="blogReadBtn" onClick={(event) => open(featured.slug, event)}>
              Read Articles <ChevronRight size={18} />
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
              <div className="blogImageOverlay"><BookOpen size={28} /><span>Read Full Article</span></div>
            </div>
            <div className="blogBody">
              <div className="blogMeta"><span>{post.readTime}</span><span>{post.date}</span></div>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <button type="button" className="blogReadBtn" onClick={(event) => open(post.slug, event)}>
                Read Articles <ChevronRight size={16} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
