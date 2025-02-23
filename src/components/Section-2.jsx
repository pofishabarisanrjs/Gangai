import Container from "react-bootstrap/esm/Container";
import About from "./Aboutus";
import Ourproject from "./ourprojects";
import Ourheading from "./ourprojectheading";
import Ourservice from "./Ourservice";
import Outcontent from "./Ourservice-content";
import Lorem from "./Lorem";
import Loremcontent from "./Lorem-content";

function Section2bg() {
    return (
      
       <div className='section2bg'>
        <Container>
            <div className="pgwhite posabs">
                <Container>
                    <About/>

                </Container>
                
            </div>
            <div className="pgwhite1 margtop">
            <Ourheading/>
            <Ourproject/>
                </div>
                <div className="pgwhite1">
                <Ourservice/>
            
                </div>
                
                

        </Container>
        <Outcontent/>
        <Lorem/>
        <Container>
        <Loremcontent/>
        </Container>
        
       </div>
       
      
    );
  }
  
  export default Section2bg;