import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border mb-2">
      <button
        className="d-flex justify-content-between w-100 p-3 bg-white border-0" // Set background to white for button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          color: "#333", // Dark text for visibility
          fontWeight: "", // Optional: makes the title bolder
        }}
      >
        <span>{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="p-3 border-top" style={{ backgroundColor: "#f9f9f9" }}>{children}</div>} 
      {/* Set a light gray background for the open content */}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="fontdesign section4bg p-3">
      <Container>
        <p className='headingcss fontdesign text-center p-4 '>Frequently Asked Questions</p>
        <div className="container mt-4">
          <AccordionItem title="Accordion Item 1">
            <p>Borewell stands as a premier borewell drilling company in Tamil Nadu, renowned for its expertise and reliability in the field. With a legacy of excellence, JJ Borewell has spearheaded major projects across key regions including Chennai, Tiruvallur, Kanchipuram, and Chengalpattu. Offering precision drilling solutions, the company has earned a reputation for delivering superior results in even the most challenging terrains. With a commitment to quality, safety, and efficiency, JJ Borewell continues to be the trusted choice for borewell projects across Tamil Nadu, ensuring access to vital groundwater resources for various industries and communities.</p>
          </AccordionItem>
          <AccordionItem title="Accordion Item 2">
            <p>Borewell stands as a premier borewell drilling company in Tamil Nadu, renowned for its expertise and reliability in the field. With a legacy of excellence, JJ Borewell has spearheaded major projects across key regions including Chennai, Tiruvallur, Kanchipuram, and Chengalpattu. Offering precision drilling solutions, the company has earned a reputation for delivering superior results in even the most challenging terrains. With a commitment to quality, safety, and efficiency, JJ Borewell continues to be the trusted choice for borewell projects across Tamil Nadu, ensuring access to vital groundwater resources for various industries and communities.</p>
          </AccordionItem>
          <AccordionItem title="Accordion Item 3">
            <p>Borewell stands as a premier borewell drilling company in Tamil Nadu, renowned for its expertise and reliability in the field. With a legacy of excellence, JJ Borewell has spearheaded major projects across key regions including Chennai, Tiruvallur, Kanchipuram, and Chengalpattu. Offering precision drilling solutions, the company has earned a reputation for delivering superior results in even the most challenging terrains. With a commitment to quality, safety, and efficiency, JJ Borewell continues to be the trusted choice for borewell projects across Tamil Nadu, ensuring access to vital groundwater resources for various industries and communities.</p>
          </AccordionItem>
          <AccordionItem title="Accordion Item 4">
            <p>Borewell stands as a premier borewell drilling company in Tamil Nadu, renowned for its expertise and reliability in the field. With a legacy of excellence, JJ Borewell has spearheaded major projects across key regions including Chennai, Tiruvallur, Kanchipuram, and Chengalpattu. Offering precision drilling solutions, the company has earned a reputation for delivering superior results in even the most challenging terrains. With a commitment to quality, safety, and efficiency, JJ Borewell continues to be the trusted choice for borewell projects across Tamil Nadu, ensuring access to vital groundwater resources for various industries and communities.</p>
          </AccordionItem>
          <AccordionItem title="Accordion Item 5">
            <p>TBorewell stands as a premier borewell drilling company in Tamil Nadu, renowned for its expertise and reliability in the field. With a legacy of excellence, JJ Borewell has spearheaded major projects across key regions including Chennai, Tiruvallur, Kanchipuram, and Chengalpattu. Offering precision drilling solutions, the company has earned a reputation for delivering superior results in even the most challenging terrains. With a commitment to quality, safety, and efficiency, JJ Borewell continues to be the trusted choice for borewell projects across Tamil Nadu, ensuring access to vital groundwater resources for various industries and communities.</p>
          </AccordionItem>
          <AccordionItem title="Accordion Item 6">
            <p>Borewell stands as a premier borewell drilling company in Tamil Nadu, renowned for its expertise and reliability in the field. With a legacy of excellence, JJ Borewell has spearheaded major projects across key regions including Chennai, Tiruvallur, Kanchipuram, and Chengalpattu. Offering precision drilling solutions, the company has earned a reputation for delivering superior results in even the most challenging terrains. With a commitment to quality, safety, and efficiency, JJ Borewell continues to be the trusted choice for borewell projects across Tamil Nadu, ensuring access to vital groundwater resources for various industries and communities.</p>
          </AccordionItem>
        </div>
      </Container>
    </div>
  );
};

export default Accordion;
