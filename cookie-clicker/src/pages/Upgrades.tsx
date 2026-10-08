import { Link } from "react-router";
import type { Upgrade } from "../data/Upgrades";

type UpgradeStorePageProps = {
  cookies: number;
  upgrades: Upgrade[];
  autoUpgrade: Upgrade[];
  onBuyUpgrade: (upgrade: Upgrade) => void;
};

export function Upgrades({
  cookies,
  upgrades,
  autoUpgrade,
  onBuyUpgrade,
}: UpgradeStorePageProps) {
  return (
    <main className="page-shell">
      <section className="store-panel">
        <div className="store-header">
          <div>
            <h1>Upgrades</h1>
            <p>You currently have {cookies} cookies.</p>
          </div>
          <Link className="button-link" to="/">
            Back to Game
          </Link>
        </div>
        <div className="upgrade-grid">
          {upgrades.map((upgrade) => (
            <article className="upgrade-card" key={upgrade.id}>
              <h2>{upgrade.name}</h2>
              <p>Cost: {upgrade.cost} cookies</p>
              <p>
                {upgrade.kind === "click"
                  ? `+${upgrade.power} per click`
                  : `+${upgrade.power} per second`}
              </p>
              <button
                disabled={cookies < upgrade.cost}
                onClick={() => onBuyUpgrade(upgrade)}
              >
                Buy
              </button>
            </article>
          ))}
        </div>

        <div className="autoUpgrade-grid">
          {autoUpgrade.map((upgrade) => (
            <article className="upgrade-card" key={upgrade.id}>
              <h2>{upgrade.name}</h2>
              <p>Cost: {upgrade.cost} cookies</p>
              <p>
                {upgrade.kind === "click"
                  ? `+${upgrade.power} per click`
                  : `+${upgrade.power} per second`}
              </p>
              <button
                disabled={cookies < upgrade.cost}
                onClick={() => onBuyUpgrade(upgrade)}
              >
                Buy
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
