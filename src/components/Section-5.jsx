import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import 'animate.css';
import BNI from '../image/Bni.png';

function Section5bg() {
  const images = Array(3).fill(BNI);

  return (
    <div className="Section5bg">
      <Container>
        <div className='sec5-logo'>
          {images.map((src, index) => (
            <Image 
              key={index} 
              src={src} 
              width={100} 
              height={80} 
              rounded 
              className="animate__animated animate__fadeInUp hover-animate" 
              style={{ margin: 20, animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </Container>
      <style>
        {`
          .hover-animate:hover {
            animation: pulse 0.5s;
          }
        `}
      </style>
    </div>
  );
}

export default Section5bg;
