import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import forme from "../../Assets/Projects/Forme.png";
import maps from "../../Assets/Projects/Mapas.png";
import todo from "../../Assets/Projects/Todoapp.PNG";
import halo from "../../Assets/Projects/haloreadme.PNG";
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
              imgPath={halo}
              isBlog={false}
              title="Halo infinite landing page"
              description="The implementation of this project is in HTML5 CSS and vanilla javascript, whit vite we generate the build folder to render de website in githug pages.
              The website is responsive and respond to the dark mode or ligth mode in your computer you can see the live demo in the next link."
              ghLink="https://github.com/Alejandro2097/HaloInfiniteWeb"
              demoLink="https://alejandro2097.github.io/HaloInfiniteWeb/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To do App"
              description="To do app implementing Redux with Angular an Ngrx, if you have the redux chrome extencion
              you can preview the redux time line, in this application you can track your daily routine."
              ghLink="https://github.com/Alejandro2097/Redux-TODO-app"
              demoLink="https://alejandro2097.github.io/Redux-TODO-app/"
            />
          </Col>
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
