import React, { useState } from "react";

import styles from "./Home.module.scss";
import TopPanel from "../../components/TopPanel";
import Monitor from "../../components/SearchPanel";
import GameCreateView from "../../components/popups/GameCreateView";

function Home() {
  const [isOpenCreateView, setIsOpenCreateView] = useState(false);
  return (
    <>
      <TopPanel />
      <Monitor />
      <button onClick={() => setIsOpenCreateView(true)}>СОЗДАТЬ ИГРУ</button>
      <br />
      <button>СЫГРАТЬ С ДРУГОМ</button>
      <br />
      <button>СЫГРАТЬ С КОМПЬЮТЕРОМ</button>
      <GameCreateView
        isActive={isOpenCreateView}
        setIsActive={setIsOpenCreateView}
      />
    </>
  );
}

export default Home;
