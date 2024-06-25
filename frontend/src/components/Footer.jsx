function Footer() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-8 p-8 text-white bg-black sm:justify-center sm:flex-row"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl sm:text-left">Get in Touch</h1>

        <div className="flex flex-col gap-2">
          <p className="w-[375px]  sm:text-left md:w-[500px]">
            Ecosystem bootstrapping learning curve lean startup disruptive.
            Marketing long tail disruptive agile development partner.
          </p>

          <ul className="flex gap-2 sm:justify-start">
            <li className="bg-[#fee5b5] w-[32px] h-[32px] flex justify-center rounded-[4px]">
              <a href="https://www.linkedin.com" target="_blank">
                <img src="./image.png" className="w-[24px]" />
              </a>
            </li>
            <li className="bg-[#fee5b5] w-[32px] h-[32px] flex items-center justify-center rounded-[4px]">
              <a href="https://www.instagram.com/?hl=bg" target="_blank">
                <img
                  src="./instagram.png"
                  alt="Linked In"
                  className="w-[24px]"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white text-black flex flex-col items-center justify-center px-4 rounded-tl-xl rounded-br-xl w-[375px] sm:w-[200px] h-[200px] gap-4">
        <img src="./mail.png" alt="" className="w-[32px]" />
        <p>vbblajev@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
