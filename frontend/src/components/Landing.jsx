function Landing() {
  return (
    <div className="h-[800px] text-black flex md:gap-[76px] items-center justify-center flex-col md:flex-row gap-8">
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-medium text-center md:text-start">
          Hello I'm
        </p>
        <h1 className="text-[60px] font-semibold leading-[60px] text-center md:text-start">
          Vasko <br /> Blazhev
        </h1>
        <p className="text-2xl font-medium">Full Stack Web Developer</p>
        <ul className="flex justify-center gap-2 md:justify-start">
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
        src="./me.jpeg"
        alt="Picture of Me"
        className="w-[390px] h-auto rounded-md"
      />
    </div>
  );
}

export default Landing;
