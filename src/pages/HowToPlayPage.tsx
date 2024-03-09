import GameRules from "../features/howToPlay/GameRules";
import Header from "../ui/Header";

const HowToPlayPage = () => {
  return (
    <section className="section-center">
      <Header text="how to play" />
      <GameRules />
    </section>
  );
};

export default HowToPlayPage;
