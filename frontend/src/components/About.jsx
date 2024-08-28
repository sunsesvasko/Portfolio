function About() {
  return (
    <section
      id="about"
      className="h-[600px] bg-black text-white flex items-center justify-center"
    >
      <div className="flex flex-col gap-2 border-b-[1px] border-t-[1px] py-4 border-white">
        <h1 className="text-5xl ">About Me</h1>
        <div className="w-[350px] sm:w-[400px] md:w-[500px]">
          <p>
            I'm born on the 2nd of June 2004. My permanent residency is Belene,
            Pleven but I also have a home in Sofia.
          </p>
          <div className="flex justify-around gap-1 sm:gap-2">
            <ul className="w-[50%] ">
              <h3 className="text-2xl font-semibold">Personal Skills</h3>
              <li className="text-lg">Fast Learner</li>
              <li className="text-lg">Open to Learning</li>
              <li className="text-lg">Communicative</li>
              <li className="text-lg"></li>
            </ul>
            <ul className="w-[50%]">
              <h3 className="text-2xl font-semibold">Education</h3>
              <li className="text-lg">
                <span className="font-semibold">2018 - 2023</span> | Private
                Highschool of SoftUni Buditel
              </li>
              <li className="text-lg">
                <span className="font-semibold">2024 - 2029</span> | Business
                Academy "Dimitar A. Tsenov"
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
