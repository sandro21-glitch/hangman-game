import HowToPlayBtn from "../features/welcomePage/HowToPlayBtn";
import PlayBtn from "../features/welcomePage/PlayBtn";
import SoundButton from "../features/welcomePage/SoundButton";
import logo from "/assets/logo-desktop.svg";



const WelcomePage = () => {
  return (
    <section className="flex-center min-h-screen relative">
      <article className="w-full sm:w-[37rem] h-[31rem] gradient-bg inset--1 flex relative rounded-[72px]">
        <img
          src={logo}
          alt="logo"
          className="w-[374px] h-auto absolute top-[-20%] left-0 right-0 mx-auto"
        />
        <div className="flex flex-col gap-10 justify-center items-center mx-auto mt-20 ">
          <PlayBtn />
          <HowToPlayBtn />
        </div>
      </article>
      <SoundButton />
    </section>
  );
};

export default WelcomePage;
