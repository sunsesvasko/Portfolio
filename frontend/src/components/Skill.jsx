function Skill({ skill }) {
  let img = "";

  switch (skill) {
    case "MongoDB":
      img = "./database.png";
      break;
    case "Mongoose":
      img = "./database.png";
      break;
    case "NodeJS":
      img = "./nodejs.png";
      break;
    case "ExpressJS":
      img = "./nodejs.png";
      break;
    case "Javascript":
      img = "./javascript.png";
      break;
    case "React":
      img = "./react.png";
      break;
    case "HTML":
      img = "./html.png";
      break;
    case "CSS":
      img = "./css.png";
      break;
    case "TailwindCSS":
      img = "./tailwindcss.png";
      break;

    default:
      break;
  }

  return (
    <li className="flex items-center gap-2">
      <img src={img} alt="Acquired Skill" className="w-[24px]" />
      <span className="text-2xl">{skill}</span>
    </li>
  );
}

export default Skill;
