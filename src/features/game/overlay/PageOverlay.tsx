import "./PageOverlay.css";
const PageOverlay = () => {
  return (
    <div className="fixed h-screen w-full inset-0 bg-black opacity-[80%] z-[-2] overlayBg"></div>
  );
};

export default PageOverlay;
