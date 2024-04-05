import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoIosSchool } from "react-icons/io";
const Timeline = () => {
  return (
    <div
      id="schedule"
      className="bg-[rgba(26,21,5,0.6)] relative  md:px-12 sm:px-8 px-4 w-[100%] min-h-[100vh]"
    >
      <h1 className="text-center mb-8 font-[Varela] text-[#ee2a7b] font-bold text-5xl">
        TIMELINE
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255,255,255,0.1)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="12 Apr - 13 Apr"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className="text-yellow-500 font-bold text-xl">IDEATHON</h1>
          <p>Respective teams will present their ideas to Judge Panel.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255,255,255,0.1)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="20 Apr 10:00 AM - 20 Apr 11:00 AM"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className=" font-bold text-xl text-yellow-500">
            OPENING CEREMONY
          </h1>
          <p>Opening ceremony will be started for the Hackathon.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255,255,255,0.1)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="20 Apr 10:00 AM - 21 Apr 11:00 AM"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className="text-yellow-500 font-bold text-xl">HACK DAY</h1>
          <p>Students will be given 24 hours to complete their projects.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255,255,255,0.1)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="20 Apr 5:00 PM"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className="text-yellow-500 font-bold text-xl">
            QUASAR MAIN EVENT
          </h1>
          <p>
            QUASAR will be a two-day event consisting of various guest lectures,
            workshops, and project evaluation.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(255,255,255,0.1)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(255,255,255,0.1)" }}
          date="21 Apr 12:00 PM"
          iconStyle={{ background: "rgb(36,36,36,1)", color: "#fff" }}
          icon={<IoIosSchool className="text-slate-100" />}
        >
          <h1 className="text-yellow-500 font-bold text-xl">
            CLOSING CEREMONY
          </h1>
          <p>Closing ceremony for the hackathon will be started.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Timeline;
