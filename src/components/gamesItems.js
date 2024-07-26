import React, { useEffect } from 'react';
import 'animate.css';

const GamesItems = (props) => {
  const { title, desc, image, gameUrl } = props;

  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', () => {
          card.style.transform = 'scale(1.05)';
        });
        card.removeEventListener('mouseleave', () => {
          card.style.transform = 'scale(1)';
        });
      });
    };
  }, []);

  return (
    <div className="card shadow animate__animated animate__fadeIn shadow-lg hover-shadow-lg" style={{ transition: 'transform 0.2s' }}>
      <img src={image} className="card-img-top animate__animated animate__pulse" alt={title} />
      <div className="card-body">
        <h5 className="card-title animate__animated animate__zoomIn">{title}</h5>
        <p className="card-text animate__animated animate__fadeInUp">{desc}</p>
        <a href={gameUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary animate__animated animate__rubberBand">Download</a>
      </div>
    </div>
  );
}





export default GamesItems;


