import Project from "../components/Project";
import { useGetProjectsQuery } from "../slices/projectsApiSlice";
import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  const { data, isLoading } = useGetProjectsQuery();

  useEffect(() => {
    if (data?.data?.projects) {
      setProjects(data.data.projects);
    }
  }, [data]);

  return (
    <section className="h-[1000px] bg-black text-white flex flex-col items-center justify-start px-8 py-16 gap-8">
      <h1 className="text-5xl">My Projects</h1>
      <div className="flex flex-col gap-4 overflow-y-scroll sm:flex-row">
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
