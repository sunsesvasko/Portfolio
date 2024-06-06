import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";
import { toast } from "react-toastify";
import { useGetProjectsQuery } from "../slices/projectsApiSlice";
import { useEffect, useState } from "react";
import Project from "../components/Project";

function Home() {
  const [projects, setProjects] = useState([]);

  const { data, isLoading } = useGetProjectsQuery();

  useEffect(() => {
    if (data?.data?.projects) {
      setProjects(data.data.projects);
    }
  }, [data]);

  return (
    <div>
      <Landing />
      <About />
      <Skills />
      <section className="h-[1000px] bg-black text-white flex flex-col items-center justify-start px-8 py-16 gap-8">
        <h1 className="text-5xl">My Projects</h1>
        <div className="flex gap-4">
          {projects.map((project, i) => (
            <Project project={project} key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
