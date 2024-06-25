function Project({ name, link }) {
  return (
    <div className="w-[400px] sm:w-[500px] md:w-[600px] h-auto bg-white text-black flex items-center">
      <h3 className="p-2 border-r-[1px] border-black text-xl font-semibold w-[500px]">
        {name}
      </h3>
      <a className="px-2" href={link} target="_blank">
        Course Link
      </a>
    </div>
  );
}

export default Project;
