import type { StoreItem } from "../data/StoreItems";
import type { Purchaseable } from "../data/Purchaseable";
import { Link } from "react-router";

type StoreProps = {
  cookies: number;
  store: StoreItem[];
  onBuyItem: (item: Purchaseable) => void;
};

export function Store({ cookies, store, onBuyItem }: StoreProps) {
  return (
    <main className="page-shell">
      <section className="store-panel">
        <h1>Store</h1>

        <p>You currently have {cookies} cookies.</p>

        <div className="store-grid">
          {store.map((item) => (
            <article className="store-card" key={item.id}>
              <h2>{item.name}</h2>

              <p>Grade: {item.grade}</p>
              <p>Cost: {item.cost} cookies</p>
              <p>Power: +{item.power}</p>

              <button
                onClick={() => onBuyItem(item)}
                disabled={cookies < item.cost}
              >
                Buy
              </button>
            </article>
          ))}
          <div className="back-button.">
            <Link className="button-link" to="/">
              Back to Game
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
