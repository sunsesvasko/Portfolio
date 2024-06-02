function Landing() {
  return (
    <div className="h-[800px] text-black flex gap-24 items-center justify-center">
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-medium">Hello I'm</p>
        <h1 className="text-[60px] font-semibold leading-[60px]">
          Vasko <br /> Blazhev
        </h1>
        <p className="text-2xl font-medium">Full Stack Web Developer</p>
        <ul className="flex justify-center gap-2 sm:justify-start">
          <li className="bg-[#fee5b5] w-[32px] h-[32px] flex items-center justify-center rounded-[4px]">
            <a href="https://www.linkedin.com" target="_blank">
              <img src="./linkedin.png" alt="Linked In" className="w-[24px]" />
            </a>
          </li>
          <li className="bg-[#fee5b5] w-[32px] h-[32px] flex items-center justify-center rounded-[4px]">
            <a href="https://www.instagram.com/?hl=bg" target="_blank">
              <img src="./instagram.png" alt="Linked In" className="w-[24px]" />
            </a>
          </li>
        </ul>
      </div>
      <img
        src="./me2.jpeg"
        alt="Picture of Me"
        className="w-[400px] h-auto rounded-md"
      />
    </div>
  );
}

export default Landing;
