import { useState, useEffect } from "react";
import { upgrades, autoUpgrades } from "./data/Upgrades";
import { Routes, Route } from "react-router";
import { GamePage } from "./pages/GamePage";
import { Upgrades } from "./pages/Upgrades";
import { Store } from "./pages/Store";
import { store } from "./data/StoreItems";
import { Vanity } from "./pages/Endgameitems";
import { vanity, type Progression } from "./data/Endgame";
import type { Purchaseable } from "./data/Purchaseable";

function App() {
  const [cookies, setCookies] = useState(0);
  const [cookiesPerClick, setCookiesPerClick] = useState(1);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(0);

  function handleCookieClick() {
    setCookies((current) => current + cookiesPerClick);
  }

  function buyVanity(item: Progression) {
    if (cookies < item.cost) {
      return;
    }
    setCookies((current) => current - item.cost);
  }

  function buyitem(item: Purchaseable) {
    if (cookies < item.cost) {
      return;
    }

    setCookies((current) => current - item.cost);

    if (item.kind === "click") {
      setCookiesPerClick((current) => current + item.power);
      return;
    }

    setCookiesPerSecond((current) => current + item.power);
  }

  // Updates the render when I buy an auto upgrade.
  // Cleans up and runs another timer when cookiesPerSecond changes.
  useEffect(() => {
    if (cookiesPerSecond === 0) {
      return;
    }

    const timerId = window.setInterval(() => {
      setCookies((current) => current + cookiesPerSecond);
    }, 1000);

    return () => {
      window.clearInterval(timerId);
    };
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
          <Vanity cookies={cookies} vanity={vanity} onBuyVanity={buyVanity} />
        }
      />
    </Routes>
  );
}

export default App;
