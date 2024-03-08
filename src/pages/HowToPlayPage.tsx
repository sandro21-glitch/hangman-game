import GameRules from "../features/howToPlay/GameRules";
import Header from "../features/howToPlay/Header";

const HowToPlayPage = () => {
  return (
    <section className="section-center">
      <Header />
      <GameRules />
    </section>
  );
};

export default HowToPlayPage;
