import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "./../Service/Service";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="services">
      <Container>
        <h1>Services</h1>
        <Row xs={2} md={4} lg={4}>
          {service.map((serviceitem) => (
            <Service key={serviceitem.id} serviceitem={serviceitem}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
