import { Link } from "react-router";
import type { Progression } from "../data/Endgame";

type vanityProps = {
  cookies: number;
  vanity: Progression[];
  ownedVanityIds: number[];
  onBuyVanity: (item: Progression) => void;
};

export function Vanity({
  cookies,
  vanity,
  ownedVanityIds,
  onBuyVanity,
}: vanityProps) {
  return (
    <main className="page-shell">
      <section className="progression-panel">
        <h1>Progression</h1>
        <p>Total cookies:{cookies}</p>

        <div className="progression-grid">
          {vanity.map((item) => {
            const owned = ownedVanityIds.includes(item.id);

            return (
              <article key={item.id}>
                <h2>{item.name}</h2>
                <p>Grade:{item.grade}</p>
                <p>Cost: {item.cost}</p>

                <button
                  onClick={() => onBuyVanity(item)}
                  disabled={owned || cookies < item.cost}
                >
                  {owned ? "Owned" : "Buy"}
                </button>
              </article>
            );
          })}
        </div>
        <div className="back-button">
          <Link className="back-link" to="/">
            Back to Game
          </Link>
        </div>
      </section>
    </main>
  );
}
