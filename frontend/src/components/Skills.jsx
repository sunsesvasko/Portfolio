import Skill from "../components/Skill";

function Skills() {
  return (
    <section className="h-[600px] flex items-center justify-center">
      <ul>
        <h1 className="text-5xl">List of Skills:</h1>
        <Skill skill="MongoDB" />
        <Skill skill="Mongoose" />
        <Skill skill="NodeJS" />
        <Skill skill="ExpressJS" />
        <Skill skill="Javascript" />
        <Skill skill="React" />
        <Skill skill="HTML" />
        <Skill skill="CSS" />
        <Skill skill="TailwindCSS" />
      </ul>
    </section>
  );
}

export default Skills;
