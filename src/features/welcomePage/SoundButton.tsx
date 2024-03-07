import soundLogo from "/assets/sound.svg";
// import soundOffLogo from "/assets/sound-off.svg";
const SoundButton = () => {
  return (
    <button className="absolute right-5 sm:right-[7rem] top-10 bg-primary-blue p-[.3rem] rounded-md inset--3">
      <img src={soundLogo} alt="sound logo" />
    </button>
  );
};

export default SoundButton;
