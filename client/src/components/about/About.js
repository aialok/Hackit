const About = () => {
  return (
    <div
      className="bg-[rgba(26,21,5,0.6)] md:px-24 sm:px-8 px-4 py-8 relative  w-[100%] min-h-[60vh]"
      id="about"
    >
      <h1 className="text-center mb-8 font-[Varela] text-[#ee2a7b] font-bold text-5xl ">
        About QUASAR
      </h1>
      <div className="flex  items-center justify-center flex-col text-slate-100">
        <div className="md:w-[700px]  w-[100%]">
          <span className="my-2 text-lg">
            Welcome to Quasar - The Ultimate Test of Innovation, creativity, and
            problem-solving skills! Join us for an exhilarating 24-hour
            hackathon organized by the esteemed technical society of IIIT
            Ranchi, House of Geeks. Quasar is not just an event; it's an
            opportunity for passionate minds to come together, collaborate, and
            create something extraordinary.
          </span>
          <span className="block my-2 text-lg">
            We don't believe in keeping it bound to just software development
            and hence the hackathons contain problem statements from every
            domain, be it{" "}
            <strong className="font-[Roboto]">SOFTWARE DEV</strong>,{" "}
            <strong className="font-[Roboto]">AI ML , BLOCKCHAIN</strong> or be
            it{" "}
            <strong className="font-[Roboto]">HARDWARE-BASED-PROJECTS</strong>{" "}
            where the participants can show their command over silicon.
          </span>
          <span className="block my-2 text-lg">
            House of Geeks, the Technical Society of IIITR, has always supported
            inclusion and diversity and moving forward on this track we would be
            organizing various events during the hackathon to keep the
            participants engaged in a productive way. Our aim is to create such
            an environment where hackers would get an immense knowledge and a
            lifelong experience.
          </span>
        </div>
      </div>
    </div>
  );
};
export default About;
