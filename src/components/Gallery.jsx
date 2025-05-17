import React, { useEffect, useRef } from 'react';
import 'animate.css';

// Dynamically import all images from the galleryPhoto folder
const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context('../assets/galleryPhoto', false, /\.(jpe?g|png|webp)$/)
);

// Optional: add custom metadata or spans for specific images
// e.g. make every 7th image span two columns and two rows
const imageMeta = images.map((src, idx) => ({
  src,
  span: idx % 7 === 3 ? 'md:col-span-2 md:row-span-2' : ''
}));

const animations = ['animate__fadeIn', 'animate__zoomIn', 'animate__slideInUp'];
function getRandomAnimation() {
  return animations[Math.floor(Math.random() * animations.length)];
}

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const galleryItems = galleryRef.current.querySelectorAll('.gallery-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const anim = getRandomAnimation();
            entry.target.classList.add('animate__animated', anim);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    galleryItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="bg-[rgba(104,35,162,0.91)] py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Gallery</h2>
        <div
          ref={galleryRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {imageMeta.map((img, index) => (
            <div
              key={index}
              className={`gallery-item relative overflow-hidden rounded-lg bg-gray-100 shadow-lg h-48 md:h-80 ${img.span}`}
            >
              <img
                src={img.src}
                alt={`Gallery image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
