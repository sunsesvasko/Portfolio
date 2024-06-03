function About() {
  return (
    <section className="h-[600px] bg-black text-white flex items-center justify-center">
      <div className="flex flex-col gap-2 border-b-[1px] border-t-[1px] py-4 border-white">
        <h1 className="text-5xl">About Me</h1>
        <p className="w-[400px] md:w-[500px]">
          I'm a 20-year-old student at the Business Academy "Dimitar A. Tsenov"
          with a passion for learning and personal growth. My interests include
          reading books, going to the gym, and spending quality time with
          friends. As a dedicated full-stack web developer, I specialize in the
          MERN stack technology, constantly seeking to enhance my skills and
          stay updated with the latest industry trends. I'm enthusiastic about
          leveraging my knowledge and abilities to create innovative and
          efficient web solutions.
        </p>
      </div>
    </section>
  );
}

export default About;
