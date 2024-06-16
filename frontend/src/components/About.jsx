function About() {
  return (
    <section className="h-[600px] bg-black text-white flex items-center justify-center">
      <div className="flex flex-col gap-2 border-b-[1px] border-t-[1px] py-4 border-white">
        <h1 className="text-5xl ">About Me</h1>
        <div className="w-[400px] md:w-[500px]">
          <p>
            I'm born on the 2nd of June 2004. My permanent residency is Belene,
            Pleven but I also have a home in Sofia.
          </p>
          <div className="flex justify-around gap-2">
            <ul className="w-[50%] ">
              <h3 className="text-2xl font-semibold">Hobbies</h3>
              <li>Going to the Gym</li>
              <li>Reading Books</li>
              <li>Walking in Nature</li>
              <li>Improving Myself</li>
            </ul>
            <ul className="w-[50%]">
              <h3 className="text-2xl font-semibold">Education</h3>
              <li>2018 - 2023 | Private Highschool of SoftUni Buditel</li>
              <li>2024 - 2029 | Business Academy "Dimitar A. Tsenov"</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
