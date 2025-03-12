import Container from "react-bootstrap/Container";
import "animate.css";
import Image from "react-bootstrap/Image";
import base5 from "../image/whatsapp.png";

function Lorem() {
  return (
    <Container id="contact">
      <div className="pgwhite">
        <h2 className="text-center headingcss fontdesign animate__animated animate__fadeInDown">
          Contact Us
        </h2>
        <div className="sec-4-heading">
          <a
            href="https://wa.me/919842867128"
            className="aboutheaddesign text-decoration-none text-black animate__animated animate__fadeInUp "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={base5}
              width={50}
              height={50}
              rounded
              className="whatsapp-icon p-1"
            />
              +91 98428 67128
          </a>
          <p className="section-details fontdesign animate__animated animate__fadeIn">
            Borewell drilling work is not an easy job and has a lot of
            intricacies to be dealt with. Borewell drilling work is not an easy
            job and has a lot of intricacies to be dealt with.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Lorem;
