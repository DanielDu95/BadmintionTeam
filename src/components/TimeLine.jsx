import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./TimeLine.module.css";
import ChampionIcon from "./ChampionIcon";
import { elements as timeLineElements } from "../data/timeLineElements";

function TimeLine() {
  return (
    <div className={styles.timeLineContainer}>
      <h1>Honer wall</h1>
      <VerticalTimeline lineColor="#ff6b6b">
        {timeLineElements.map((el) => (
          <VerticalTimelineElement
            key={el.id}
            className="verticalTimeline"
            contentStyle={el.contentStyle}
            contentArrowStyle={el.contentArrowStyle}
            iconStyle={el.iconStyle}
            date={el.date}
            icon={el.icon === "champion" && <ChampionIcon />}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            rerum facere reprehenderit, dicta cupiditate
          </VerticalTimelineElement>
        ))}
        {/* <VerticalTimelineElement
          className="vertical-timeline-wlement--work"
          contentStyle={{ background: "rgb(33,150,243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          date={timeLineElements[0].date}
          icon={timeLineElements[0].icon === "champion" ? <ChampionIcon /> : ""}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
}

export default TimeLine;
