// import "./CircleSkills.css";

const CircleSkills = ({ percentageCircle, title }) => {
  const percentageCircles = `${percentageCircle} 100`;
  console.log(percentageCircle);
  return (
    <div className="single-chart">
      <svg viewBox="0 0 36 36" className="circular-chart orange">
        <path
          className="circle-bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={percentageCircles}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="percentage">
          {percentageCircle}%
        </text>
      </svg>
      {title}
    </div>
  );
};

export default CircleSkills;
