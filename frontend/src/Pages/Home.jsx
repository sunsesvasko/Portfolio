import Landing from "../components/Landing";

function Home() {
  return (
    <div className="">
      <Landing />
      <section className="h-[1000px] bg-black text-white">About</section>
      <section className="h-[1000px]">Work</section>
      <section className="h-[1000px] bg-black text-white">Contact</section>
    </div>
  );
}

export default Home;
