import { Title } from '../components/Common';
import { galleryItems } from '../data/content';

export default function GalleryPage() {
  return (
    <section className="page">
      <Title title="Advanced Technical Campus, Training Bays & Events Gallery" />
      <div className="masonry galleryGrid">
        {galleryItems.map((item) => (
          <div
            key={item.title}
            className="galleryTile"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(2,6,23,.06), rgba(2,6,23,.74)), url(${item.image})`,
              backgroundPosition: item.position,
            }}
          >
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
