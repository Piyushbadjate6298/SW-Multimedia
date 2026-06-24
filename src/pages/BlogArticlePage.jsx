import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Title } from '../components/Common';
import { blogPosts, getBlogPost } from '../data/content';

export default function BlogArticlePage({ slug, onBack, openArticle, go }) {
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <section className="page blogArticlePage">
        <button type="button" className="blogBackBtn" onClick={onBack}><ArrowLeft size={18} /> Back to Blog</button>
        <Title title="Article Not Found" />
        <p className="big">This article is unavailable. Browse other insights on the blog page.</p>
        <button type="button" className="blogReadBtn blogReadBtnLarge" onClick={onBack}>Browse Articles</button>
      </section>
    );
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <section className="page blogArticlePage">
      <button type="button" className="blogBackBtn" onClick={onBack}><ArrowLeft size={18} /> Back to Blog</button>
      <div
        className="blogArticleHero"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(2,6,23,.28), rgba(2,6,23,.78)), url(${post.image})`,
          backgroundPosition: post.imagePosition || 'center',
        }}
      >
        <span className="badge">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="blogMeta blogMetaLight"><span>{post.readTime}</span><span>{post.date}</span><span>SW Multimedia</span></div>
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
              {post.highlights.map((item) => <li key={item}><CheckCircle2 size={16} /> {item}</li>)}
            </ul>
          </div>
          <div className="blogAsideCard blogAsideCta">
            <h3>Need Career Guidance?</h3>
            <p>Book a free counselling session and get a course roadmap matched to your profile.</p>
            <button type="button" className="blogReadBtn blogReadBtnLarge" onClick={() => go('Contact')}>
              Book Free Counselling <ArrowRight size={16} />
            </button>
          </div>
        </aside>
      </div>

      <div className="blogRelated">
        <Title small="Continue Reading" title="More Articles For You" />
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
                <button type="button" className="blogReadBtn" onClick={(event) => { event.stopPropagation(); openArticle(item.slug); }}>
                  Read Articles <ChevronRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
