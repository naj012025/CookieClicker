import { Link } from "react-router";

type GamePageProps = {
  cookies: number;
  cookiesPerClick: number;
  cookiesPerSecond: number;
  onCookieClick: () => void;
};

export function GamePage({
  cookies,
  cookiesPerClick,
  cookiesPerSecond,
  onCookieClick,
}: GamePageProps) {
  return (
    <main className="stats">
      <section className="game-panel">
        <h1>Cookie Clicker</h1>

        <div className="stats">
          <p>
            <strong>{cookies}</strong>total cookies
          </p>
          <p>{cookiesPerClick} cookies per click</p>
          <p>{cookiesPerSecond} cookiesPerSecond </p>
        </div>

        <div className="button-row">
          <button onClick={onCookieClick}>cookies!!</button>
          <Link className="button-link" to="/upgrades">
            Open Upgrades
          </Link>
          <Link className="button-link" to="/store">
            Store
          </Link>
          <Link className="button-link" to="/endgame">
            Progression
          </Link>
        </div>
      </section>
    </main>
  );
}
