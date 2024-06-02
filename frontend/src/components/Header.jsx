function Header() {
  return (
    <header className="flex justify-between p-3 bg-white">
      <h1 className="text-2xl md:text-3xl xl:text-4xl">Vasko Blazhev</h1>
      <ul className="flex items-center gap-4 text-lg md:text-xl">
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
