import Skill from "../components/Skill";

function Skills() {
  return (
    <section id="skills" className="h-[600px] flex items-center justify-center">
      <ul className="flex flex-col gap-4">
        <h1 className="text-5xl">Technical Skills:</h1>
        <div className="flex gap-4">
          <ul className="flex flex-col gap-2">
            <h3 className="text-3xl">Backend</h3>
            <div>
              <Skill skill="MongoDB" />
              <Skill skill="Mongoose" />
              <Skill skill="NodeJS" />
              <Skill skill="ExpressJS" />
            </div>
          </ul>
          <ul className="flex flex-col gap-2">
            <h3 className="text-3xl">Frontend</h3>
            <div>
              <Skill skill="Javascript" />
              <Skill skill="React" />
              <Skill skill="HTML" />
              <Skill skill="CSS" />
              <Skill skill="TailwindCSS" />
            </div>
          </ul>
        </div>
      </ul>
    </section>
  );
}

export default Skills;
