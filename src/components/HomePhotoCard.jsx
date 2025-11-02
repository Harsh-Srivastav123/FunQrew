import React, { useState, useEffect } from "react";
import f1 from '../assets/homePhoto/founder3.jpg';
import f7 from '../assets/homePhoto/founder7.jpg';
import f5 from '../assets/homePhoto/founder5.jpg';
import f6 from '../assets/homePhoto/founder6.jpg';
import HomePhotoCardContent from "./HomePhotoCardContent";

function HomePhotoCard() {
  const photos = [f1,f7, f5, f6];
  const names = ['Ankit Srivastava','Abhivyakti Srivastava', 'Mr. Alok Aviral', 'Jasdeep Singh'];
  const designations = ['Founder','Co Founder', 'Honorary Patron', 'Creative Head'];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 9500); 

    return () => clearInterval(intervalId); 
  }, [photos.length]);

  return (
    <div className="animate__animated animate__fadeInRight">
      {photos.map((photo, index) => (
        <HomePhotoCardContent
          key={index}
          photo={photo}
          // name={names[index]}
          // designation={designations[index]}
          isVisible={index === currentIndex}
        />
      ))}
    </div>
  );
}

export default HomePhotoCard;
