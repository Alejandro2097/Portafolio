import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import forme from "../../Assets/Projects/Forme.png";
import maps from "../../Assets/Projects/Mapas.png";
import Fisio from "../../Assets/Projects/Fisiomax.png";
import CuidaTusOjos from "../../Assets/Projects/Cuidatusojos.png";
import resuelve from "../../Assets/Projects/ResuelveConBimbo.png";
import onoda from "../../Assets/Projects/Onoda.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maps}
              isBlog={false}
              title="Maps with Angular"
              description="Personal project using the MapBox Api where you can search places all over the world
                            and look out for instruction jus like Google maps. Remember activate the location in your
                            web browser to the live Demo."
              ghLink="https://github.com/Alejandro2097/mapasApp"
              demoLink="https://maps-angular-xd.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forme}
              isBlog={false}
              title="Coca-cola Forme Player"
              description="This website was created to play movies licenced by sony pictures as a advertising campaign
                            of Coca-cola"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fisio}
              isBlog={false}
              title="Fisiomax"
              description="Landing page to the product Fisiomax in Colombia that shows you where you can buy it"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CuidaTusOjos}
              isBlog={false}
              title="Cuida Tus Ojos"
              description="E-commerce and blog for a eye drops brand in Colombia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resuelve}
              isBlog={false}
              title="Resuelve con Bimbo"
              description="CMS Of Resuelbe con bimbo where you can find recipes related with bimbo products."
              demoLink="https://resuelveconbimbo.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onoda}
              isBlog={false}
              title="Onoda.com"
              description="Landing page and Blog for a E-sports team in Colombian"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
