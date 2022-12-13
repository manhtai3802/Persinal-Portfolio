import "animate.css";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
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
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills justify-content-center align-items-center"
                id="pills-tab"
                defaultActiveKey="/home"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Title</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Description</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <div className="title-project">
                    A few of my projects I did while studying.
                  </div>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Tab.Container>
                    <Nav
                      variant="tabs"
                      className="justify-content-center align-items-center information-project"
                    >
                      <Nav.Item>
                        <Nav.Link
                          eventKey="menuFood"
                          className="item-information-project "
                        >
                          Menu Food
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="memberCard"
                          className="item-information-project"
                        >
                          Member Card
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="todo"
                          className="item-information-project"
                        >
                          Todo
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="webListen"
                          className="item-information-project"
                        >
                          Web Listen Music
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="formSubmit"
                          className="item-information-project"
                        >
                          From Submit
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="toastMessage"
                          className="item-information-project"
                        >
                          Toast Message
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="menuFood">
                        <ul className="menu-food">
                          <li>
                            Link Github: https://github.com/manhtai3802/menuFood
                          </li>
                          <li>
                            Description: The site displays lists, searches for
                            dishes, When clicking on the dishes, there are
                            cooking instructions.
                            <br />
                            Have a list of favorites to make it easier to find
                            when you add them
                          </li>
                          <li>
                            Technologies used: ReactJs Hook (useContext,
                            useState, useEffect), React Icon, axios
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="memberCard">
                        <ul className="memberCard">
                          <li>
                            Link Github:
                            https://github.com/manhtai3802/MemberCard
                          </li>
                          <li>
                            Description: On the Home page will manage the number
                            of people in the group, add and remove people by
                            selecting an avatar.
                            <br />
                            Select the Teams section and display the number of
                            members, positions, and majors
                          </li>
                          <li>
                            Technologies used: ReactJs Hook (useEffect,
                            useState), React Router
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="todo">
                        <ul className="todo">
                          <li>
                            Link Github: https://github.com/manhtai3802/AppTodo
                          </li>
                          <li>
                            Description: The Todo app has functions such as
                            adding tasks, deleting, marking complete and
                            incomplete.
                            <br /> Have items to view completed and unfinished
                            tasks
                          </li>
                          <li>
                            Technologies used: ReactJs Hook (useEffect,
                            useState)
                          </li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="webListen">
                        <ul className="webListen">
                          <li>
                            Link Github:
                            https://github.com/manhtai3802/listen-music
                          </li>
                          <li>
                            Description: Basic music player application with
                            functions such as start, pause, transfer next song,
                            return to previous song, randomly select.
                            <br /> Can select songs to run in the playlist, fast
                            forward songs on the time bar, and some other
                            effects when the song is played
                          </li>
                          <li>Technologies used: Javascript, Bootstrap</li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="formSubmit">
                        <ul className="formSubmit">
                          <li>
                            Link Github:
                            https://github.com/manhtai3802/FormSubmit
                          </li>
                          <li>
                            Description: Full registration form to register an
                            account, with full name, password, email, gender
                            <br />
                            Error message when a user does not enter as required
                            or does not enter with some required cells
                          </li>
                          <li>Technologies used: Javascript</li>
                        </ul>
                      </Tab.Pane>
                      <Tab.Pane eventKey="toastMessage">
                        <ul className="toastMessage">
                          <li>
                            Link Github:
                            https://github.com/manhtai3802/toast_message
                          </li>
                          <li>
                            Description: When clicking on a button will display
                            its notifications, notifications can be turned off
                            and have an effect when notifications run out
                          </li>
                          <li>Technologies used: Javascript</li>
                        </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
