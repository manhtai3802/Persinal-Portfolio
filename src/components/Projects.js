import "animate.css";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";
import FormSubmit from "../assets/img/FormSubmit.png";
import MemberCard from "../assets/img/MemberCard.png";
import MenuFood from "../assets/img/MenuFood.png";
import ToastMessage from "../assets/img/toastmessage2.png";
import Todo from "../assets/img/Todo.png";
import WebListenMusic from "../assets/img/WebListenMusic.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Menu Food",
      description: "Design & Development",
      imgUrl: MenuFood,
      linkDeploy: "https://charming-fudge-a30792.netlify.app/",
    },
    {
      title: "Member Card",
      description: "Design & Development",
      imgUrl: MemberCard,
      linkDeploy: "https://melodic-tartufo-51c0eb.netlify.app/",
    },
    {
      title: "Todo List",
      description: "Design & Development",
      imgUrl: Todo,
      linkDeploy: "https://gleaming-croquembouche-4985e7.netlify.app/",
    },
    {
      title: "Web Listen Music",
      description: "Design & Development",
      imgUrl: WebListenMusic,
      linkDeploy: "https://moonlit-sunshine-67faf2.netlify.app/",
    },
    {
      title: "Form Submit",
      description: "Design & Development",
      imgUrl: FormSubmit,
      linkDeploy: "https://adorable-parfait-b6b81a.netlify.app/",
    },
    {
      title: "Toast Message",
      description: "Design & Development",
      imgUrl: ToastMessage,
      linkDeploy: "https://gorgeous-crumble-d57cc0.netlify.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>A few of my projects I did while studying</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                      defaultActiveKey="/home"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
