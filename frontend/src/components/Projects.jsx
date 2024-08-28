import Project from "../components/Project";
import Course from "../components/Course";
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
    <section
      id="experience"
      className="h-[1100px] sm:h-[1000px] bg-black text-white flex flex-col items-center justify-start px-8 py-16 gap-8"
    >
      <h1 className="text-5xl">My Experience</h1>
      <ul>
        <h3 className="text-3xl text-center">School</h3>
        <p className="text-lg w-[400px] md:w-[500px] lg:w-[600px]">
          I have studied HTML, CSS, and JavaScript at school, gaining a solid
          foundation in web development with a focus on professional-level
          skills and best practices.
        </p>
      </ul>

      <ul className="flex flex-col gap-4">
        <h3 className="text-3xl text-center">Solo Courses</h3>
        <Course
          name="The Complete JavaScript Course 2024: From Zero to Expert!"
          link="https://www.udemy.com/course/the-complete-javascript-course/?couponCode=JUST4U02223"
        />
        <Course
          name="Node.js, Express, MongoDB & More: The Complete Bootcamp!"
          link="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?couponCode=JUST4U02223"
        />
        <Course
          name="The Ultimate React Course 2024: React, Next.js, Redux & More!"
          link="https://www.udemy.com/course/the-ultimate-react-course/?couponCode=JUST4U02223"
        />
      </ul>

      <ul className="flex flex-col gap-4">
        <h3 className="text-3xl text-center">Solo Projects</h3>
        <p>All of these projects have been created using the MERN stack. </p>
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
