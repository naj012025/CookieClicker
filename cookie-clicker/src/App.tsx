import { useState, useEffect } from "react";
import { upgrades, autoUpgrades } from "./data/Upgrades";
import { Routes, Route } from "react-router";
import { GamePage } from "./pages/GamePage";
import { Upgrades } from "./pages/Upgrades";
import { Store } from "./pages/Store";
import { store } from "./data/StoreItems";
import { Vanity } from "./pages/Endgameitems";
import { vanity, type Progression } from "./data/Endgame";
import { saveGame, loadGame } from "./Services/GameStorage";
import type { GameSave } from "./data/GameSave";
import type { Purchaseable } from "./data/Purchaseable";

function App() {
  const [game, setGame] = useState<GameSave>(loadGame);

  const { cookies, cookiesPerClick, cookiesPerSecond } = game;

  useEffect(() => {
    saveGame(game);
  }, [game]);

  function handleCookieClick() {
    setGame((current) => ({
      ...current,
      cookies: current.cookies + current.cookiesPerClick,
    }));
  }

  function buyVanity(item: Progression) {
    setGame((current) => {
      if (current.cookies < item.cost) return current;
      if (current.ownedVanityIds.includes(item.id)) return current;
      return {
        ...current,
        cookies: current.cookies - item.cost,
        ownedVanityIds: [...current.ownedVanityIds, item.id],
      };
    });
  }

  function buyitem(item: Purchaseable) {
    setGame((current) => {
      if (current.cookies < item.cost) return current;

      return {
        ...current,
        cookies: current.cookies - item.cost,
        cookiesPerClick:
          current.cookiesPerClick + (item.kind === "click" ? item.power : 0),
        cookiesPerSecond:
          current.cookiesPerSecond + (item.kind === "auto" ? item.power : 0),
      };
    });
  }

  // Updates the render when I buy an auto upgrade.
  // Cleans up and runs another timer when cookiesPerSecond changes.
  useEffect(() => {
    if (cookiesPerSecond === 0) return;
    const timerId = window.setInterval(() => {
      setGame((current) => ({
        ...current,
        cookies: current.cookies + current.cookiesPerSecond,
      }));
    }, 1000);
    return () => window.clearInterval(timerId);
  }, [cookiesPerSecond]);

  return (
    //Routes is the entire route network needs to wrap them all.
    // each element needs its own route.
    //obs important need to import Routes,route at top.
    <Routes>
      <Route
        path="/"
        element={
          <GamePage
            cookies={cookies}
            cookiesPerClick={cookiesPerClick}
            cookiesPerSecond={cookiesPerSecond}
            onCookieClick={handleCookieClick}
          />
        }
      />

      <Route
        path="/upgrades"
        element={
          <Upgrades
            cookies={cookies}
            upgrades={upgrades}
            autoUpgrade={autoUpgrades}
            onBuyUpgrade={buyitem}
          />
        }
      />
      <Route
        path="/store"
        element={<Store cookies={cookies} store={store} onBuyItem={buyitem} />}
      />

      <Route
        path="/endgame"
        element={
          <Vanity
            cookies={cookies}
            vanity={vanity}
            ownedVanityIds={game.ownedVanityIds}
            onBuyVanity={buyVanity}
          />
        }
      />
    </Routes>
  );
}

export default App;
