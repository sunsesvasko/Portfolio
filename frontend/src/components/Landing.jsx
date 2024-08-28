function Landing() {
  return (
    <section
      id="landing"
      className="h-[800px] text-black flex md:gap-[76px] items-center justify-center flex-col md:flex-row gap-8"
    >
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-medium text-center md:text-start">
          Hello I'm
        </p>
        <h1 className="text-[60px] font-semibold leading-[60px] text-center md:text-start">
          Vasko <br /> Blazhev
        </h1>
        <p className="text-2xl font-medium">Web Development Student</p>
        <ul className="flex justify-center gap-2 md:justify-start">
          <li className="bg-[#fee5b5] w-[32px] h-[32px] flex items-center justify-center rounded-[4px]">
            <a
              href="https://www.instagram.com/vasko_.sw/?hl=bg"
              target="_blank"
            >
              <img src="./image.png" alt="Linked In" className="w-[24px]" />
            </a>
          </li>
          <li className="bg-[#fee5b5] w-[32px] h-[32px] flex items-center justify-center rounded-[4px]">
            <a
              href="https://www.instagram.com/vasko_.sw/?hl=bg"
              target="_blank"
            >
              <img src="./instagram.png" alt="Linked In" className="w-[24px]" />
            </a>
          </li>
          <li className="bg-[#fee5b5] w-[32px] h-[32px] flex items-center justify-center rounded-[4px]">
            <a href="https://github.com/sunsesvasko" target="_blank">
              <img src="./github.png" alt="Linked In" className="w-[24px]" />
            </a>
          </li>
        </ul>
      </div>
      <img
        src="./me.jpeg"
        alt="Picture of Me"
        className="w-[390px] h-auto rounded-md"
      />
    </section>
  );
}

export default Landing;
