import React, { useEffect, useRef } from 'react';
import 'animate.css';

// Import 45 images: first 28 in JPG, then JPEG
import g1 from '../assets/galleryPhoto/g1.jpg';
import g2 from '../assets/galleryPhoto/g2.jpg';
import g3 from '../assets/galleryPhoto/g3.jpg';
import g4 from '../assets/galleryPhoto/g4.jpg';
import g5 from '../assets/galleryPhoto/g5.jpg';
import g6 from '../assets/galleryPhoto/g6.jpg';
import g7 from '../assets/galleryPhoto/g7.jpg';
import g8 from '../assets/galleryPhoto/g8.jpg';
import g9 from '../assets/galleryPhoto/g9.jpg';
import g10 from '../assets/galleryPhoto/g10.jpg';
import g11 from '../assets/galleryPhoto/g11.jpg';
import g12 from '../assets/galleryPhoto/g12.jpg';
import g13 from '../assets/galleryPhoto/g13.jpg';
import g14 from '../assets/galleryPhoto/g14.jpg';
import g15 from '../assets/galleryPhoto/g15.jpg';
import g16 from '../assets/galleryPhoto/g16.jpg';
import g17 from '../assets/galleryPhoto/g17.jpg';
import g18 from '../assets/galleryPhoto/g18.jpg';
import g19 from '../assets/galleryPhoto/g19.jpg';
import g20 from '../assets/galleryPhoto/g20.jpg';
import g21 from '../assets/galleryPhoto/g21.jpg';
import g22 from '../assets/galleryPhoto/g22.jpg';
import g23 from '../assets/galleryPhoto/g23.jpg';
import g24 from '../assets/galleryPhoto/g24.jpg';
import g25 from '../assets/galleryPhoto/g25.jpg';
import g26 from '../assets/galleryPhoto/g26.jpg';
import g27 from '../assets/galleryPhoto/g27.jpg';
import g28 from '../assets/galleryPhoto/g28.jpg';
import g29 from '../assets/galleryPhoto/g29.jpeg';
import g30 from '../assets/galleryPhoto/g30.jpeg';
import g31 from '../assets/galleryPhoto/g31.jpeg';
import g32 from '../assets/galleryPhoto/g32.jpeg';
import g33 from '../assets/galleryPhoto/g33.jpeg';
import g34 from '../assets/galleryPhoto/g34.jpeg';
import g35 from '../assets/galleryPhoto/g35.jpeg';
import g36 from '../assets/galleryPhoto/g36.jpeg';
import g37 from '../assets/galleryPhoto/g37.jpeg';
import g38 from '../assets/galleryPhoto/g38.jpeg';
import g39 from '../assets/galleryPhoto/g39.jpeg';
import g40 from '../assets/galleryPhoto/g40.jpeg';
import g41 from '../assets/galleryPhoto/g41.jpeg';
import g42 from '../assets/galleryPhoto/g42.jpeg';
import g43 from '../assets/galleryPhoto/g43.jpeg';
import g44 from '../assets/galleryPhoto/g44.jpeg';
import g45 from '../assets/galleryPhoto/g45.jpeg';

// Array of image sources and span classes
const images = [
  { src: g1, span: 'h-48 md:h-80' },
  { src: g2, span: 'h-48 md:col-span-2 md:h-80' },
  { src: g3, span: 'h-48 md:col-span-2 md:h-80' },
  { src: g4, span: 'h-48 md:row-span-2 md:h-[656px]' },
  { src: g5, span: 'h-48 md:h-80' },
  { src: g6, span: 'h-48 md:row-span-2 md:h-[656px]' },
  { src: g7, span: 'h-48 md:h-80' },
  { src: g8, span: 'h-48 md:h-[660px] md:row-span-2' },
  { src: g9, span: 'h-48 md:h-80' },
  { src: g10, span: 'h-48 md:h-80' },
  { src: g11, span: 'h-48 md:col-span-2 md:h-80' },
  { src: g12, span: 'h-48 md:h-80' },
  { src: g13, span: 'h-48 md:h-[660px] md:row-span-2' },
  { src: g14, span: 'h-48 md:h-80' },
  { src: g15, span: 'h-48 md:h-80' },
  { src: g16, span: 'h-48 md:col-span-2 md:h-80' },
  { src: g17, span: 'h-48 md:h-80' },
  { src: g18, span: 'h-48 md:h-80' },
  { src: g19, span: 'h-48 md:h-[660px] md:row-span-2' },
  { src: g20, span: 'h-48 md:col-span-2 md:h-80' },
  { src: g21, span: 'h-48 md:h-80' },
  { src: g22, span: 'h-48 md:h-80' },
  { src: g23, span: 'h-48 md:h-80' },
  { src: g24, span: 'h-48 md:h-80' },
  { src: g25, span: 'h-48 md:h-80' },
  { src: g26, span: 'h-48 md:h-80' },
  { src: g27, span: 'h-48 md:col-span-2 md:h-80' },
  { src: g28, span: 'h-48 md:h-80' },
  { src: g29, span: 'h-48 md:h-80' },
  { src: g30, span: 'h-48 md:h-80' },
  { src: g31, span: 'h-48 md:h-80' },
  { src: g32, span: 'h-48 md:h-80' },
  { src: g33, span: 'h-48 md:h-80' },
  { src: g34, span: 'h-48 md:h-80' },
  { src: g35, span: 'h-48 md:h-80' },
  { src: g36, span: 'h-48 md:h-80' },
  { src: g37, span: 'h-48 md:h-80' },
  { src: g38, span: 'h-48 md:h-80' },
  { src: g39, span: 'h-48 md:h-80' },
  { src: g40, span: 'h-48 md:h-80' },
  { src: g41, span: 'h-48 md:h-80' },
  { src: g42, span: 'h-48 md:h-80' },
  { src: g43, span: 'h-48 md:h-80' },
  { src: g44, span: 'h-48 md:h-80' },
  { src: g45, span: 'h-48 md:h-80' },
];

const animations = ['animate__fadeIn'];

function getRandomAnimation() {
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
}

function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const galleryElements = galleryRef.current.querySelectorAll('.gallery-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationClass = getRandomAnimation();
            entry.target.classList.add('animate__animated', animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    galleryElements.forEach((element) => {
      observer.observe(element);
    });

    return () => { if (observer) observer.disconnect(); };
  }, []);

  return (
    <div id="gallery" className="bg-[rgba(104,35,162,0.91)]">
      <div className="dark:bg-violet-400 h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>
          </div>
          <div ref={galleryRef} className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className={`gallery-item group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${image.span}`}
              >
                <img
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
