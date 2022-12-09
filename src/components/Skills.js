import TrackVisibility from "react-on-screen";

import colorSharp from "../assets/img/color-sharp.png";
import CircleSkills from "./CircleSkills";

export const Skills = () => {
  const circles = [
    {
      percentageCircle: "30",
      title: "HTML",
    },
    {
      percentageCircle: "50",
      title: "CSS",
    },
    {
      percentageCircle: "60",
      title: "Javascript",
    },
    {
      percentageCircle: "70",
      title: "React",
    },
    {
      percentageCircle: "20",
      title: "React",
    },
    {
      percentageCircle: "100",
      title: "React",
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>

              <div className="item">
                {circles.map((circle, index) => {
                  return <CircleSkills key={index} {...circle} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
