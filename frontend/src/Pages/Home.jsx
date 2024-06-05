import Landing from "../components/Landing";
import About from "../components/About";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="">
      <Landing />
      <About />
      <Skills />
      <section className="h-[1000px] bg-black text-white flex flex-col items-center justify-start px-8 py-16 gap-8">
        <h1 className="text-5xl">My Projects</h1>
        <div>
          <div className="w-[200px] h-auto bg-white text-black rounded-md">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              alt="Project Image"
            />
            <h3 className="px-2 text-lg font-semibold">Project Name</h3>
            <p className="px-2 h-[100px] overflow-y-scroll">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              quia et, rem nobis adipisci laudantium illum distinctio delectus.
              Dicta similique modi esse! Minima ipsam vel doloribus ea soluta
              facere delectus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
