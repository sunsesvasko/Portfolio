function Project({ name, description }) {
  return (
    <div className="w-[375px] sm:w-[500px] md:w-[600px] h-auto bg-white text-black flex items-center">
      <h3 className="px-2 py-4 border-r-[1px] border-black text-xl font-semibold w-[150px]">
        {name}
      </h3>
      <p className="px-2">{description}</p>
    </div>
  );
}

export default Project;
