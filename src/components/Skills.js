import colorSharp from "../assets/img/color-sharp.png";
import CircleSkills from "./CircleSkills";

export const Skills = () => {
  const circles = [
    {
      percentageCircle: "60",
      title: "HTML",
    },
    {
      percentageCircle: "50",
      title: "CSS",
    },
    {
      percentageCircle: "60",
      title: "JS",
    },
    {
      percentageCircle: "70",
      title: "React",
    },
    {
      percentageCircle: "50",
      title: "Library other",
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Some of my skills in programming.
                <br />
                The assessment is only subjective by myself, thank you.
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
