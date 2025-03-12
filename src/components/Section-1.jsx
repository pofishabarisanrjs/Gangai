import Container from 'react-bootstrap/Container';
import NavHeader from './Navbar';
import Image from 'react-bootstrap/Image';
import base2 from '../image/2.png'


function Section1bg() {
  return (
    
     <div className='section1bg' id="home">
     <Image src={base2} width="100%"height="100%" className=' image-animation'/>
      <Container>
      <NavHeader/>

      </Container>
     </div>
    
  );
}

export default Section1bg;