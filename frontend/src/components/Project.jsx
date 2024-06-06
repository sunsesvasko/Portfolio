function Project({ project }) {
  const { name, description } = project;

  return (
    <div className="w-[200px] h-auto bg-white text-black ">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
        alt="Project Image"
      />
      <h3 className="px-2 text-lg font-semibold">{name}</h3>
      <p className="px-2 h-[100px] overflow-y-scroll ">{description}</p>
    </div>
  );
}

export default Project;
